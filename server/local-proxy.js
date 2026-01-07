/**
 * Local TCP Proxy for gRPC SOCKS5 Tunneling
 * Listens on a local port, forwards traffic through SOCKS5 proxy to target
 */

const net = require('net');
const { SocksClient } = require('socks');

class LocalProxy {
    constructor(config) {
        this.localPort = config.localPort || 0; // 0 = random port
        this.targetHost = config.targetHost;
        this.targetPort = config.targetPort;
        this.proxyConfig = config.proxyConfig;
        this.server = null;
    }

    start() {
        return new Promise((resolve, reject) => {
            this.server = net.createServer((clientSocket) => {
                this.handleConnection(clientSocket);
            });

            this.server.listen(this.localPort, () => {
                const address = this.server.address();
                console.log(`Local proxy listening on port ${address.port}`);
                console.log(`Forwarding to ${this.targetHost}:${this.targetPort} via SOCKS5`);
                resolve(address.port);
            });

            this.server.on('error', (err) => {
                console.error('Local proxy server error:', err);
                reject(err);
            });
        });
    }

    async handleConnection(clientSocket) {
        try {
            // Establish connection to target through SOCKS5 proxy
            const info = await SocksClient.createConnection({
                proxy: {
                    host: this.proxyConfig.host,
                    port: this.proxyConfig.port,
                    type: 5,
                    userId: this.proxyConfig.userId,
                    password: this.proxyConfig.password
                },
                command: 'connect',
                destination: {
                    host: this.targetHost,
                    port: this.targetPort
                },
                timeout: 30000
            });

            const proxySocket = info.socket;

            // Pipe data between client (gRPC) and proxy socket
            clientSocket.pipe(proxySocket);
            proxySocket.pipe(clientSocket);

            proxySocket.on('error', (err) => {
                console.error('Proxy socket error:', err.message);
                clientSocket.destroy();
            });

            clientSocket.on('error', (err) => {
                console.error('Client socket error:', err.message);
                proxySocket.destroy();
            });

            proxySocket.on('close', () => clientSocket.destroy());
            clientSocket.on('close', () => proxySocket.destroy());

        } catch (err) {
            console.error('Failed to create SOCKS connection:', err.message);
            clientSocket.destroy();
        }
    }

    stop() {
        if (this.server) {
            this.server.close();
            this.server = null;
        }
    }
}

module.exports = LocalProxy;
