// MT5 Account Service - Calls our backend server which connects to MT5 Manager
// Backend runs on port 3001 and is proxied through /api

export const flexyService = {
    // Check if the backend server is running
    checkHealth: async () => {
        try {
            const response = await fetch('/api/health');
            if (!response.ok) {
                throw new Error('Backend server not responding');
            }
            return await response.json();
        } catch (error) {
            console.error('Health check failed:', error);
            throw new Error('Backend server is not running. Please start the server first.');
        }
    },

    // Create a Demo MT5 Account
    createFreeTrial: async (userDetails) => {
        try {
            // First check if backend is running
            await flexyService.checkHealth();

            const response = await fetch('/api/mt5/create-actual-demo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: userDetails.name,
                    email: userDetails.email,
                    leverage: 100,
                    balance: userDetails.balance || 100000
                })
            });

            if (!response.ok) {
                const text = await response.text();
                throw new Error(`Account creation failed: ${response.status} ${text}`);
            }

            const data = await response.json();

            if (!data.success) {
                throw new Error(data.message || 'Account creation failed');
            }

            return {
                login: data.account.login,
                password: data.account.password,
                investorPassword: data.account.investorPassword,
                server: data.account.server,
                platform: data.account.platform,
                leverage: data.account.leverage,
                balance: data.account.balance
            };
        } catch (error) {
            console.error('Free Trial Creation Failed:', error);
            throw error;
        }
    },

    // Get all created accounts
    getAccounts: async () => {
        try {
            const response = await fetch('/api/mt5/accounts');
            if (!response.ok) {
                throw new Error('Failed to fetch accounts');
            }
            const data = await response.json();
            return data.accounts || [];
        } catch (error) {
            console.error('Failed to get accounts:', error);
            throw error;
        }
    },

    // Get account by login
    getAccount: async (login) => {
        try {
            const response = await fetch(`/api/mt5/accounts/${login}`);
            if (!response.ok) {
                throw new Error('Account not found');
            }
            const data = await response.json();
            return data.account;
        } catch (error) {
            console.error('Failed to get account:', error);
            throw error;
        }
    }
};
