const   http = require('http');
const urlhandler = require('url'); // more url handling
const {URL} = require('url') // pulling out only specific module required
const querystring = require('querystring');




// const server = http.createServer((req,res) => {
    // writing Headers to the repsonse object
    // res.writeHead(200, { 
    //     'Content-Type': 'text/plain',
    //     'X-Powered-By': 'Node.js',
    //     'Cache-Control': 'no-cache, no-store, must-revalidate',
    //     'Set-Cookie': 'sessionid=abc123; HttpOnly'
    //  }); 
    // writing to the response body
    // res.end('Hello World\n');     
     
    // console.log('Requesting Headers. ',req.headers);
    // const userAgent = req.headers['user-agent'];
    // const acceptLanguage = req.headers['accept-language'];
    // res.write("UserAgent ${UserAgent}\n acceptLanguage: ${acceptLanguage}");



    // usrl handling by server
    // const { url, method}   = req;
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.end(`You made this query ${url} and using this method ${method} `);

    // const parsedURL = urlhandler.parse(req.url,true)


    //pathName and query
//     const pathName = parsedURL.pathname;
//     const urlQuery = parsedURL.query;

//     res.writeHead(200, { 'Content-Type': 'text/plain' });

//     res.end(JSON.stringify({
//     pathName,
//     urlQuery,
//     fullUrl: req.url
//   }, null, 2));
// });



// const httpServer = http.createServer((req,res) => {

//     const baseUrl = "http://"+ req.headers.host+ "/";
//     const parsedUrl = new URL(req.url, baseUrl);


//     const params = Object.fromEntries(parsedUrl.searchParams);

//     const queryObj={
//         name: 'Rishabh Singh',
//         age: 22,
//         interests: ['programming']
//     };
//     quryString = querystring.stringify(queryObj);

//     res.writeHead(200, { 'Content-Type': 'application/json' });

//     res.end(JSON.stringify({
//         path: parsedUrl.pathname,
//         params,
//         exampleQuery: quryString
//     },null,2));

//     console.log(parsedUrl);
// });




// diffeent HTTP methods

let todos = [
  { id: 1, task: 'Learn Node.js', completed: false },
  { id: 2, task: 'Build an API', completed: false }
];




httpServer.listen(9213, 'localhost', () => {
    console.log('server is runnung\n');
});



