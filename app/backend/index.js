const express = require('express');
const axios = require('axios');

const app = express();
const AUTH_URL = process.env.AUTH_URL || 'http://auth-service.platform.svc.cluster.local:3001';

app.get('/healthz', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/readyz', async (_req, res) => {
  try {
    await axios.get(`${AUTH_URL}/verify`, { timeout: 2000 });
    res.status(200).json({ status: 'ready' });
  } catch (err) {
    res.status(503).json({ status: 'auth-unreachable', error: err.message });
  }
});

app.get('/data', async (_req, res) => {
  try {
    const auth = await axios.get(`${AUTH_URL}/verify`, { timeout: 5000 });
    res.json({ secret: 'Trésor trouvé !', auth: auth.data.status });
  } catch (err) {
    res.status(503).json({ error: err.message });
  }
});

app.listen(3002, '0.0.0.0', () => {
  console.log('Backend on 3002');
});
