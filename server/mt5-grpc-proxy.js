/**
 * MT5 Manager gRPC Client with Proxy Support
 * Uses mtapi.io gRPC proxy through a whitelisted HTTP proxy
 */

const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');
const http = require('http');
const https = require('https');
const { HttpsProxyAgent } = require('https-proxy-agent');

// Load the proto file
const PROTO_PATH = path.join(__dirname, 'mng5grpc.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});

// gRPC host - mtapi.io proxy service
const GRPC_HOST = 'mng5grpc.mtapi.io:443';

// Whitelisted proxy configuration
const PROXY_CONFIG = {
    host: '81.29.145.69',
    port: 49527,
    username: 'fGUqTcsdMsBZlms',
    password: '3eo1qF91WA7Fyku'
};

class MT5ManagerGRPCProxy {
    constructor(config) {
        this.server = config.server;
        this.port = config.port || 443;
        this.login = config.login;
        this.password = config.password;

        this.sessionId = null;
        this.connected = false;

        // Create proxy URL
        const proxyUrl = `http://${PROXY_CONFIG.username}:${PROXY_CONFIG.password}@${PROXY_CONFIG.host}:${PROXY_CONFIG.port}`;
        console.log(`Using proxy: ${PROXY_CONFIG.host}:${PROXY_CONFIG.port}`);

        // Create custom channel options with proxy
        const channelOptions = {
            'grpc.http_proxy': proxyUrl,
            'grpc.default_authority': 'mng5grpc.mtapi.io',
            'grpc.ssl_target_name_override': 'mng5grpc.mtapi.io',
            'grpc.keepalive_time_ms': 30000,
            'grpc.keepalive_timeout_ms': 10000,
        };

        // Initialize gRPC client with proxy settings
        const mng5grpc = grpc.loadPackageDefinition(packageDefinition).mng5grpc;
        this.client = new mng5grpc.Main(
            GRPC_HOST,
            grpc.credentials.createSsl(),
            channelOptions
        );

        console.log(`MT5 Manager gRPC Client initialized (with proxy)`);
        console.log(`Target MT5: ${this.server}:${this.port}`);
        console.log(`Manager: ${this.login}`);
    }

    /**
     * Connect to MT5 Manager through mtapi.io gRPC proxy
     */
    connect() {
        return new Promise((resolve, reject) => {
            console.log('\nConnecting to MT5 Manager via gRPC (through proxy)...');
            console.log(`MT5 Server: ${this.server}:${this.port}`);

            const deadline = new Date();
            deadline.setSeconds(deadline.getSeconds() + 30);

            this.client.Connect({
                user: String(this.login),
                password: this.password,
                server: `${this.server}:${this.port}`
            }, { deadline }, (err, response) => {
                if (err) {
                    console.error('Connection error:', err.message);
                    reject(err);
                    return;
                }

                if (response.error) {
                    console.error('MT5 error:', response.error);
                    reject(new Error(response.error));
                    return;
                }

                this.sessionId = response.result;
                this.connected = true;
                console.log('✓ Connected to MT5 Manager!');
                console.log('Session ID:', this.sessionId);
                resolve(this.sessionId);
            });
        });
    }

    /**
     * Create a new MT5 account
     */
    createAccount(userData) {
        return new Promise((resolve, reject) => {
            if (!this.connected || !this.sessionId) {
                reject(new Error('Not connected to MT5 Manager'));
                return;
            }

            console.log('\nCreating MT5 account...');
            console.log('User:', userData.name || userData.firstName);

            const masterPass = userData.password || this.generatePassword();
            const investorPass = userData.investorPassword || this.generatePassword();

            const request = {
                id: this.sessionId,
                master_pass: masterPass,
                investor_pass: investorPass,
                enabled: true,
                user: {
                    FirstName: userData.firstName || userData.name?.split(' ')[0] || 'Demo',
                    LastName: userData.lastName || userData.name?.split(' ')[1] || 'User',
                    EMail: userData.email || 'demo@example.com',
                    Phone: userData.phone || '',
                    Group: userData.group || 'demo\\Standard',
                    Leverage: userData.leverage || 100,
                    Company: userData.company || '',
                    City: userData.city || '',
                    Country: userData.country || '',
                    Address: userData.address || ''
                }
            };

            const deadline = new Date();
            deadline.setSeconds(deadline.getSeconds() + 30);

            this.client.AccountCreate(request, { deadline }, (err, response) => {
                if (err) {
                    console.error('Account creation error:', err.message);
                    reject(err);
                    return;
                }

                if (response.error) {
                    console.error('MT5 error:', response.error);
                    reject(new Error(response.error));
                    return;
                }

                console.log('✓ Account created!');
                console.log('Login:', response.result);

                resolve({
                    login: response.result,
                    password: masterPass,
                    investorPassword: investorPass,
                    group: request.user.Group,
                    leverage: request.user.Leverage
                });
            });
        });
    }

    /**
     * Deposit balance to an account
     */
    deposit(login, amount, comment = 'Initial deposit') {
        return new Promise((resolve, reject) => {
            if (!this.connected || !this.sessionId) {
                reject(new Error('Not connected to MT5 Manager'));
                return;
            }

            console.log(`\nDepositing ${amount} to account ${login}...`);

            const deadline = new Date();
            deadline.setSeconds(deadline.getSeconds() + 30);

            this.client.Deposit({
                id: this.sessionId,
                login: String(login),
                amount: amount,
                comment: comment
            }, { deadline }, (err, response) => {
                if (err) {
                    console.error('Deposit error:', err.message);
                    reject(err);
                    return;
                }

                if (response.error) {
                    console.error('MT5 error:', response.error);
                    reject(new Error(response.error));
                    return;
                }

                console.log('✓ Deposit successful!');
                resolve(response.result);
            });
        });
    }

    /**
     * Disconnect from MT5
     */
    disconnect() {
        return new Promise((resolve) => {
            if (this.sessionId) {
                this.client.Disconnect({ id: this.sessionId }, () => {
                    this.sessionId = null;
                    this.connected = false;
                    console.log('Disconnected from MT5 Manager');
                    resolve();
                });
            } else {
                resolve();
            }
        });
    }

    /**
     * Generate a random password
     */
    generatePassword() {
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
        let password = '';
        for (let i = 0; i < 8; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return password + '@1';
    }
}

module.exports = MT5ManagerGRPCProxy;
