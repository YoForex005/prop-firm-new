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

async function testChallengeCreation() {
    try {
        console.log('🔌 Connecting to Flexy MT5 Server...');
        await client.connect();

        console.log('\n📝 Creating Phase 1 Challenge Account...');

        // Step 1: Create Account
        const account = await client.createAccount({
            name: 'Challenge Test User',
            email: 'challenge.test@propfirm.com',
            group: 'Demo\\propfirm',
            leverage: 100,
            balance: 0,
            password: 'ChallengeTest@123',
            investorPassword: 'InvestorChallenge@123'
        });

        console.log(`✅ Account Created: ${account.login}`);

        // Step 2: Deposit Balance
        console.log('\n💰 Depositing $100,000 balance...');
        const depositResult = await client.depositBalance(
            account.login,
            100000,
            'Phase 1 Challenge - $100K'
        );

        console.log('✅ Deposit Complete!');
        console.log('\n==========================================');
        console.log(`Login:           ${account.login}`);
        console.log(`Name:            Challenge Test User`);
        console.log(`Group:           ${account.group}`);
        console.log(`Leverage:        1:${account.leverage}`);
        console.log(`Initial Balance: $100,000`);
        console.log(`Password:        ChallengeTest@123`);
        console.log(`Investor:        InvestorChallenge@123`);
        console.log(`Server:          86.104.251.172:443`);
        console.log('==========================================');
        console.log('\n🟢 Check MT5 Manager - Account should show $100,000 balance!');

        client.disconnect();
        process.exit(0);

    } catch (error) {
        console.error('\n❌ Error:', error.message);
        client.disconnect();
        process.exit(1);
    }
}

testChallengeCreation();
