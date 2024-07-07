const http = require('http');

const server = http.createServer((req, res) => {
  // Set the response header with status code 200 and content type text/html
  res.writeHead(200, { 'Content-Type': 'text/html' });
  // Send the HTML response with larger text
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hello, World!</title>
        <style>
          .large-text {
            font-size: 48px;
            font-family: Arial, sans-serif;
          }
        </style>
      </head>
      <body>
        <div class="large-text">Hello, World!</div>
      </body>
    </html>
  `);
});

// Define the port to listen on
const port = 3000;

// Start the server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
