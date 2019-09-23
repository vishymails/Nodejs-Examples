const exec = require('child_process').exec, child;
const testscript = exec('sh myscript.sh /directory');

testscript.stdout.on('data', function(data){
    console.log(data);
    // sendBackInfo();
});

testscript.stderr.on('data', function(data){
    console.log(data);
    // triggerErrorStuff();
});