const express = require('express');
const app = express();
var path = require('path');
app.use('/assets', express.static('assets'));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
})