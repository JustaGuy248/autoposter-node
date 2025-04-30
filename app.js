const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('✅ Autoposter is now auto-deploying from GitHub!\n');
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Server running with auto-deploy on port 3000...');
});

