const { execFile } = require('child_process');
execFile(__dirname + 'processNOdejsImage.sh' , (error, stdout, stderr) =>{
    if(error){
        console.error(`error: ${error.message}`);
        return;
    }
    if(stderr){
        console.error(`stderr: ${error.stderr}`);
        return;
    }

    console.log(`stdout: \n${stdout}`);

})