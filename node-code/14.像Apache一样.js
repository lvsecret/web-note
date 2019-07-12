var http = require('http')
var fs = require('fs')

var server = http.createServer()
var wwwDir = 'E:/www'
server.on('request', function (req, res) {
  var url = req.url;
  var filePath = "/index.html"
  if (url !== '/') {
    filePath = url
  }
  fs.readFile(wwwDir + filePath, function (err, data) {
    if (err) {
      return res.end('404')
    } else {
      res.end(data)
    }
  })

})
server.listen(3000, function () {
  console.log('Server is running..');
})