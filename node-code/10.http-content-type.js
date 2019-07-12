var http = require('http')
var server = http.createServer()
server.on('request', function (req, res) {
  // 在服务器默认发送的数据,其实是utf8编码的内容
  // 但是浏览器不知道你是utf8编码的内容
  // 浏览器在不知道服务器响应内容的编码的情况下会按照当前操作系统的默认编码去解析
  // 中文操作系统默认是gbk
  // 解决方法就是正确的告诉浏览器给你发送的内容是什么编码的
  // res.setHeader('Content-type', 'text/pain;charset=utf-8')
  // res.end('hello,世界')

  // text/pain 是普通文本
  var url = req.url
  if (url === '/pain') {
    res.setHeader('content-type', 'text/pain;charset=utf-8')
    res.end('世界')
  } else if (url === '/html') { //如果你要发送html格式的字符串,要告诉浏览器html
    res.setHeader('content-type', 'text/html;charset=utf-8')
    res.end('<p>hellow html</p>')
  }
})
server.listen(3000, function () {
  console.log('Server is running...');
})