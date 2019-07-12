var http = require('http')
var fs = require('fs')

// 1. 创建 Server
var server = http.createServer()


// 2. 监听 Server 的 request 请求事件，设置请求处理函数
//    请求
//      处理
//    响应
//    一个请求对应一个响应，如果在一个请求的过程中，已经结束响应了，则不能重复发送响应。
//    没有请求就没有响应。
// 
// 咱们以前使用过 Apache 服务器软件，这个软件默认有一个 www 目录，所有存放在 www 目录中的资源都可以通过网址来浏览
// 127.0.0.1:80/a.txt
// 127.0.0.1:80/index.html
// 127.0.0.1:80/apple/login.html

var wwwDir = 'E:/www'

server.on('request', function (req, res) {
  var url = req.url
  if (url === '/') {
    fs.readFile(wwwDir + '/index.html', function (err, data) {
      if (err) {
        return res.end('404 Not Found.')
      } else {
        res.end(data)
      }
    })
  } else if (url === '/index') {
    fs.readFile(wwwDir + '/index.html', function (err, data) {
      if (err) {
        return res.end('404 Not Found.')
      } else {
        res.end(data)
      }
    })
  } else if (url === '/login') {
    fs.readFile(wwwDir + 'login.html', function (err, data) {
      if (err) {
        return res.end('404 Not Found.')
      } else {
        res.end(data)
      }
    })
  }

})
server.listen(3000, function () {
  console.log('Server is running...');
})