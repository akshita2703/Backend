const fs = require("fs");
const os = require("os");
console.log(os.cpus().length);

// Sync ... Blocking Operations
fs.writeFileSync("./test1.txt","Hello from blocking operation");


// Async ... non blocking operations

fs.writeFile("./test1.txt","Hello from non blocking operations",(err)=>{})