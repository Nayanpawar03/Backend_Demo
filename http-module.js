const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write("Welcome to our home page");
    return res.end(); // return to prevent the rest of the code from executing
  }

  if (req.url === '/about') {
    res.write("Here is our short history");
    return res.end();
  }

  // Default case for all other routes
  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Back home</a>
  `);
});

server.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});
