var express = require('express')

var app = express()

// 当以/public/开头的时候,去./public/目录中找找对应的资源 http://127.0.0.1:3000/public/login.html
// app.use('/public/', express.static('./public/'))

//当省略第一个参数的时候,访问的时候去掉/public/,直接写对应的资源 http://127.0.0.1:3000/login.html
app.use(express.static('./public/'))

app.get('/', function (req, res) {
  //原生
  // res.write('123')
  // res.end('hello')

  //express
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