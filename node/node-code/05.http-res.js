var http = require('http')
var server = http.createServer()
//request请求事件处理函数,需要收到啊两个参数
//request请求对象
//  请求对象可以用来获取客户端的一些请求信息,eg 请求路径
// response响应对象
//   响应对象可以用来给客户端发送响应消息
server.on('request', function (request, response) {
  // http://127.0.0.1:3000/    /
  // http://127.0.0.1:3000/a    /a
  // http://127.0.0.1:3000/a/n    /a/n
  console.log('收到客户端的请求了,请求路径是:' + request.url);
  // response 对象有一个方法：write可以用来给客户端发送响应数据
  // write可以使用多次，但是最后一定要使用end来结束响应，否则客户端会一直等待
  // 修改代码后要ctr+c重启服务器
  response.write('hello')
  response.write('node.js')
  response.end()

  // 由于现在我们的服务器的能力还非常的弱,无论是什么请求,都只能响应 hello node.js
  // 思考
  //  我希望当请求不同的路径的时候响应不同的结果
  // eg
  //  / index
  //  /log  登录
  //  /registry  注册
  //  /haha   哈哈哈



})
server.listen(3000, function () {
  console.log('服务器启动成功');
})