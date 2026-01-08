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

async function createDemoAccount() {
    try {
        console.log('🔌 Connecting to Flexy MT5 Server...');
        await client.connect();

        console.log('👤 Creating DEMO account...');
        const account = await client.createAccount({
            name: 'DEMO-AI-CREATED-TEST',
            email: 'demo.ai.test@propfirm.com',
            group: 'Demo\\propfirm',
            leverage: 100,
            balance: 10000,
            password: 'DemoTest@2026',
            investorPassword: 'DemoInvestor@2026'
        });

        console.log('\n✅ DEMO Account Created Successfully!');
        console.log('==========================================');
        console.log(`Login:     ${account.login}`);
        console.log(`Name:      DEMO-AI-CREATED-TEST`);
        console.log(`Group:     ${account.group}`);
        console.log(`Leverage:  1:${account.leverage}`);
        console.log(`Balance:   $${account.balance}`);
        console.log(`Password:  DemoTest@2026`);
        console.log(`Investor:  DemoInvestor@2026`);
        console.log(`Server:    86.104.251.172:443`);
        console.log('==========================================');
        console.log('\n🔍 This account is clearly identifiable by name: "DEMO-AI-CREATED-TEST"');

        client.disconnect();
        process.exit(0);

    } catch (error) {
        console.error('\n❌ Error:', error.message);
        client.disconnect();
        process.exit(1);
    }
}

createDemoAccount();
