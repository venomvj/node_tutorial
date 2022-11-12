// const args = process.argv.slice(2);
// console.log(process.env[args[0]]);
// ^
// |
// only one value of environment variable could be printed.


const args = process.argv.slice(2);

args.forEach(arg=>{
	let envVar = process.env[arg];
	if(envVar === undefined){
	console.error(`Could not find "${arg}" in environment`);	
	}else{
	console.log(envVar);
	}
});

