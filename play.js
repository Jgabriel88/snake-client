const {connect} = require('./client');

const handleUserInput = (inputFromKey) => {
  if (inputFromKey === '\u0003') {
    process.exit();
  }
  console.log("testeeee")
}

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}


connect();
setupInput();