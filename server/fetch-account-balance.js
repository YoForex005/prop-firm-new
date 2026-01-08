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

async function fetchAccountBalance() {
    try {
        console.log('🔌 Connecting to Flexy MT5 Server...');
        await client.connect();

        const accountLogin = '900556';
        console.log(`\n📊 Fetching details for account: ${accountLogin}...`);

        // Use /api/user/get to fetch account details
        const query = `/api/user/get?login=${accountLogin}`;

        client.Get(query, (error, res, body) => {
            if (error) {
                console.error('❌ Error:', error);
                client.disconnect();
                process.exit(1);
            }

            try {
                const response = JSON.parse(body);

                if (response.retcode && response.retcode.includes('0 Done')) {
                    const account = response.answer;

                    console.log('\n✅ Account Found!');
                    console.log('==========================================');
                    console.log(`Login:    ${account.Login}`);
                    console.log(`Name:     ${account.Name}`);
                    console.log(`Group:    ${account.Group}`);
                    console.log(`Balance:  $${parseFloat(account.Balance).toFixed(2)}`);
                    console.log(`Credit:   $${parseFloat(account.Credit).toFixed(2)}`);
                    console.log(`Equity:   $${(parseFloat(account.Balance) + parseFloat(account.Credit)).toFixed(2)}`);
                    console.log(`Leverage: 1:${account.Leverage}`);
                    console.log(`Email:    ${account.Email}`);
                    console.log('==========================================');
                } else {
                    console.log('❌ Account not found or error:', response.retcode);
                }

            } catch (e) {
                console.error('❌ Parse error:', e.message);
                console.log('Raw response:', body);
            }

            client.disconnect();
            process.exit(0);
        });

    } catch (error) {
        console.error('\n❌ Error:', error.message);
        client.disconnect();
        process.exit(1);
    }
}

fetchAccountBalance();
