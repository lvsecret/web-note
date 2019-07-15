var express = require('express')

//创建服务器应用程序
// 原来的http.createServer
var app = express()

// 公开指定目录
// 只要这样做了,你就可以直接通过/public/xx的方式访问public目录中的所有资源了
app.use('/public/', express.static('./public/'))
app.use('/static/', express.static('./static/'))

// 当服务器收到get请求/的时候,执行回调处理函数
app.get('/', function (req, res) {
  console.log(req.query);
  res.end('123')
})
app.get('/about', function (req, res) {
  res.end('456')
})
app.get('/main', function (req, res) {
  res.end('789')
})
// 相当于server.listen
app.listen(3000, function () {
  console.log('Server is running...');
})