/**
 * 1.结合fs发送文件中的数据
 * 2.Content-Type
 *    http://tool.oschina.net/commons
 *    不同的资源对应的Content-Type是不一样的
 *     图片不需要指定的编码
 *    一般只为字符数据才指定编码
 */

var fs = require('fs')
var http = require('http')
var server = http.createServer()
server.on('request', function (req, res) {
  var url = req.url
  if (url === '/') {
    fs.readFile('./resource/index.html', function (error, data) {
      if (error) {
        res.setHeader('Content-Type', 'text/pain;charset=utf8')
        res.end('文件读取错误')
      } else {
        /**
         * data 默认是二进制数据,可以通过.toString()转为我们认识的字符串
         * res.end()支持两种数据类型,一种是二进制,一种是字符串
         */
        res.setHeader('Content-Type', 'text/html;charset=utf8')
        res.end(data)
      }
    })
  } else if (url === '/img') {
    // url: 统一资源定位符 一个url最终其实是要对应到一个资源的
    fs.readFile('./resource/png.png', function (error, data) {
      if (error) {
        res.setHeader('Content-Type', 'text/pain;charset=utf8')
        res.end('文件读取错误')
      } else {
        res.setHeader('Content-Type', 'image/png;charset=utf8')
        res.end(data)
      }
    })
  }

})
server.listen(3000, function () {
  console.log('Server is running...');
})