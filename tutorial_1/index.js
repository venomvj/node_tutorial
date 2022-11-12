//file system in node js :

const fs = require('fs');

// fs.writeFileSync('read.txt', "hello there! vijay here. ");
// fs.writeFileSync("read.txt" , "hey ! there I am Vijay Lowada, currently learning node Js. ");

// fs.appendFileSync("read.txt" , "I must accept the fact , Mehak Singh is dead.");
const buff_file = fs.readFileSync("read.txt");
console.log(buff_file);
//buffer is also a data type in node

const orginal_data = buff_file.toString();
console.log(orginal_data);
