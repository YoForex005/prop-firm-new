# MT5 API ENDPOINTS - FINAL SUMMARY

## ✅ Working Endpoints

### Authentication
- `GET /api/auth/start` - Start authentication
- `GET /api/auth/answer` - Complete authentication

### Account Management
- `POST /api/user/add` - Create user account ✅ WORKING
- `GET /api/group/next` - List groups
- `GET /api/group/get` - Get group details

### Balance Operations
- `POST /api/trade/balance` - Add balance ❌ Permission Error (retcode 8)
- `POST /api/deal/add` - Alternative deposit endpoint (needs testing)

## 📋 API Summary

### Account Types
1. **Challenge Accounts** (Green Icon) 
   - Group: `Demo\propfirm`
   - Endpoint: `/api/mt5/create-demo`
   - Use: Prop firm evaluations

2. **Trial/Demo Accounts** (Yellow Icon)
   - Group: `demo\Propfirm`
   - Endpoint: `/api/mt5/create-actual-demo`
   - Use: Demo/trial accounts

## ⚠️ Current Limitation
The Manager account (`900546`) does NOT have permission to create deposit deals via `/api/trade/balance`.

### Required Action:
Contact broker to grant the following permissions:
- **PERM_m_trade** - Trade operations permission
- Or provide access to a different balance/deposit endpoint

### Alternative Solutions:
1. Manual balance deposits via MT5 Manager
2. Request broker to enable trade permissions
3. Use C# Manager API with full DLL access
