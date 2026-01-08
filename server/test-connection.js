/**
 * Test MT5 Manager Connection
 */

const MT5Manager = require('./mt5-manager');

async function testConnection() {
    console.log('\n========================================');
    console.log('   MT5 Manager Connection Test');
    console.log('========================================\n');

    const manager = new MT5Manager({
        server: '86.104.251.172',
        port: 443,
        login: 1111,
        password: 'Ak@47#YoFx',
        proxy: {
            host: '81.29.145.69',
            port: 49527,
            userId: 'fGUqTcsdMsBZlms',
            password: '3eo1qF91WA7Fyku'
        }
    });

    try {
        console.log('Attempting to connect to MT5 Manager...\n');
        await manager.connect();

        if (manager.connected) {
            console.log('\n✓ Successfully connected to MT5 Manager!');

            // Try to create a test user
            console.log('\nAttempting to create a test user...');
            const user = await manager.createUser({
                name: 'Test User',
                email: 'test@example.com',
                group: 'demo\\Standard',
                leverage: 100,
                balance: 100000,
                password: 'TestPass123!'
            });

            console.log('\n✓ User created:', user);
        }
    } catch (error) {
        console.error('\n✗ Error:', error.message);
    } finally {
        manager.disconnect();
    }

    console.log('\n========================================');
    console.log('   Test Complete');
    console.log('========================================\n');
}

testConnection();
