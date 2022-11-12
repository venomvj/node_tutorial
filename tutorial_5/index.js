const fs = require("fs")
// 1. creation of the folder
// fs.mkdir("venom" , (err)=>{console.log("venom folder has been created.")});


// 2. creation of the file and adding data in the file.
// fs.writeFile("venom/file1.txt", "Now, I hate you from my heart, idiot , MS . " , (err)=>{
//     console.log("file created.")
// })


//3. appending of the file
// fs.appendFile("venom/file1.txt", "Have you ever tried contacted me after that ." , ()=>{
//     console.log("file updated");
// })


//4. reading the data

// fs.readFile("venom/file1.txt", "utf-8", (err,data)=>{
//     console.log(data);
// })

//5. renaming the file

// fs.rename("venom/file1.txt" , "venom/renamedfile.txt" , ()=>{
//     console.log("file renamed.");
// })

//6. deletion of the file and folder

// fs.unlink("venom/renamedfile.txt", ()=>{
//     console.log("file unlinked.");
// });

fs.rmdir("venom", ()=>{
    console.log("folder deleted.");
});
