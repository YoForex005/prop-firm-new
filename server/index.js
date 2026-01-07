const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const https = require('https');
const { HttpsProxyAgent } = require('https-proxy-agent');
const MT5Manager = require('./mt5-manager');

// Disable SSL verification for self-signed certificates
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const app = express();
const PORT = 3001;

// Proxy Configuration (whitelisted IP for MT5 connection)
const PROXY_CONFIG = {
    host: '81.29.145.69',
    port: 49527,
    auth: {
        username: 'fGUqTcsdMsBZlms',
        password: '3eo1qF91WA7Fyku'
    }
};

// MT5 Manager Configuration
const MT5_CONFIG = {
    server: '86.104.251.172',
    port: 443, // Proxy whitelisted for port 443
    login: 1111,
    password: 'Ak@47#YoFx'
};

// Create proxy agent for HTTPS requests
const proxyUrl = `http://${PROXY_CONFIG.auth.username}:${PROXY_CONFIG.auth.password}@${PROXY_CONFIG.host}:${PROXY_CONFIG.port}`;
const proxyAgent = new HttpsProxyAgent(proxyUrl);

// Initialize MT5 Client
// Initialize MT5 Client
const mt5Client = new MT5Manager({
    ...MT5_CONFIG,
    proxy: PROXY_CONFIG
});

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
        proxyHost: PROXY_CONFIG.host,
        proxyPort: PROXY_CONFIG.port,
        mt5Connected: mt5Client.isConnected
    });
});

// Test MT5 Connection through proxy
app.get('/api/mt5/test-connection', async (req, res) => {
    try {
        console.log('Testing MT5 connection...');
        await mt5Client.connect();
        res.json({
            success: true,
            message: 'Connected to MT5 successfully',
            sessionActive: mt5Client.isConnected
        });
    } catch (error) {
        console.error('MT5 Connection Test Failed:', error.message);
        res.status(500).json({
            success: false,
            error: error.message,
            details: 'Failed to connect to MT5 server'
        });
    }
});

// Create Demo MT5 Account
app.post('/api/mt5/create-demo', async (req, res) => {
    try {
        const { name, email, leverage = 100, balance = 100000, group = 'demo\\Standard' } = req.body;

        console.log(`\n========================================`);
        console.log(`Creating demo account for: ${name} (${email})`);
        console.log(`Using proxy: ${PROXY_CONFIG.host}:${PROXY_CONFIG.port}`);
        console.log(`MT5 Server: ${MT5_CONFIG.server}:${MT5_CONFIG.port}`);
        console.log(`========================================\n`);

        // Generate passwords
        const mainPassword = generatePassword();
        const investorPassword = generatePassword();

        let account;
        let usingRealMT5 = false;

        // Try to create account via MT5 Web API
        try {
            account = await mt5Client.createUser({
                name: name,
                email: email,
                group: group,
                leverage: leverage,
                balance: balance,
                password: mainPassword,
                investorPassword: investorPassword
            });
            usingRealMT5 = true;
            console.log('✓ Account created via MT5 API:', account.login);
        } catch (mt5Error) {
            console.log('MT5 API not available:', mt5Error.message);
            console.log('Creating account locally for demo purposes...\n');

            // Fallback: Create account locally
            account = {
                login: Math.floor(50000 + Math.random() * 50000),
                password: mainPassword,
                investorPassword: investorPassword,
                group: group,
                leverage: leverage,
                balance: balance
            };
        }

        // Build full account object
        const fullAccount = {
            login: account.login,
            password: account.password,
            investorPassword: account.investorPassword,
            server: 'FlexyMarkets-Server',
            serverAddress: `${MT5_CONFIG.server}:${MT5_CONFIG.port}`,
            platform: 'MT5',
            name: name,
            email: email,
            leverage: account.leverage,
            balance: account.balance,
            group: account.group,
            type: 'Demo',
            usingRealMT5: usingRealMT5,
            created: new Date().toISOString()
        };

        // Store in memory
        createdAccounts.push(fullAccount);

        console.log(`\n✓ Demo account created successfully!`);
        console.log(`  Login: ${fullAccount.login}`);
        console.log(`  Password: ${fullAccount.password}`);
        console.log(`  Server: ${fullAccount.server}`);
        console.log(`  Real MT5: ${usingRealMT5 ? 'Yes' : 'No (simulated)'}\n`);

        res.json({
            success: true,
            message: 'Demo account created successfully',
            realMT5: usingRealMT5,
            account: {
                login: fullAccount.login,
                password: fullAccount.password,
                investorPassword: fullAccount.investorPassword,
                server: fullAccount.server,
                serverAddress: fullAccount.serverAddress,
                platform: fullAccount.platform,
                leverage: fullAccount.leverage,
                balance: fullAccount.balance
            }
        });

    } catch (error) {
        console.error('Error creating demo account:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to create demo account',
            error: error.message
        });
    }
});

// Get all created accounts
app.get('/api/mt5/accounts', (req, res) => {
    res.json({
        success: true,
        count: createdAccounts.length,
        accounts: createdAccounts.map(acc => ({
            login: acc.login,
            name: acc.name,
            email: acc.email,
            type: acc.type,
            balance: acc.balance,
            server: acc.server,
            realMT5: acc.usingRealMT5,
            created: acc.created
        }))
    });
});

// Get account by login
app.get('/api/mt5/accounts/:login', (req, res) => {
    const login = parseInt(req.params.login);
    const account = createdAccounts.find(acc => acc.login === login);

    if (!account) {
        return res.status(404).json({ success: false, message: 'Account not found' });
    }

    res.json({ success: true, account });
});

// Start server
app.listen(PORT, () => {
    console.log(`
╔═══════════════════════════════════════════════════════════════╗
║           Prop Firm MT5 Backend Server                        ║
╠═══════════════════════════════════════════════════════════════╣
║  Server running on: http://localhost:${PORT}                    ║
║  MT5 Server: ${MT5_CONFIG.server}:${MT5_CONFIG.port}                          ║
║  Manager Login: ${MT5_CONFIG.login}                                       ║
║  Proxy: ${PROXY_CONFIG.host}:${PROXY_CONFIG.port}                          ║
╠═══════════════════════════════════════════════════════════════╣
║  Endpoints:                                                   ║
║  GET  /api/health              - Health check                 ║
║  GET  /api/mt5/test-connection - Test MT5 connection          ║
║  POST /api/mt5/create-demo     - Create demo account          ║
║  GET  /api/mt5/accounts        - List all accounts            ║
║  GET  /api/mt5/accounts/:id    - Get account by login         ║
╚═══════════════════════════════════════════════════════════════╝
    `);

    // Try to connect to MT5 on startup
    console.log('Attempting to connect to MT5 server...');
    mt5Client.connect()
        .then(() => console.log('✓ Initial MT5 connection successful'))
        .catch(err => console.log('✗ Initial MT5 connection failed:', err.message));
});
