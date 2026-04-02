// create a basic server using http method
// if you want to create a node server use http module of node

//  http and https modules
// 1. protocols ==> rules ==> how to send data, how to receive data, how to handle errors, how to manage connections, etc.
// 2. http ==> Hypertext Transfer Protocol
// 3. https ==> Hypertext Transfer Protocol Secure

// http and https modules are used to create web servers, make HTTP requests, and handle HTTP responses in Node.js. They provide a way to communicate over the web using the HTTP protocol. The http module is used for non-secure communication, while the https module is used for secure communication using SSL/TLS encryption.

const http = require('http');

//create a route file
//req --> send by user
//res --> send by server
const server = http.createServer((req, res) => {
    res.end('Hello, World!');
});

//listen to the server
//
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});//open http://localhost:3000/  in browser to see the output