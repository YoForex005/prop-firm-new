const express = require('express');
const cors = require('cors');
const MT5WebAPIClient = require('./mt5-webapi-official');

// Disable SSL verification for self-signed certificates
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const app = express();
const PORT = 3001;

// MT5 Configuration (Server 1 - Verified WORKING)
const MT5_CONFIG = {
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
};

// Initialize MT5 Web API Client
const mt5Client = new MT5WebAPIClient(MT5_CONFIG);

app.use(cors());
app.use(express.json());

// Store for created accounts (in production, use a database)
const createdAccounts = [];

// Generate random password
function generatePassword() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    let password = '';
    for (let i = 0; i < 8; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password + '@1';
}

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        mt5Server: MT5_CONFIG.server,
        mt5Port: MT5_CONFIG.port,
        mt5Connected: mt5Client.authenticated
    });
});

// Test MT5 Connection
app.get('/api/mt5/test-connection', async (req, res) => {
    try {
        console.log('Testing MT5 connection...');
        await mt5Client.connect();
        res.json({
            success: true,
            message: 'Connected to MT5 Manager via Proxy',
            sessionActive: mt5Client.authenticated
        });
    } catch (error) {
        console.error('MT5 Connection Test Failed:', error.message);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Create Demo MT5 Account
app.post('/api/mt5/create-demo', async (req, res) => {
    try {
        const { name, email, leverage = 100, balance = 100000, group = 'Demo\\propfirm' } = req.body;

        console.log(`\nCreating demo account for: ${name} (${email})`);

        // Generate passwords
        const mainPassword = generatePassword();
        const investorPassword = generatePassword();

        // Ensure connected
        if (!mt5Client.authenticated) {
            await mt5Client.connect();
        }

        // Create account via MT5 Web API
        const account = await mt5Client.createAccount({
            name: name,
            email: email,
            group: group,
            leverage: leverage,
            balance: balance,
            password: mainPassword,
            investorPassword: investorPassword
        });

        const fullAccount = {
            login: account.login,
            password: mainPassword,
            investorPassword: investorPassword,
            serverAddress: `${MT5_CONFIG.server}:${MT5_CONFIG.port}`,
            name: name,
            email: email,
            leverage: leverage,
            balance: balance,
            group: account.group,
            created: new Date().toISOString()
        };

        createdAccounts.push(fullAccount);

        console.log(`✓ Account created: ${fullAccount.login}`);

        res.json({
            success: true,
            message: 'Demo account created successfully',
            account: fullAccount
        });

    } catch (error) {
        console.error('Error creating demo account:', error.message);
        res.status(500).json({
            success: false,
            message: 'Failed to create demo account',
            error: error.message
        });
    }
});

// Create ACTUAL Demo MT5 Account (Yellow Icon - demo\Propfirm group)
app.post('/api/mt5/create-actual-demo', async (req, res) => {
    try {
        const { name, email, leverage = 100, balance = 100000 } = req.body;

        console.log(`\nCreating DEMO account (yellow icon) for: ${name} (${email})`);

        // Generate passwords
        const mainPassword = generatePassword();
        const investorPassword = generatePassword();

        // Ensure connected
        if (!mt5Client.authenticated) {
            await mt5Client.connect();
        }

        // Create DEMO account via MT5 Web API in demo\Propfirm group
        const account = await mt5Client.createAccount({
            name: name,
            email: email,
            group: 'demo\\Propfirm',  // Actual demo group (yellow icon)
            leverage: leverage,
            balance: balance,
            password: mainPassword,
            investorPassword: investorPassword
        });

        const fullAccount = {
            login: account.login,
            password: mainPassword,
            investorPassword: investorPassword,
            serverAddress: `${MT5_CONFIG.server}:${MT5_CONFIG.port}`,
            name: name,
            email: email,
            leverage: leverage,
            balance: balance,
            group: account.group,
            accountType: 'demo',  // Flag as demo account
            created: new Date().toISOString()
        };

        createdAccounts.push(fullAccount);

        console.log(`✓ DEMO Account created: ${fullAccount.login}`);

        res.json({
            success: true,
            message: 'Demo account (yellow icon) created successfully',
            account: fullAccount
        });

    } catch (error) {
        console.error('Error creating demo account:', error.message);
        res.status(500).json({
            success: false,
            message: 'Failed to create demo account',
            error: error.message
        });
    }
});

// Add Balance to Account (For 2-Phase Challenge Purchase)
app.post('/api/mt5/deposit', async (req, res) => {
    try {
        const { login, amount, comment = 'Challenge Purchase - Phase 1' } = req.body;

        if (!login || !amount) {
            return res.status(400).json({
                success: false,
                message: 'Login and amount are required'
            });
        }

        console.log(`\nAdding $${amount} to account ${login}...`);

        // Ensure connected
        if (!mt5Client.authenticated) {
            await mt5Client.connect();
        }

        // Deposit balance to the account
        const result = await mt5Client.depositBalance(login, amount, comment);

        console.log(`✓ Balance added: $${amount} to account ${login}`);

        res.json({
            success: true,
            message: `Successfully deposited $${amount}`,
            transaction: {
                login: login,
                amount: amount,
                comment: comment,
                timestamp: new Date().toISOString()
            }
        });

    } catch (error) {
        console.error('Error depositing balance:', error.message);
        res.status(500).json({
            success: false,
            message: 'Failed to deposit balance',
            error: error.message
        });
    }
});

// Create 2-Phase Challenge Account (Auto-deposit after creation)
app.post('/api/mt5/create-challenge', async (req, res) => {
    try {
        const {
            name,
            email,
            leverage = 100,
            balance = 100000,
            phase = 1
        } = req.body;

        console.log(`\nCreating Phase ${phase} Challenge account for: ${name} (${email})`);

        const mainPassword = generatePassword();
        const investorPassword = generatePassword();

        if (!mt5Client.authenticated) {
            await mt5Client.connect();
        }

        // Create account
        const account = await mt5Client.createAccount({
            name: name,
            email: email,
            group: 'Demo\\propfirm',
            leverage: leverage,
            balance: 0,
            password: mainPassword,
            investorPassword: investorPassword
        });

        console.log(`✓ Account created: ${account.login}`);

        // Add balance
        await mt5Client.depositBalance(
            account.login,
            balance,
            `Phase ${phase} Challenge Balance`
        );

        console.log(`✓ Balance deposited: $${balance}`);

        const fullAccount = {
            login: account.login,
            password: mainPassword,
            investorPassword: investorPassword,
            serverAddress: `${MT5_CONFIG.server}:${MT5_CONFIG.port}`,
            name: name,
            email: email,
            leverage: leverage,
            balance: balance,
            group: account.group,
            accountType: 'challenge',
            phase: phase,
            created: new Date().toISOString()
        };

        createdAccounts.push(fullAccount);

        res.json({
            success: true,
            message: `Phase ${phase} challenge account created with $${balance} balance`,
            account: fullAccount
        });

    } catch (error) {
        console.error('Error creating challenge account:', error.message);
        res.status(500).json({
            success: false,
            message: 'Failed to create challenge account',
            error: error.message
        });
    }
});



// Start server
app.listen(PORT, () => {
    console.log(`Prop Firm MT5 Backend listening on port ${PORT}`);

    // Attempt initial connection
    mt5Client.connect()
        .then(() => console.log('✓ Initial MT5 connection successful'))
        .catch(err => console.log('✗ Initial MT5 connection failed:', err.message));
});
