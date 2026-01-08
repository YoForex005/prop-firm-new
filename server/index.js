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

// Start server
app.listen(PORT, () => {
    console.log(`Prop Firm MT5 Backend listening on port ${PORT}`);

    // Attempt initial connection
    mt5Client.connect()
        .then(() => console.log('✓ Initial MT5 connection successful'))
        .catch(err => console.log('✗ Initial MT5 connection failed:', err.message));
});
