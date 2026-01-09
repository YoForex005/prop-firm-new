# MT5 Web API: Technical Explanation & Request

## What is the MT5 Web API?

The **MT5 Web API** is an official interface provided by MetaQuotes (the makers of MetaTrader 5). Unlike the traditional "Manager API" which requires complex C++ DLLs and Windows-specific setup, the Web API allows external applications to communicate with the MT5 server using standard **HTTP/HTTPS** and **JSON**.

This is the modern standard for connecting websites, CRMs, and trading dashboards to the MT5 server. It allows us to:
1. Create Accounts
2. Check Balances
3. Process Deposits/Withdrawals
4. Monitor Trades

## Why do we need it?

We are building a **Node.js** backend for your Prop Firm dashboard. The Web API is the native way for Node.js applications to talk to MT5. It is faster to develop, easier to maintain, and does not require a Windows server to run bridge software.

## The Problem: "403 Forbidden"

We have successfully established a secure connection to your MT5 server at `86.104.251.172:443`.
- **Connectivity**: ✅ Excellent. We can reach the server.
- **Protocol**: ✅ Correct. The server responds to our initial handshake.
- **Authentication**: ❌ **Blocked**.

When we send the final login command with your manager credentials (`900546`), the server returns `403 Forbidden`.

IN MT5 terms, this specific error means: **"This Manager account exists, and the password is correct, but it is NOT allowed to use the Web API."**

## The Solution

Your broker (or server administrator) needs to enable a specific permission.

1.  Open **MT5 Administrator**.
2.  Navigate to **Managers** -> **Groups**.
3.  Select the group that account `900546` belongs to.
4.  Go to the **Permissions** or **Network** tab.
5.  Check the box: **"Allow Web API connections"**.
    *(Note: It might also be called "Web access" or restricted by IP whitelist)*.

Once this box is checked, our current code will work instantly.
