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

async function createTestAccount() {
    try {
        console.log('🔌 Connecting to Flexy MT5 Server...');
        await client.connect();

        console.log('👤 Creating account for: Test Arijeet');
        const account = await client.createAccount({
            name: 'Test Arijeet',
            email: 'test.arijeet@example.com',
            group: 'Demo\\propfirm',
            leverage: 100,
            balance: 5464,
            password: 'TestArijeet@123',
            investorPassword: 'InvestorTest@123'
        });

        console.log('\n✅ Account Created Successfully!');
        console.log('==========================================');
        console.log(`Login:     ${account.login}`);
        console.log(`Name:      Test Arijeet`);
        console.log(`Group:     ${account.group}`);
        console.log(`Leverage:  1:${account.leverage}`);
        console.log(`Balance:   $${account.balance}`);
        console.log(`Password:  TestArijeet@123`);
        console.log(`Investor:  InvestorTest@123`);
        console.log(`Server:    86.104.251.172:443`);
        console.log('==========================================');

        client.disconnect();
        process.exit(0);

    } catch (error) {
        console.error('\n❌ Error:', error.message);
        client.disconnect();
        process.exit(1);
    }
}

createTestAccount();
