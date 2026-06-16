const app = require('./app');
if (typeof app !== 'function') { console.error('FAIL'); process.exit(1); }
console.log('test passed');
