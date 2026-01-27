# Aevum Integration & Troubleshooting Guide

## SYSTEM ARCHITECTURE
The Aevum application is integrated into your portfolio (`yuvboghani.com`) using a **Reverse Proxy** strategy via Vercel Rewrites.

### The Flow
1. **User** visits `yuvboghani.com/aevum`
   - **Portfolio** serves the static Project Description page.
2. **User** clicks "Try it out" (`/aevum/login` or `/aevum/home`)
   - **Portfolio Proxy:** Rewrites `/aevum/login` → `https://aevum-mu.vercel.app/aevum/login` (External Vercel App).
   - **Aevum Rewrite:** The external app receives the request and rewrites it to `/api/index.py` (Python Backend).
3. **Backend Processing:**
   - The Python FastAPI backend (running on `aevum-mu.vercel.app`) processes the request.
   - It sets a `session` cookie for authentication state.
4. **OAuth Callback:**
   - Google redirects user to `yuvboghani.com/aevum/callback`.
   - **Portfolio Proxy:** Rewrites to `aevum-mu.vercel.app/aevum/callback`.
   - **Backend:** Verifies the session cookie and `state`.

---

## CURRENT ERRORS & ROOT CAUSES

### 1. "State Mismatch" (SOLVED)
**Symptoms:** You see `{"detail": "State mismatch"}` after logging in with Google.
**Cause:** The **Session Cookie** set by the backend during `/login` is **LOST** before it reaches `/callback` due to browser security policies (`SameSite`) on cross-origin redirects.

**The Fix: Stateless Authentication (HMAC)**
Instead of fighting browser cookie policies, we moved to a **Stateless** architecture for the OAuth handshake:
1.  **Login:** We generate a secure, random `state` parameter and **sign it** using `HMAC-SHA256` and your `SESSION_SECRET`.
2.  **Callback:** We strictly verify the signature of the returned `state`.
3.  **Result:** We can verify the authenticity of the login request **without needing a session cookie**. Once verified, we set the final session cookie for the user.

---

## ARCHITECTURE & CONFIGURATION

### 1. Portfolio Proxy (`next.config.mjs`)
Rewrites are configured to proxy traffic to the Aevum Vercel deployment:
- `/aevum/login` -> `.../aevum/login` (Backend)
- `/aevum/callback` -> `.../aevum/callback` (Backend)
- `/aevum/home/*` -> `.../aevum/(Frontend)`

### 2. Aevum Backend (`main.py`)
- **Base Path:** `/aevum` (via `root_path`)
- **Auth Strategy:** Stateless HMAC Signature for handshake.
- **Session:** Standard HttpOnly cookie (set *after* successful login).

