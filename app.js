const express = require('express');
var http = require('http');
const app = express();
app.get('/', function (req, res) {
  res.send('hi');
  alert('Sending Message');
});
const server = http.createServer(app).listen
(8080, function (err) {
  if (err) {
    console.log(err);
  } else {
    const host = server.address().address;
    const port = server.address()
    console.log(`Server listening on ${host}:${port}`);
  }});
