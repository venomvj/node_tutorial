const http = require('http');
const host = 'localhost';
const port = 8000;

const requestListner = function(req, res){
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachement;filename=oceanpals.csv");

    res.writeHead(200);
    res.end(`id,name,email\n1,SammyShark, shark@ocean.com\n`);

};

const server = http.createServer(requestListner);

server.listen(port, host, ()=>{
    console.log(`Server is running on http://${host}:${port}`);
});