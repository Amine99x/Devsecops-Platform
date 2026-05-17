const express = require('express');
const app = express();

app.get('/verify', (_req, res) => {
  res.json({ status: '✅ ACCÈS AUTORISÉ' });
});

app.get('/healthz', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/readyz', (_req, res) => {
  res.status(200).json({ status: 'ready' });
});

app.listen(3001, '0.0.0.0', () => {
  console.log('Auth on 3001');
});

// Update: Sun May 17 09:25:55 AM +01 2026

// Update: Sun May 17 09:26:19 AM +01 2026

// Update: Sun May 17 09:28:40 AM +01 2026

// Update: Sun May 17 09:28:59 AM +01 2026

// Update: Sun May 17 09:29:36 AM +01 2026
