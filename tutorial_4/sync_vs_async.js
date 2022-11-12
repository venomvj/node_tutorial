const fs = require("fs")

// fs.writeFileSync("file.txt" , "Here is what is the content of the file. ");

// const data = fs.readFileSync("file.txt", "utf-8");
// console.log(data);
// console.log("output for the sync");


fs.readFile("file.txt" , "utf-8" , (err, data)=>{
    console.log(data);
})
console.log("Output2 for the aSync");