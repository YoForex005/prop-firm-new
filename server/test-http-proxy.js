/**
 * Direct TCP Connection to MT5 Manager through HTTP Proxy (CONNECT method)
 */

const net = require('net');
const http = require('http');
const tls = require('tls');

async function testHttpProxy() {
    console.log('\n========================================');
    console.log('   MT5 Manager HTTP Proxy Test');
    console.log('========================================\n');

    const PROXY = {
        host: '81.29.145.69',
        port: 49527,
        auth: 'Basic ' + Buffer.from('fGUqTcsdMsBZlms:3eo1qF91WA7Fyku').toString('base64')
    };

    const TARGET = {
        host: '86.104.251.172',
        port: 443
    };

    console.log(`Connecting to proxy: ${PROXY.host}:${PROXY.port}`);
    console.log(`Target: ${TARGET.host}:${TARGET.port}\n`);

    const req = http.request({
        host: PROXY.host,
        port: PROXY.port,
        method: 'CONNECT',
        path: `${TARGET.host}:${TARGET.port}`,
        headers: {
            'Proxy-Authorization': PROXY.auth
        }
    });

    req.on('connect', (res, socket, head) => {
        console.log('✓ Proxy connection established');
        console.log('Status:', res.statusCode, res.statusMessage);

        if (res.statusCode === 200) {
            // Upgrade to TLS for MT5 connection
            console.log('Upgrading to TLS...');

            const tlsSocket = tls.connect({
                socket: socket,
                rejectUnauthorized: false,
                servername: TARGET.host
            });

            tlsSocket.on('secureConnect', () => {
                console.log('✓ TLS handshake complete!');
                console.log('Cipher:', tlsSocket.getCipher().name);
                console.log('Protocol:', tlsSocket.getProtocol());

                // Try sending "Hello" packet (command 0x03 usually starts connection)
                // Packet: [Command 4 bytes] [Version 4 bytes] [Type 4 bytes] [Login 4 bytes]
                // 03 00 00 00 | F4 01 00 00 (500) | 02 00 00 00 (Manager) | 57 04 00 00 (1111)
                const helloPacket = Buffer.from('03000000f40100000200000057040000', 'hex');
                tlsSocket.write(helloPacket);
                console.log('Sent Hello packet (binary)...');
            });

            tlsSocket.on('data', (data) => {
                console.log('Received data:', data.toString('hex'));
            });

            tlsSocket.on('error', (err) => console.error('TLS Error:', err.message));
            tlsSocket.on('close', () => console.log('Connection closed'));
        } else {
            console.error('Proxy rejected connection');
            socket.destroy();
        }
    });

    req.on('error', (err) => {
        console.error('Proxy connection error:', err.message);
    });

    req.end();
}

testHttpProxy();
