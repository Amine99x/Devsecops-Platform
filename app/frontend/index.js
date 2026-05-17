const express = require('express');
const axios = require('axios');

const app = express();
const BACKEND_URL = process.env.BACKEND_URL || 'http://backend-service.platform.svc.cluster.local:3002';

app.get('/healthz', (_req, res) => {
  res.status(200).send('ok');
});

app.get('/readyz', async (_req, res) => {
  try {
    await axios.get(`${BACKEND_URL}/readyz`, { timeout: 2000 });
    res.status(200).send('ready');
  } catch (err) {
    res.status(503).send(`backend-not-ready: ${err.message}`);
  }
});

app.get('/', async (_req, res) => {
  try {
    const resp = await axios.get(`${BACKEND_URL}/data`);
    res.send(`<h1>${resp.data.auth}</h1><h2>${resp.data.secret}</h2>`);
  } catch (err) {
    res.status(503).send(`Backend unavailable: ${err.message}`);
  }
});

app.listen(3005, '0.0.0.0', () => {
  console.log('Frontend on 3005');
});
// test ci cd
// retry ci cd
// retry ci cd
/// retry ci cd
//// retry ci cd
// retry ci cd
// DevSecOps Verified Pipeline Run - Sun May 17 04:18:45 AM +01 2026
