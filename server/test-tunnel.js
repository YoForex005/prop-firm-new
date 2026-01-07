/**
 * Test gRPC with Local TCP Proxy Tunnel
 */

const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');
const LocalProxy = require('./local-proxy');

// gRPC proto setup
const PROTO_PATH = path.join(__dirname, 'mng5grpc.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});

async function testTunnel() {
    console.log('\n========================================');
    console.log('   MT5 gRPC Tunnel Test');
    console.log('========================================\n');

    // 1. Start Local Proxy
    const proxy = new LocalProxy({
        targetHost: 'mng5grpc.mtapi.io',
        targetPort: 443,
        proxyConfig: {
            host: '81.29.145.69',
            port: 49527,
            userId: 'fGUqTcsdMsBZlms',
            password: '3eo1qF91WA7Fyku'
        }
    });

    try {
        const localPort = await proxy.start();
        console.log(`Tunnel established: localhost:${localPort} -> SOCKS5 -> mtapi.io:443`);

        // 2. Connect gRPC to Localhost
        // Note: mtapi.io uses SSL, so we need to valid SSL against the original hostname?
        // Actually, since we are tunneling TCP, the SSL handshake happens end-to-end.
        // BUT gRPC client expects the certificate to match the hostname.
        // We can override the SSL target name.

        const mng5grpc = grpc.loadPackageDefinition(packageDefinition).mng5grpc;

        const sslCreds = grpc.credentials.createSsl();
        const options = {
            'grpc.ssl_target_name_override': 'mng5grpc.mtapi.io',
            'grpc.default_authority': 'mng5grpc.mtapi.io'
        };

        const client = new mng5grpc.Main(`localhost:${localPort}`, sslCreds, options);

        console.log('\nConnecting gRPC client...');

        const deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 30);

        client.Connect({
            user: '1111',
            password: 'Ak@47#YoFx',
            server: '86.104.251.172:443'
        }, { deadline }, (err, response) => {
            if (err) {
                console.error('Connection error:', err);
                proxy.stop();
                return;
            }

            if (response.error) {
                console.error('MT5 error:', response.error);
            } else {
                console.log('✓ Connected to MT5 Manager!');
                console.log('Session ID:', response.result);
            }

            proxy.stop();
        });

    } catch (err) {
        console.error('Test failed:', err);
        proxy.stop();
    }
}

testTunnel();
