const express = require('express');
const fs = require("fs");
const port = 8000;
const app = express();
const zlib = require("zlib");fs.createReadStream('./backend.txt').pipe(zlib.createGzip().pipe(fs.createWriteStream('./backend.zip')))

app.get("/",(req,res)=>{
    // fs.readFile("./backend.txt",(err,data)=>{
    //     res.end(data);
    // })
    const stream = fs.createReadStream("./backend.txt","utf-8");
    stream.on("data",(chunk)=>{
        res.write(chunk);
    })
    stream.on("end",()=>{
        res.end();
    })
    stream.on("error",(err)=>{
        res.end(err);
    })
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
