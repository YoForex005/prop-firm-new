/**
 * MT5 Manager gRPC Client
 * Uses mtapi.io gRPC proxy to connect to MT5 Manager
 */

const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

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

class MT5ManagerGRPC {
    constructor(config) {
        this.server = config.server;
        this.port = config.port || 443;
        this.login = config.login;
        this.password = config.password;

        this.sessionId = null;
        this.connected = false;

        // Initialize gRPC client
        const mng5grpc = grpc.loadPackageDefinition(packageDefinition).mng5grpc;
        this.client = new mng5grpc.Main(GRPC_HOST, grpc.credentials.createSsl());

        console.log(`MT5 Manager gRPC Client initialized`);
        console.log(`Target: ${this.server}:${this.port}`);
        console.log(`Manager: ${this.login}`);
    }

    /**
     * Connect to MT5 Manager through mtapi.io gRPC proxy
     */
    connect() {
        return new Promise((resolve, reject) => {
            console.log('\nConnecting to MT5 Manager via gRPC...');
            console.log(`Server: ${this.server}:${this.port}`);

            this.client.Connect({
                user: String(this.login),
                password: this.password,
                server: `${this.server}:${this.port}`
            }, (err, response) => {
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
            console.log('User:', userData.name || userData.FirstName);

            const request = {
                id: this.sessionId,
                master_pass: userData.password || this.generatePassword(),
                investor_pass: userData.investorPassword || this.generatePassword(),
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

            this.client.AccountCreate(request, (err, response) => {
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
                    password: request.master_pass,
                    investorPassword: request.investor_pass,
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

            this.client.Deposit({
                id: this.sessionId,
                login: String(login),
                amount: amount,
                comment: comment
            }, (err, response) => {
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
     * Get user details
     */
    getUserDetails(login) {
        return new Promise((resolve, reject) => {
            if (!this.connected || !this.sessionId) {
                reject(new Error('Not connected to MT5 Manager'));
                return;
            }

            this.client.UserDetails({
                id: this.sessionId,
                login: String(login)
            }, (err, response) => {
                if (err) {
                    reject(err);
                    return;
                }

                if (response.error) {
                    reject(new Error(response.error));
                    return;
                }

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

module.exports = MT5ManagerGRPC;
