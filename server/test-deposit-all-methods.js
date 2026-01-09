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

async function testAllDepositMethods() {
    try {
        console.log('🔌 Connecting to Flexy MT5 Server...');
        await client.connect();

        const accountLogin = '900556';
        const depositAmount = 100000;
        const comment = 'Test Deposit';

        console.log(`\n💰 Testing balance deposit to account ${accountLogin}...`);
        console.log(`Amount: $${depositAmount}\n`);

        // Method 1: GET with query parameters (Official documentation method)
        console.log('=== Method 1: GET /api/trade/balance ===');
        const query1 = `/api/trade/balance?login=${accountLogin}&type=2&balance=${depositAmount}&comment=${encodeURIComponent(comment)}`;
        console.log(`Trying: GET ${query1}`);

        const testMethod1 = () => new Promise((resolve) => {
            client.Get(query1, (error, res, body) => {
                console.log('Response:', body);
                if (body && body.includes('0 Done')) {
                    console.log('✅ Method 1 SUCCESS!\n');
                    resolve(true);
                } else {
                    console.log('❌ Method 1 FAILED\n');
                    resolve(false);
                }
            });
        });

        const success1 = await testMethod1();
        if (success1) {
            console.log('🎉 Deposit successful! Verifying balance...');
            await verifyBalance(accountLogin);
            client.disconnect();
            process.exit(0);
        }

        // Method 2: POST with query parameters
        console.log('=== Method 2: POST /api/trade/balance (query params) ===');
        const query2 = `/api/trade/balance?login=${accountLogin}&type=2&balance=${depositAmount}&comment=${encodeURIComponent(comment)}`;
        console.log(`Trying: POST ${query2}`);

        const testMethod2 = () => new Promise((resolve) => {
            client.Post(query2, '', (error, res, body) => {
                console.log('Response:', body);
                if (body && body.includes('0 Done')) {
                    console.log('✅ Method 2 SUCCESS!\n');
                    resolve(true);
                } else {
                    console.log('❌ Method 2 FAILED\n');
                    resolve(false);
                }
            }, 'application/x-www-form-urlencoded');
        });

        const success2 = await testMethod2();
        if (success2) {
            console.log('🎉 Deposit successful! Verifying balance...');
            await verifyBalance(accountLogin);
            client.disconnect();
            process.exit(0);
        }

        // Method 3: POST with JSON body
        console.log('=== Method 3: POST /api/trade/balance (JSON body) ===');
        const payload3 = JSON.stringify({
            login: accountLogin,
            type: 2,
            balance: depositAmount,
            comment: comment
        });
        console.log('Payload:', payload3);

        const testMethod3 = () => new Promise((resolve) => {
            client.Post('/api/trade/balance', payload3, (error, res, body) => {
                console.log('Response:', body);
                if (body && body.includes('0 Done')) {
                    console.log('✅ Method 3 SUCCESS!\n');
                    resolve(true);
                } else {
                    console.log('❌ Method 3 FAILED\n');
                    resolve(false);
                }
            }, 'application/json');
        });

        const success3 = await testMethod3();
        if (success3) {
            console.log('🎉 Deposit successful! Verifying balance...');
            await verifyBalance(accountLogin);
            client.disconnect();
            process.exit(0);
        }

        console.log('\n⚠️  All methods failed. Please verify manager permissions.');
        client.disconnect();
        process.exit(1);

    } catch (error) {
        console.error('\n❌ Error:', error.message);
        client.disconnect();
        process.exit(1);
    }
}

async function verifyBalance(login) {
    return new Promise((resolve) => {
        setTimeout(() => {
            client.Get(`/api/user/get?login=${login}`, (error, res, body) => {
                if (!error) {
                    try {
                        const response = JSON.parse(body);
                        const account = response.answer;
                        console.log('\n📊 Account Balance After Deposit:');
                        console.log('==========================================');
                        console.log(`Balance: $${parseFloat(account.Balance).toFixed(2)}`);
                        console.log(`Credit:  $${parseFloat(account.Credit).toFixed(2)}`);
                        console.log('==========================================');
                    } catch (e) {
                        console.log('Could not verify balance');
                    }
                }
                resolve();
            });
        }, 1000);
    });
}

testAllDepositMethods();
