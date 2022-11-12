const fs = require("fs")

// fs.mkdirSync("venom"); 
    // -> make directory 

// fs.writeFileSync("venom/file.txt" , "hello there experimental txt");

// fs.appendFileSync("venom/file.txt" , "  and this is more text to be appended.");

// const buff_data = fs.readFileSync("venom/file.txt");
// console.log(buff_data);

// const original_data = buff_data.toString();
//console.log(original_data);

// console.log(fs.readFileSync("venom/file.txt").toString())


//renaming the file

// fs.renameSync("venom/file.txt" , "venom/venomvj.txt");


//deletion of the file and the folder

fs.rmSync("venom/venomvj.txt");
fs.rmdirSync("venom");
