var http = require('http')
var fs = require('fs')

var server = http.createServer()

var wwwDir = 'E:/www'

server.on('request', function (req, res) {
  var url = req.url
  fs.readFile('./template.html', function (err, data) {
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
      // 2.1 生成需要替换的内容
      var content = ''
      files.forEach(element => {
        content += `  <tr>
        <td data-value="apple/"><a class="icon dir" href="/E:/www">${element}/</a></td>
        <td class="detailsColumn" data-value="0"></td>
        <td class="detailsColumn" data-value="1509589967">2017/11/2 上午10:32:47</td>
      </tr>`

      });
      // 2.2 替换
      data = data.toString()
      data = data.replace('^_^', content)
      // 2.3 发送解析替换过后的响应数据
      res.end(data)
    })
  })
})

server.listen(3000, function () {
  console.log('Server is running...');
})