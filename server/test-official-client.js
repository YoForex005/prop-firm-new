// Test the official MT5 Web API client with verified settings
const MT5WebAPIClient = require('./mt5-webapi-official');

const client = new MT5WebAPIClient({
    server: '86.104.251.172',
    port: 443,
    login: 900546,
    password: 'Lc_2PhYa',
    proxy: {
        host: '81.29.145.69',
        port: 49527,
        auth: {
            username: 'fGUqTcsdMsBZlms',
            password: '3eo1qF91WA7Fyku'
        }
    }
});

async function test() {
    try {
        console.log('Connecting to MT5 via Proxy...');
        await client.connect();

        console.log('\nTesting account creation in Demo\\propfirm...');
        const account = await client.createAccount({
            name: 'Verification User',
            email: 'verify@example.com',
            group: 'Demo\\propfirm',
            leverage: 100,
            password: 'Verified@1234'
        });

        console.log('\n✅ Account created successfully!');
        console.log('Login:', account.login);
        console.log('Group:', account.group);

        client.disconnect();
        console.log('\nTest completed successfully!');
        process.exit(0);

    } catch (error) {
        console.error('\nTest failed:', error.message);
        client.disconnect();
        process.exit(1);
    }
}

test();
