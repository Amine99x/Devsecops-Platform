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
