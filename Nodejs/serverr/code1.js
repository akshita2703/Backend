const http = require('http');
const  fs = require('fs');

const server = http.createServer((req,res)=>{
    // read the file 
    fs.readFile("./file1.txt","utf-8",(err,data)=>{
        if(err){
            res.writeHead(500,{'Content-Type':'text/plain'});
            res.end('Internal Server Error');
            return;
        }
        // set the response header
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.write(data);
        res.end();
    });
});

const port = 3000;
server.listen(port,()=>{
    console.log(`Server is running on port ${port} ,`);
});

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//   // Handle potential errors during file reading asynchronously
//   fs.readFile('./file1.txt', 'utf-8', (err, data) => {
//     if (err) {
//       console.error('Error reading file:', err); // Log the error message for debugging
//       res.writeHead(500, { 'Content-Type': 'text/plain' });
//       res.end('Internal Server Error');
//       return;
//     }

//     // Set the response header with correct Content-Length (optional but recommended)
//     res.writeHead(200, {
//       'Content-Type': 'text/plain',
//       'Content-Length': data.length // Set Content-Length based on data size
//     });

//     // Write the file content to the response
//     res.write(data);
//     res.end();
//   });
// });

// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
