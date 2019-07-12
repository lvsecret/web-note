var http = require('http')
var server = http.createServer()
server.on('request', function (request, response) {
  // console.log('get', request.url);
  // response.write('hello')
  // response.write('node')
  // response.end()

  // 上面的方式比较麻烦,推荐使用更加简单的方式,直接end的同时write
  // response.end('123')

  //根据不同的请求路径发送不同的响应结果
  //1 获取请求路径
  //  response.url获取到的是端口号之后的那一部分路径
  //   也就是说所有的url都是以/开头
  // 2 判断路径处理响应
  var url = request.url
  // if (url === '/') {
  //   response.end('index')
  // } else if (url === '/login') {
  //   response.end('login')
  // } else {
  //   response.end('404')
  // }

  if (url === '/products') {
    var pro = [{
      'name': 'iphone',
      'price': 8888
    }, {
      'name': 'iphone',
      'price': 8888
    }, {
      'name': '苹果',
      'price': 8888
    }]
    response.end(JSON.stringify(pro))
  }
})
server.listen(3000, function () {
  console.log('启动成功');
})