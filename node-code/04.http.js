//构建一个简单的http
//http这个模块的职责就是帮你创建编写的服务器
//1.加载http核心模块
var http = require('http')
//2.使用http.createServer()方法创建一个web服务器
var server = http.createServer()

//3.服务器要干嘛?
// 提供服务
//发请求
//接收请求
//处理请求
//给个反馈(发送响应)
//注册request请求事件
//当客户端请求过来,就会自动触发服务器的request请求事件,然后执行第二个参数,回调处理
server.on('request', function () {
  console.log('收到客户端的请求了');
})

//4.绑定端口号,启动服务器
server.listen(3000, function () {
  console.log('服务器启动成功');
})