let connection;

const handleUserInput = (inputFromKey) => {
  if (inputFromKey === '\u0003') {
    process.exit();
  }
  if (inputFromKey === 'w') {
    connection.write('Move: up')
  }
  if (inputFromKey === 'a') {
    connection.write('Move: left')
  }
  if (inputFromKey === 's') {
    connection.write('Move: down')
  }
  if (inputFromKey === 'd') {
    connection.write('Move: right')
  }
  if (inputFromKey === 'm') {
    connection.write('Say: LHL')
  }
}

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

module.exports = {setupInput}