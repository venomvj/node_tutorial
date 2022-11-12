const http = require('http');
const host = 'localhost';
const port = 8000;
const requestListen = function (req, res){
    res.writeHead(200);
    res.end("My first server!\n");
};


const server = http.createServer(requestListen);

server.listen(port, host, () => {
    console.log(`server is running on http://${host}:${port}`);
})