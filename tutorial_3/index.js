// file system node core modules 

const fs = require("fs")

// fs.writeFile("file.txt", "Hello, there This is vijay from seraikella-kharsawan of jharkhand. ", 
//     (err)=>{console.log("file.txt is created")} , console.log(err));

fs.readFile("file.txt","UTF-8" , (err , data)=>{console.log(data);});