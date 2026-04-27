const express = require('express');
const app = express();

app.get('/healthz', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/readyz', (_req, res) => {
  res.status(200).json({ status: 'ready' });
});

app.get('/logs', (_req, res) => {
  res.json({ status: 'logger alive' });
});

app.listen(3010, '0.0.0.0', () => {
  console.log('Logger on 3010');
});
