var http = require('http')
var fs = require('fs')
var template = require('art-template')

var server = http.createServer()

var wwwDir = 'E:/www'

server.on('request', function (req, res) {
  var url = req.url
  fs.readFile('./template-apache.html', function (err, data) {
    if (err) {
      return res.end('404')
    }
    /**
     * 1.如何得到wwwDir目录列表中的文件名和目录名
     *  fs.readdir
     * 2.如何得到的文件名和目录名替换到template.html中
     *  模版引擎
     *    2.1在template.html中需要替换的位置预留应该特殊标记
     *    2.2根据files生产需要的html内容
     * 
     */
    fs.readdir(wwwDir, function (err, files) {
      if (err) {
        return res.end('Can not find www dir.')
      }
      var htmlStr = template.render(data.toString(), {
        title: 'title-apache',
        files: files
      })
      res.end(htmlStr)
    })
  })
})

server.listen(3000, function () {
  console.log('Server is running...');
})