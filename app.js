const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {  // js variable for server
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n'); // response
});

server.listen(port, hostname, () => { // listen for incoming connections
  console.log(`Server running at http://${hostname}:${port}/`); 
});

// "node app" in terminal
// when changes are made --> kill server "^C"
// we're building a frontend and backend stack
