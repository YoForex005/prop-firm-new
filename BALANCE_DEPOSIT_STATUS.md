# MT5 Balance Deposit - Current Status

## ❌ Problem: Permission Denied

All deposit methods fail with **`retcode 8: Not enough permissions`**

### Tested Methods:
1. ✅ `GET /api/trade/balance` - Permission denied
2. ✅ `POST /api/trade/balance` (query params) - Permission denied  
3. ✅ `POST /api/trade/balance` (JSON body) - Permission denied
4. ✅ `POST /api/user/update` (Balance field) - No error but doesn't actually update balance

### Evidence:
- Created account #900556
- Attempted to deposit $100,000
- Balance remains $0.00 (verified via `/api/user/get`)

## 🔧 Required Action

**The Manager account `900546` needs the following permission:**
- **`PERM_m_trade`** - Trade operations permission

or

- **Contact broker IT/Admin to enable balance/deposit operations**

## ✅ What Currently Works:
- Account creation (`/api/user/add`) - ✅ WORKING
- Account retrieval (`/api/user/get`) - ✅ WORKING
- Group listing (`/api/group/next`) - ✅ WORKING

## 💡  Workaround Options:

1. **Manual deposits via MT5 Manager UI** (temporary)
2. **Request broker to grant trade permissions** (permanent fix)
3. **Use C# Manager API with full DLL** (if Web API can't be enabled)

---

**Recommendation:** Contact your broker's technical support to enable trade/deposit permissions for Manager account 900546.
