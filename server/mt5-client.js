/**
 * MT5 Web API Client
 * Implements the MetaTrader 5 Web Manager API protocol
 * Uses HTTPS through the whitelisted proxy
 */

const fetch = require('node-fetch');
const crypto = require('crypto');
const { HttpsProxyAgent } = require('https-proxy-agent');

class MT5WebAPI {
    constructor(config) {
        this.server = config.server;
        this.port = config.port || 443;
        this.login = config.login;
        this.password = config.password;
        this.proxyAgent = config.proxyAgent;

        this.baseUrl = `https://${this.server}:${this.port}`;
        this.sessionId = null;
        this.isConnected = false;
    }

    /**
     * Make an authenticated request to the MT5 Web API
     */
    async request(endpoint, method = 'GET', body = null) {
        const options = {
            method,
            agent: this.proxyAgent,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            timeout: 30000
        };

        if (this.sessionId) {
            options.headers['Cookie'] = `session=${this.sessionId}`;
        }

        if (body) {
            options.body = JSON.stringify(body);
        }

        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`, options);
            const text = await response.text();

            // Try to parse as JSON
            try {
                return { ok: response.ok, status: response.status, data: JSON.parse(text) };
            } catch {
                return { ok: response.ok, status: response.status, data: text };
            }
        } catch (error) {
            console.error(`MT5 API Error [${endpoint}]:`, error.message);
            throw error;
        }
    }

    /**
     * Connect and authenticate with the MT5 Manager
     */
    async connect() {
        console.log(`Connecting to MT5 Server: ${this.baseUrl}`);
        console.log(`Manager Login: ${this.login}`);

        try {
            // MT5 Web API authentication flow
            // Step 1: Get auth challenge
            const authStart = await this.request('/api/auth/start', 'POST', {
                login: this.login,
                type: 'manager'
            });

            console.log('Auth Start Response:', authStart);

            if (!authStart.ok) {
                // Try alternative endpoints
                const altAuth = await this.request('/api/manager/auth', 'POST', {
                    login: this.login,
                    password: this.password
                });

                console.log('Alt Auth Response:', altAuth);

                if (altAuth.ok && altAuth.data.session) {
                    this.sessionId = altAuth.data.session;
                    this.isConnected = true;
                    return true;
                }

                throw new Error(`Auth failed: ${JSON.stringify(authStart.data)}`);
            }

            // Step 2: Complete authentication with password hash
            const challenge = authStart.data?.challenge || authStart.data?.srv_rand;
            if (challenge) {
                const passwordHash = this.hashPassword(challenge);
                const authFinish = await this.request('/api/auth/answer', 'POST', {
                    srv_rand_answer: passwordHash
                });

                if (authFinish.ok) {
                    this.sessionId = authFinish.data.session;
                    this.isConnected = true;
                    console.log('MT5 Authentication successful');
                    return true;
                }
            }

            throw new Error('Authentication failed');
        } catch (error) {
            console.error('MT5 Connection Error:', error.message);
            this.isConnected = false;
            throw error;
        }
    }

    /**
     * Hash password for MT5 authentication
     */
    hashPassword(challenge) {
        // MT5 uses specific password hashing - this is a simplified version
        const hash = crypto.createHash('md5')
            .update(this.password + challenge)
            .digest('hex');
        return hash;
    }

    /**
     * Create a new user account on MT5
     */
    async createUser(userData) {
        if (!this.isConnected) {
            await this.connect();
        }

        const accountData = {
            Name: userData.name,
            Email: userData.email,
            Group: userData.group || 'demo\\Standard',
            Leverage: userData.leverage || 100,
            Balance: userData.balance || 100000,
            MainPassword: userData.password,
            InvestorPassword: userData.investorPassword,
            Rights: 0, // Demo account
        };

        console.log('Creating MT5 account:', accountData);

        const response = await this.request('/api/user/add', 'POST', accountData);

        if (response.ok && response.data?.Login) {
            return {
                login: response.data.Login,
                password: userData.password,
                investorPassword: userData.investorPassword,
                group: accountData.Group,
                leverage: accountData.Leverage,
                balance: accountData.Balance
            };
        }

        throw new Error(`Account creation failed: ${JSON.stringify(response.data)}`);
    }

    /**
     * Deposit balance to an account
     */
    async deposit(login, amount, comment = 'Initial deposit') {
        if (!this.isConnected) {
            await this.connect();
        }

        const response = await this.request('/api/trade/balance', 'POST', {
            Login: login,
            Type: 2, // Balance operation
            Balance: amount,
            Comment: comment
        });

        return response;
    }

    /**
     * Get account info
     */
    async getAccount(login) {
        if (!this.isConnected) {
            await this.connect();
        }

        const response = await this.request(`/api/user/get?login=${login}`, 'GET');
        return response.data;
    }

    /**
     * Disconnect from MT5
     */
    async disconnect() {
        if (this.sessionId) {
            await this.request('/api/auth/logout', 'POST');
            this.sessionId = null;
            this.isConnected = false;
        }
    }
}

module.exports = MT5WebAPI;
