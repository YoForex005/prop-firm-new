/**
 * Test Direct TLS Connection to MT5 Manager through SOCKS proxy
 */

const tls = require('tls');
const { SocksClient } = require('socks');

async function testDirectTLS() {
    console.log('\n========================================');
    console.log('   MT5 Direct TLS Connection Test');
    console.log('========================================\n');

    const PROXY = {
        host: '81.29.145.69',
        port: 49527,
        userId: 'fGUqTcsdMsBZlms',
        password: '3eo1qF91WA7Fyku'
    };

    const MT5 = {
        host: '86.104.251.172',
        port: 443,
        login: 1111,
        password: 'Ak@47#YoFx'
    };

    try {
        console.log(`Connecting through SOCKS proxy: ${PROXY.host}:${PROXY.port}`);
        console.log(`Target MT5: ${MT5.host}:${MT5.port}\n`);

        // Establish SOCKS5 connection
        const { socket } = await SocksClient.createConnection({
            proxy: {
                host: PROXY.host,
                port: PROXY.port,
                type: 5,
                userId: PROXY.userId,
                password: PROXY.password
            },
            command: 'connect',
            destination: {
                host: MT5.host,
                port: MT5.port
            },
            timeout: 30000
        });

        console.log('✓ SOCKS proxy connection established');

        // Upgrade to TLS
        console.log('Upgrading to TLS...');

        const tlsSocket = tls.connect({
            socket: socket,
            rejectUnauthorized: false, // Accept self-signed certs
            servername: MT5.host
        });

        tlsSocket.on('secureConnect', () => {
            console.log('✓ TLS handshake complete!');
            console.log('Cipher:', tlsSocket.getCipher().name);
            console.log('Protocol:', tlsSocket.getProtocol());
            console.log('Authorized:', tlsSocket.authorized);

            // Now send MT5 Manager protocol data
            console.log('\nSending MT5 Manager handshake...');

            // MT5 Web API uses a specific JSON-based protocol over HTTPS
            // Let's try an HTTP request first to see what we get
            const httpRequest =
                `POST /api/auth/start HTTP/1.1\r\n` +
                `Host: ${MT5.host}\r\n` +
                `Content-Type: application/json\r\n` +
                `Content-Length: 78\r\n` +
                `Connection: close\r\n` +
                `\r\n` +
                `{"login":${MT5.login},"password":"${MT5.password}","type":"manager"}`;

            tlsSocket.write(httpRequest);
            console.log('Request sent, waiting for response...\n');
        });

        tlsSocket.on('data', (data) => {
            console.log('Received response:');
            console.log('---');
            console.log(data.toString());
            console.log('---');
        });

        tlsSocket.on('error', (err) => {
            console.error('TLS Error:', err.message);
        });

        tlsSocket.on('close', () => {
            console.log('\nConnection closed');
            console.log('\n========================================');
            console.log('   Test Complete');
            console.log('========================================\n');
        });

    } catch (error) {
        console.error('Error:', error.message);
    }
}

testDirectTLS();
