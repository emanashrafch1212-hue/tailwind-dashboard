// ================================================================
// NODE.JS BACKEND - User Management Dashboard
// ================================================================

// Import built-in Node.js modules
const http = require('http');
const url = require('url');

// ================================================================
// SERVER CONFIGURATION
// ================================================================

const PORT = process.env.PORT || 5000;

// ================================================================
// REQUEST HANDLER
// ================================================================

const requestHandler = (req, res) => {
  // Parse the URL
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method;

  console.log(`[${new Date().toISOString()}] ${method} ${path}`);

  // ================================================================
  // ROUTES
  // ================================================================

  // GET / - Root endpoint
  if (path === '/' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('✅ Backend is running!');
    return;
  }

  // GET /api/status - Status endpoint
  if (path === '/api/status' && method === 'GET') {
    const response = {
      status: 'success',
      message: 'Backend server is running',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      nodeVersion: process.version
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response, null, 2));
    return;
  }

  // GET /api/users - Placeholder for future users endpoint
  if (path === '/api/users' && method === 'GET') {
    const response = {
      status: 'success',
      message: 'Users endpoint (coming soon)',
      users: []
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response, null, 2));
    return;
  }

  // 404 - Not Found
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    status: 'error',
    message: 'Endpoint not found',
    path: path
  }));
};

// ================================================================
// CREATE SERVER
// ================================================================

const server = http.createServer(requestHandler);

// ================================================================
// START SERVER
// ================================================================

server.listen(PORT, () => {
  console.log('========================================');
  console.log('🚀 User Management Backend');
  console.log('========================================');
  console.log(`📡 Server running on: http://localhost:${PORT}`);
  console.log(`📋 Test endpoints:`);
  console.log(`   GET  /          - Check if server is running`);
  console.log(`   GET  /api/status - Get server status`);
  console.log(`   GET  /api/users  - Get users (coming soon)`);
  console.log('========================================');
  console.log(`🔧 Node version: ${process.version}`);
  console.log('========================================');
  console.log('Press Ctrl+C to stop the server');
  console.log('========================================');
});

// ================================================================
// GRACEFUL SHUTDOWN
// ================================================================

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
});