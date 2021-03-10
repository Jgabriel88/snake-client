const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });

  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log("Connection established!");
    conn.write('Name: Gabriel');


  });

  conn.on('data', (dataFromServer) => {
    console.log(dataFromServer)
  })

  // conn.on('connect', () => {
  //   setInterval(() => {
  //     conn.write('Move: up')
  //   }, 50)
  // });


  return conn;

}


module.exports = {connect}