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

async function createActualDemoAccount() {
    try {
        console.log('🔌 Connecting to Flexy MT5 Server...');
        await client.connect();

        console.log('👤 Creating DEMO account in demo\\Propfirm group...');
        const account = await client.createAccount({
            name: 'DEMO-YELLOW-ICON-TEST',
            email: 'demo.yellow.test@propfirm.com',
            group: 'demo\\Propfirm',  // ← Correct demo group name!
            leverage: 100,
            balance: 10000,
            password: 'DemoYellow@2026',
            investorPassword: 'DemoInvestorYellow@2026'
        });

        console.log('\n✅ DEMO Account Created Successfully!');
        console.log('==========================================');
        console.log(`Login:     ${account.login}`);
        console.log(`Name:      DEMO-YELLOW-ICON-TEST`);
        console.log(`Group:     ${account.group}`);
        console.log(`Leverage:  1:${account.leverage}`);
        console.log(`Password:  DemoYellow@2026`);
        console.log(`Investor:  DemoInvestorYellow@2026`);
        console.log(`Server:    86.104.251.172:443`);
        console.log('==========================================');
        console.log('\n🟡 This should now appear with a YELLOW/DEMO icon!');

        client.disconnect();
        process.exit(0);

    } catch (error) {
        console.error('\n❌ Error:', error.message);
        client.disconnect();
        process.exit(1);
    }
}

createActualDemoAccount();
