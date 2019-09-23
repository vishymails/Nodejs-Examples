var argv = require('minimist')(process.argv.slice(2));
console.dir(argv);

// node ConsoleParameter4.js -x 3 -y 4 -n5 -abc --beep=boop foo bar baz