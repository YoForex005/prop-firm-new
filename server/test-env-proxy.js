/**
 * Test MT5 Manager gRPC with HTTP_PROXY environment variable
 */

// Set proxy environment variables BEFORE importing grpc
const PROXY_URL = 'http://fGUqTcsdMsBZlms:3eo1qF91WA7Fyku@81.29.145.69:49527';
process.env.HTTP_PROXY = PROXY_URL;
process.env.HTTPS_PROXY = PROXY_URL;
process.env.http_proxy = PROXY_URL;
process.env.https_proxy = PROXY_URL;
process.env.GRPC_PROXY = PROXY_URL;
process.env.grpc_proxy = PROXY_URL;

console.log('Proxy environment variables set');

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

async function testWithEnvProxy() {
    console.log('\n========================================');
    console.log('   MT5 gRPC Test with ENV Proxy');
    console.log('========================================\n');

    console.log('HTTP_PROXY:', process.env.HTTP_PROXY);
    console.log('GRPC Host:', GRPC_HOST);

    const mng5grpc = grpc.loadPackageDefinition(packageDefinition).mng5grpc;
    const client = new mng5grpc.Main(GRPC_HOST, grpc.credentials.createSsl());

    console.log('\nAttempting to connect to MT5 Manager...');
    console.log('Target: 86.104.251.172:443');
    console.log('Manager: 1111\n');

    const deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 45);

    client.Connect({
        user: '1111',
        password: 'Ak@47#YoFx',
        server: '86.104.251.172:443'
    }, { deadline }, (err, response) => {
        if (err) {
            console.error('Connection error:', err.code, err.details);
            console.error('Full error:', err.message);
            process.exit(1);
        }

        if (response.error) {
            console.error('MT5 error:', response.error);
            process.exit(1);
        }

        console.log('✓ Connected to MT5 Manager!');
        console.log('Session ID:', response.result);

        // Try to create an account
        console.log('\nCreating test account...');

        client.AccountCreate({
            id: response.result,
            master_pass: 'TestPass123!',
            investor_pass: 'InvPass123!',
            enabled: true,
            user: {
                FirstName: 'Demo',
                LastName: 'User',
                EMail: 'demo@test.com',
                Group: 'demo\\Standard',
                Leverage: 100
            }
        }, { deadline }, (err2, response2) => {
            if (err2) {
                console.error('Account creation error:', err2.message);
            } else if (response2.error) {
                console.error('MT5 error:', response2.error);
            } else {
                console.log('✓ Account created! Login:', response2.result);
            }

            // Disconnect
            client.Disconnect({ id: response.result }, () => {
                console.log('\nDisconnected from MT5 Manager');
                console.log('\n========================================');
                console.log('   Test Complete');
                console.log('========================================\n');
            });
        });
    });
}

testWithEnvProxy();
