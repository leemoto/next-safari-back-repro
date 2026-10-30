# Next.js App Router: Safari Back skips a page after typing in a text field

A minimal App Router app that reproduces the bug in Safari.

```bash
npm install
npm run build
npm start
```

Open http://localhost:3100 in Safari:

1. Click **Items**.
2. Type in the search box, for example `saw`.
3. Click an item.
4. Press the browser's Back button.

**Expected:** Back returns to Items. **Actual:** Back goes to Home.

Without step 2, Back works. Chrome works in every case. The page shows `history.length` at the bottom.

Reproduces on Next.js 16.5.0-canary.32 (React 19.3.1) and on 15.5.19 (React 19.1.0), with Safari 27.0.1 on macOS 27.
