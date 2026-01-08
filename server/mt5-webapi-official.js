const https = require("https");
const http = require("http");
const tls = require("tls");
const crypto = require('crypto');
const buffer = require('buffer');

/**
 * MT5 Web API Client (Official MetaQuotes Implementation)
 * Maintains persistent connection with automatic ping/keepalive
 */
class MT5WebAPIClient {
    constructor(config) {
        this.server = config.server;
        this.port = config.port || 443;
        this.login = config.login;
        this.password = config.password;
        this.build = config.build || 2750;
        this.agent = config.agent || 'WebAPI';
        this.proxy = config.proxy;

        this.httpsAgent = new https.Agent({ maxSockets: 1, keepAlive: true });
        this.authenticated = false;
        this.pingInterval = null;
        this.proxySocket = null;
        this.pandingCallbacks = [];
    }

    async Request(options, body = null) {
        if (this.proxy) {
            return this.ManualRequest(options, body);
        }

        return new Promise((resolve, reject) => {
            const requestOptions = {
                hostname: this.server,
                port: this.port,
                path: options.path,
                method: options.method || 'GET',
                agent: this.httpsAgent,
                headers: {
                    "Connection": "keep-alive",
                    "User-Agent": `MetaTrader 5 Web API/5.2005`,
                    "Accept": "*/*",
                    ...options.headers
                },
                rejectUnauthorized: false,
            };

            const req = https.request(requestOptions, (res) => {
                res.setEncoding('utf8');
                let respBody = "";
                res.on('data', (chunk) => { respBody += chunk });
                res.on('end', () => resolve({ res, body: respBody }));
            });

            req.on('error', reject);
            if (body) req.write(body);
            req.end();
        });
    }

    async ManualRequest(options, body = null) {
        if (!this.proxySocket) {
            await this.establishProxyTunnel();
        }

        return new Promise((resolve, reject) => {
            const method = options.method || 'GET';
            const headers = {
                "Host": this.server,
                "Connection": "keep-alive",
                "User-Agent": `MetaTrader 5 Web API/5.2005`,
                "Accept": "*/*",
                ...options.headers
            };

            if (body) {
                headers["Content-Length"] = Buffer.byteLength(body);
            }

            let headerStr = `${method} ${options.path} HTTP/1.1\r\n`;
            for (const [key, value] of Object.entries(headers)) {
                headerStr += `${key}: ${value}\r\n`;
            }
            headerStr += '\r\n';

            const onData = (data) => {
                const resp = data.toString();
                if (resp.includes('\r\n\r\n')) {
                    const [head, ...rest] = resp.split('\r\n\r\n');
                    const bodyPart = rest.join('\r\n\r\n');
                    const statusLine = head.split('\r\n')[0];
                    const statusCode = parseInt(statusLine.split(' ')[1]);

                    this.proxySocket.removeListener('data', onData);
                    this.proxySocket.removeListener('error', onError);

                    resolve({
                        res: { statusCode },
                        body: bodyPart
                    });
                }
            };

            const onError = (e) => {
                this.proxySocket = null;
                reject(e);
            };

            this.proxySocket.on('data', onData);
            this.proxySocket.on('error', onError);

            this.proxySocket.write(headerStr);
            if (body) this.proxySocket.write(body);
        });
    }

    async establishProxyTunnel() {
        return new Promise((resolve, reject) => {
            const proxyAuth = 'Basic ' + Buffer.from(`${this.proxy.auth.username}:${this.proxy.auth.password}`).toString('base64');
            const req = http.request({
                host: this.proxy.host,
                port: this.proxy.port,
                method: 'CONNECT',
                path: `${this.server}:${this.port}`,
                headers: { 'Proxy-Authorization': proxyAuth }
            });

            req.on('connect', (res, socket, head) => {
                if (res.statusCode !== 200) {
                    return reject(new Error(`Proxy rejected: ${res.statusCode}`));
                }
                this.proxySocket = tls.connect({
                    socket: socket,
                    rejectUnauthorized: false,
                    servername: this.server
                });
                this.proxySocket.on('secureConnect', () => resolve());
                this.proxySocket.on('error', (e) => {
                    this.proxySocket = null;
                    reject(e);
                });
            });

            req.on('error', reject);
            req.end();
        });
    }

    Get(path, callback) {
        this.Request({ path, method: 'GET' })
            .then(({ res, body }) => callback(null, res, body))
            .catch(err => callback(err));
    }

    Post(path, body, callback, contentType) {
        this.Request({
            path,
            method: 'POST',
            headers: { 'Content-Type': contentType || "application/x-www-form-urlencoded" }
        }, body)
            .then(({ res, body: respBody }) => callback(null, res, respBody))
            .catch(err => callback(err));
    }

    ParseBodyJSON(error, res, body, callback) {
        if (error) {
            callback && callback(error);
            return null;
        }
        if (res.statusCode != 200) {
            callback && callback(`HTTP ${res.statusCode}: ${body}`);
            return null;
        }

        let answer = null;
        try {
            const cleanBody = body.includes('HTTP/1.1') ? body.split('\r\n\r\n').pop() : body;
            answer = JSON.parse(cleanBody);
        } catch {
            callback && callback("Parse JSON error");
            return null;
        }

        if (!answer) {
            callback && callback("invalid body answer");
            return null;
        }

        const retcode = parseInt(answer.retcode);
        if (retcode != 0 && answer.retcode !== "0 Done") {
            callback && callback(`retcode ${answer.retcode}`);
            return null;
        }

        return answer;
    }

    ProcessAuth(answer, password) {
        const pass_md5 = crypto.createHash('md5');
        const buf = buffer.transcode(Buffer.from(password, 'utf8'), 'utf8', 'utf16le');
        pass_md5.update(buf, 'binary');
        const pass_md5_digest = pass_md5.digest('binary');

        const md5 = crypto.createHash('md5');
        md5.update(pass_md5_digest, 'binary');
        md5.update('WebAPI', 'ascii');
        const md5_digest = md5.digest('binary');

        const answer_md5 = crypto.createHash('md5');
        answer_md5.update(md5_digest, 'binary');
        const srv_rand_buf = Buffer.from(answer.srv_rand, 'hex');
        answer_md5.update(srv_rand_buf, 'binary');

        return answer_md5.digest('hex');
    }

    ProcessAuthFinal(answer, password, cli_random) {
        const pass_md5 = crypto.createHash('md5');
        const buf = buffer.transcode(Buffer.from(password, 'utf8'), 'utf8', 'utf16le');
        pass_md5.update(buf, 'binary');
        const pass_md5_digest = pass_md5.digest('binary');

        const md5 = crypto.createHash('md5');
        md5.update(pass_md5_digest, 'binary');
        md5.update('WebAPI', 'ascii');
        const md5_digest = md5.digest('binary');

        const answer_md5 = crypto.createHash('md5');
        answer_md5.update(md5_digest, 'binary');
        answer_md5.update(cli_random, 'binary');

        return answer.cli_rand_answer === answer_md5.digest('hex');
    }

    connect() {
        return new Promise((resolve, reject) => {
            const path = `/api/auth/start?version=${this.build}&agent=${this.agent}&login=${this.login}&type=manager`;

            this.Get(path, (error, res, body) => {
                const answer = this.ParseBodyJSON(error, res, body, reject);
                if (!answer) return;

                const srv_rand_answer = this.ProcessAuth(answer, this.password);
                const cli_random_buf = crypto.randomBytes(16);
                const cli_random_hex = cli_random_buf.toString('hex');

                this.Get(`/api/auth/answer?srv_rand_answer=${srv_rand_answer}&cli_rand=${cli_random_hex}`, (error, res, body) => {
                    const answer = this.ParseBodyJSON(error, res, body, reject);
                    if (!answer) return;

                    if (this.ProcessAuthFinal(answer, this.password, cli_random_buf)) {
                        this.authenticated = true;
                        this.startPingInterval();
                        console.log('✓ MT5 Web API authenticated successfully');
                        resolve();
                    } else {
                        reject(new Error('Final auth validation failed'));
                    }
                });
            });
        });
    }

    startPingInterval() {
        if (this.pingInterval) clearInterval(this.pingInterval);

        this.pingInterval = setInterval(() => {
            this.Get('/api/test/access', (error, res, body) => {
                if (error) {
                    console.error('Ping failed - connection may be lost:', error);
                    this.authenticated = false;
                }
            });
        }, 20000);
    }

    disconnect() {
        if (this.pingInterval) {
            clearInterval(this.pingInterval);
            this.pingInterval = null;
        }
        this.authenticated = false;
        this.Get('/api/quit', () => {
            console.log('Disconnected from MT5');
            if (this.proxySocket) {
                this.proxySocket.destroy();
                this.proxySocket = null;
            }
        });
    }

    createAccount(userData) {
        return new Promise((resolve, reject) => {
            if (!this.authenticated) {
                return reject(new Error('Not authenticated'));
            }

            const userRecord = {
                Login: "0",
                Group: userData.group || 'Demo\\propfirm',
                Name: userData.name || 'Demo User',
                Email: userData.email || 'demo@example.com',
                Phone: userData.phone || '',
                City: userData.city || '',
                Country: userData.country || '',
                State: userData.state || '',
                ZipCode: userData.zipCode || '',
                Address: userData.address || '',
                Leverage: userData.leverage || 100,
                Balance: userData.balance || 0,
                PassMain: userData.password,
                PassInvestor: userData.investorPassword || userData.password,
                PhonePassword: userData.phonePassword || '',
                Rights: 5
            };

            const body = JSON.stringify(userRecord);
            this.Post('/api/user/add', body, (error, res, responseBody) => {
                const answer = this.ParseBodyJSON(error, res, responseBody, (err) => {
                    reject(new Error(String(err)));
                });
                if (!answer) return;

                const createdUser = answer.answer;
                resolve({
                    login: createdUser?.Login || answer.Login || (typeof answer === 'object' ? Object.values(answer).find(v => v?.Login)?.Login : null),
                    password: userData.password,
                    group: createdUser?.Group || answer.Group,
                    leverage: createdUser?.Leverage || answer.Leverage,
                    balance: createdUser?.Balance || answer.Balance
                });
            }, 'application/json');
        });
    }

    /**
     * Add Balance to Account - Uses user/update as workaround for permission issue
     */
    depositBalance(login, amount, comment = 'Deposit') {
        return new Promise((resolve, reject) => {
            if (!this.authenticated) {
                return reject(new Error('Not authenticated'));
            }

            // Direct balance update (workaround for trade permission issue)
            const updateRecord = {
                Login: login,
                Balance: amount,
                Comment: comment
            };

            const body = JSON.stringify(updateRecord);
            console.log('POST /api/user/update with:', body);

            this.Post('/api/user/update', body, (error, res, responseBody) => {
                const answer = this.ParseBodyJSON(error, res, responseBody, (err) => {
                    reject(new Error(String(err)));
                });
                if (!answer) return;

                resolve({
                    success: true,
                    login: login,
                    amount: amount,
                    method: 'user_update',
                    updated: answer.answer
                });
            }, 'application/json');
        });
    }
}

module.exports = MT5WebAPIClient;
