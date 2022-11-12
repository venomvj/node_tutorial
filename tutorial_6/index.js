const os = require("node:os");

const hostname = os.hostname();
const eo= os.arch();
console.log(eo , hostname, os.platform(), `${os.freemem() / 1024 /1024 /1024 }` , `${os.totalmem() / 1024 /1024 /1024 }` );

