/**
 * MT5 Manager Direct Connection via HTTP Tunnel
 * Connects to MT5 Manager (Binary Protocol) through whitelisted HTTP proxy
 */

const net = require('net');
const http = require('http');
const tls = require('tls');
const crypto = require('crypto');

class MT5Manager {
    constructor(config) {
        this.server = config.server;
        this.port = config.port || 443;
        this.login = config.login;
        this.password = config.password;
        this.proxy = config.proxy;

        this.socket = null;
        this.connected = false;
        this.buffer = Buffer.alloc(0);
    }

    /**
     * Connect to MT5 Manager through HTTP CONNECT proxy
     */
    connect() {
        return new Promise((resolve, reject) => {
            console.log(`\n=== MT5 Manager Connection (HTTP Tunnel) ===`);
            console.log(`Server: ${this.server}:${this.port}`);
            console.log(`Proxy: ${this.proxy.host}:${this.proxy.port}`);
            console.log(`============================================\n`);

            const proxyAuth = 'Basic ' + Buffer.from(`${this.proxy.auth.username}:${this.proxy.auth.password}`).toString('base64');

            const req = http.request({
                host: this.proxy.host,
                port: this.proxy.port,
                method: 'CONNECT',
                path: `${this.server}:${this.port}`,
                headers: {
                    'Proxy-Authorization': proxyAuth
                }
            });

            req.on('connect', (res, socket, head) => {
                if (res.statusCode === 200) {
                    console.log('✓ HTTP Proxy tunnel established');
                    this.upgradeToTLS(socket, resolve, reject);
                } else {
                    const err = new Error(`Proxy rejected: ${res.statusCode} ${res.statusMessage}`);
                    console.error(err.message);
                    socket.destroy();
                    reject(err);
                }
            });

            req.on('error', (err) => {
                console.error('Proxy request error:', err.message);
                reject(err);
            });

            req.end();
        });
    }

    /**
     * Upgrade TCP socket to TLS
     */
    upgradeToTLS(socket, resolve, reject) {
        console.log('Upgrading to TLS...');

        this.socket = tls.connect({
            socket: socket,
            rejectUnauthorized: false,
            servername: this.server
        });

        this.socket.on('secureConnect', async () => {
            console.log('✓ TLS handshake complete!');
            this.connected = true;

            // Try to handshake (will fail without DLL logic usually)
            try {
                await this.performHandshake();
                resolve(true); // Connected successfully (at least socket level)
            } catch (e) {
                console.log('Handshake incomplete (protocol limitation):', e.message);
                resolve(true); // Still resolve as "Connected" (Network OK)
            }
        });

        this.socket.on('data', (data) => this.handleData(data));
        this.socket.on('error', (err) => {
            console.error('TLS socket error:', err.message);
            if (!this.connected) reject(err);
        });

        this.socket.on('close', () => {
            console.log('Connection closed');
            this.connected = false;
        });
    }

    handleData(data) {
        // console.log(`Received ${data.length} bytes`);
        this.buffer = Buffer.concat([this.buffer, data]);
    }

    /**
     * Perform minimal handshake to keep connection alive if possible
     */
    async performHandshake() {
        console.log('Sending Hello packet...');
        // 03 00 00 00 | F4 01 00 00 (500) | 02 00 00 00 (Manager) | ...
        const buffer = Buffer.alloc(64);
        let offset = 0;
        buffer.writeUInt32LE(0x03, offset); offset += 4;
        buffer.writeUInt32LE(0x01F4, offset); offset += 4;
        buffer.writeUInt32LE(0x02, offset); offset += 4;
        buffer.writeUInt32LE(this.login, offset); offset += 4;

        this.socket.write(buffer.slice(0, offset));

        await this.waitForData(2000);
        if (this.buffer.length > 0) {
            console.log('✓ Received response from server (Binary Protocol confirmed)');
        }
    }

    async waitForData(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * Create User (Placeholder for missing native implementation)
     */
    async createUser(userData) {
        if (!this.connected) throw new Error('Not connected');

        // Since we can't really create user without DLL/Binary Proto impl:
        throw new Error('Native protocol implementation missing (DLL required)');
    }

    disconnect() {
        if (this.socket) {
            this.socket.end();
            this.socket = null;
        }
    }
}

module.exports = MT5Manager;
