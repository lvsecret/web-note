var fs = require('fs')


// 创建promise容器
// 1.promise容器一旦创建,就开始执行里面的代码
var p1 = new Promise(function (resolve, reject) {

  fs.readFile('../data/read.txt', 'utf8', function (err, data) {
    if (err) {
      // 失败了,承诺容器中的任务失败了
      // 把容器的pending状态变为rejected
      // 调用reject就相当于调用了then方法的第二个参数函数
      reject(err)
    } else {
      // 成功了把容器的pending状态变为resolved
      // 也就是说这里调用的resolve方法实际上就是then方法传递的那个function
      resolve(data)
    }
  })
})
// p1就是那个承诺
// 当p1成功了然后(then)做什么
// then方法接收的function就是容器中的resolve函数
p1.then(function (data) {
  console.log(data);
}, function (err) {
  console.log('读取失败', err);
})