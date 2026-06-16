const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello from CI/CD v1\n'));
app.get('/health', (req, res) => res.json({ status: 'ok' }));
if (require.main === module) app.listen(3000, () => console.log('up on 3000'));
module.exports = app;
