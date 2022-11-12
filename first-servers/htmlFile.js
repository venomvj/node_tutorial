const http = require('http');
const fs = require('fs').promises;
const host = 'localhost';
const port = 8000;

let indexxFile;

const server = http.createServer(requestListner);

const requestListner = function(req, res){
    fs.readFile(__dirname + "/index.html")
    .then(contents =>{
        res.setHeader("Content-Type" , "text/html");
        res.writeHead(200);
        res.end(contents);
    })
    .catch((err=>{
        res.writeHead(500);
        res.end(err);
        return;
    }));
};


server.listen(port, host, ()=>{
    console.log(`Server is running on http://${host}:${port}`);
});