const fs = require('fs');


// sync...
// fs.writeFileSync('./test.text',"hey there");

// Async 
// fs.writeFile('./test.text',"hey there async",(err)=>{
//     try {
//         console.log("successfully");
//     } catch (error) {
//         console.log(error);
        
//     }
// });
// one more parameter for error handling

// sync - readFileSync will return result which we can store in variable but that's not the case with the readFile
// const res = fs.readFileSync("./Demo.txt","utf-8");
// console.log(res);

// // async expect callback functionnof
// fs.readFile("./Demo.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error",err);
//     }
//     else{
//         console.log(result);
//     }
// });

// fs.appendFileSync("./test.text",new Date().getDate().toLocaleString());
// fs.appendFileSync("./test.text ",`${Date.now()}\n`);


// if i run the abobe command again , it will not overwrite the text instead it will append the text

// copy of file
// fs.copyFileSync("./test.text","./copy.txt");
// fs.unlinkSync("./test.txt"); // delete the file

// console.log(fs.statSync("./test.text"));

// fs.mkdirSync("srishti-chutiya");// creating folder
// fs.mkdirSync("srishti-chutiya/Demoo/demo1",{recursive:true});

// fs.rmdirSync("srishti-chutiya");// deleting folder

// fs.rmSync("srishti-chutiya",{recursive:true});
