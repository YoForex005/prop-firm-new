# MT5 Web API - UserAdd Payload Documentation

## Overview
After extensive testing, the correct payload format for creating a user via the MT5 Web API `/api/user/add` endpoint has been identified. This format resolves the `retcode 3: Invalid parameters` error.

## Endpoint
`POST /api/user/add`

## Headers
*   **Content-Type**: `application/json` (CRITICAL)
*   **Connection**: `keep-alive`

## Payload Structure (JSON)
The payload must be a **FLAT** JSON object containing both user details and passwords. Nested structures (e.g., `{ user: {...}, master_pass: ... }`) are **NOT** supported by this implementation.

### Required Fields
```json
{
  "Login": "0",                  // String "0" for auto-assignment
  "Group": "demo\\Standard",     // Valid Group Name (must exist on server)
  "Name": "John Doe",            // Full Name
  "PassMain": "Secret123!",      // Master Password (PascalCase)
  "PassInvestor": "Invest123!",  // Investor Password (PascalCase)
  "Leverage": 100,               // Integer
  "Rights": 5                    // Integer (1=Enabled, 4=Password, 5=Both)
}
```

### Optional Fields
```json
{
  "Email": "user@example.com",
  "Phone": "1234567890",
  "Country": "USA",
  "City": "New York",
  "State": "NY",
  "ZipCode": "10001",
  "Address": "123 Wall St",
  "PhonePassword": "",
  "Balance": 0
}
```

## Error Codes
*   **Retcode 3 (Invalid parameters)**:
    *   Sent `x-www-form-urlencoded` instead of `application/json`.
    *   Used nested JSON structure.
    *   Missed required fields (like `PassMain`).
*   **Retcode 8 (Not enough permissions)**:
    *   Payload is **CORRECT**, but the Manager account does not have "Create Users" permission.
    *   **Solution**: Contact Broker to enable `PERM_m_users` for the Manager account.
*   **HTTP 403 (Forbidden)**:
    *   Server-side firewall or IP restriction on the endpoint.
    *   Often accompanies Retcode 8 permissions issues but blocked at the web server level.

## Verified Implementation
The `server/mt5-webapi-official.js` file has been updated to use this correct format.
