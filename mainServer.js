const   http = require('http');
const {URL} = require('url') // pulling out only specific module required
const querystring = require('querystring');
const fs = require('fs');
const path = require('path');


const httpServer = http.createServer((req,res) => {

    const { method, url } = req;
    const parsedUrl = new URL(url, `http://${req.headers.host}`);
    const pathname = parsedUrl.pathname;




    if(method == 'GET' && pathname =='/'){
        res.writeHead(200, {'Content-Type': 'text/plain',});
        res.end('Welcome to my Node.js server!');
    }

    else if(method == 'GET' && pathname =='/about'){
        res.writeHead(200, {'Content-Type': 'text/plain',});
        fs.readFile('about.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        res.end(data);
        });
    }


    else if(method == 'GET' && pathname == '/contact'){
        const filePath = path.join(__dirname, 'contact.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading contact.html:', err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' }); // Important: Set Content-Type to text/html
        res.end(data);
    });
    }

    else if (pathname.startsWith('/images/') && method === 'GET') {
    const imagePath = path.join(__dirname, pathname); // Path directly to the image
    // Get the file extension to determine Content-Type
    const ext = path.extname(imagePath).toLowerCase();
    let contentType = 'application/octet-stream'; // Default to generic binary

    switch (ext) {
      case '.png':
        contentType = 'image/png';
        break;
      case '.jpg':
      case '.jpeg':
        contentType = 'image/jpeg';
        break;
      case '.gif':
        contentType = 'image/gif';
        break;
      case '.svg':
        contentType = 'image/svg+xml';
        break;
      // Add more image types as needed
    }

    fs.readFile(imagePath, (err, data) => { // Don't specify 'utf8' for images
      if (err) {
        if (err.code === 'ENOENT') { // File not found
          console.log(`Image not found: ${imagePath}`);
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Image not found');
        } else {
          console.error('Error serving image:', err);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
        }
        return;
      }
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data); // Send the raw buffer data
    });
  }

  else if(method == 'POST' && pathname == '/submit-contact'){
        res.writeHead(200, { 'Content-Type': 'text/plain' }); // Important: Set Content-Type to text/html
        res.end("Response is Saved Successfully");
  }


    else{
        res.writeHead(404, { 'Content-Type': 'text/plain' }); // Important: Set Content-Type to text/html
        res.end("No Such URL found");

    }
});


httpServer.listen(4444, 'localhost', () => {
    console.log('server is runnung\n');
});