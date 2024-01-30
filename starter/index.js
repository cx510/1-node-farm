"use strict";

//////////////////////////////
// Reading and writing using FS (filesystem) in node.js

// Non-blocking mode, Asynchronous mode. Time consumig stuff will be completed in background first
// This is called Callback hell because each function is relying on previous function. This is how Node works. single-thredaed.
// const fs = require('fs');
// fs.readFile('./txt/start.txt','utf-8', (err,data1) => {
//     console.log(data1);
//     fs.readFile(`./txt/${data1}.txt`,'utf-8', (err,data2) => {
//         fs.readFile(`./txt/append.txt`,'utf-8', (err,data3) => {
//             console.log(`${data2}\n${data3}`);
//             fs.writeFile('./txt/writeOutput.txt', `${data2}\n${data3}`, (err) => {
//                 console.log(err);
//             })
//         })
//     })
// })

// console.log('Filesystem is working!')

// Blocking mode, Synchronous
// Reading and writing using FS filesystem. For other plugins visit node docs
// const fs = require('fs');
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);
// const textOut = `This is what we know about avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written!');

// Running first JS file without browser using node
// const hello = "Hello, World!";
// console.log(hello);

/////////////////////////////
// Creating a simple web server and and routing!

const http = require('http');
const url = require('url');

const server = http.createServer((req,res) => {
    //res.end('Hello from the server!');
    const pathName = req.url;
    if (pathName === '/' || pathName === '/overview'){
        res.end('This is the overview!');
    } else if (pathName === '/product'){
        res.end('This is the product!');
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('<h1>Page not found!</h1>');
    }
});

server.listen(8000,'127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});