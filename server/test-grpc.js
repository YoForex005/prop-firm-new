/**
 * Test MT5 Manager gRPC Connection
 */

const MT5ManagerGRPC = require('./mt5-grpc-client');

async function testGRPCConnection() {
    console.log('\n========================================');
    console.log('   MT5 Manager gRPC Connection Test');
    console.log('========================================\n');

    const manager = new MT5ManagerGRPC({
        server: '86.104.251.172',
        port: 443,
        login: 1111,
        password: 'Ak@47#YoFx'
    });

    try {
        // Step 1: Connect
        console.log('Step 1: Connecting to MT5 Manager...\n');
        await manager.connect();

        if (manager.connected) {
            console.log('\n✓ Successfully connected to MT5 Manager!');

            // Step 2: Create a test account
            console.log('\nStep 2: Creating a test demo account...');
            const account = await manager.createAccount({
                firstName: 'Demo',
                lastName: 'User',
                email: 'demo@test.com',
                group: 'demo\\Standard',
                leverage: 100,
                password: 'DemoPass123!',
                investorPassword: 'InvPass123!'
            });

            console.log('\n✓ Account created successfully!');
            console.log('   Login:', account.login);
            console.log('   Password:', account.password);
            console.log('   Investor Password:', account.investorPassword);
            console.log('   Group:', account.group);
            console.log('   Leverage:', account.leverage);

            // Step 3: Deposit initial balance
            console.log('\nStep 3: Depositing initial balance...');
            await manager.deposit(account.login, 100000, 'Free Trial Initial Deposit');
            console.log('✓ Deposited $100,000 to account');

            // Step 4: Get user details to verify
            console.log('\nStep 4: Verifying account...');
            const details = await manager.getUserDetails(account.login);
            console.log('Account details:', details);
        }
    } catch (error) {
        console.error('\n✗ Error:', error.message);
        console.error('Full error:', error);
    } finally {
        await manager.disconnect();
    }

    console.log('\n========================================');
    console.log('   Test Complete');
    console.log('========================================\n');
}

testGRPCConnection();
