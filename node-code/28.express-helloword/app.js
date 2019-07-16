var express = require('express')

var app = express()

app.get('/', function (req, res) {
  // res.write('123')
  // res.end('hello')

  res.send('jack')
})
app.get('/login', function (req, res) {
  // res.write('123')
  // res.end('hello')

  res.send('jack')
})

app.listen(3000, function () {
  console.log('Server is running...');
})