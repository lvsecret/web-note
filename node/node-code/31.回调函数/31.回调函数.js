// function fn(callback) {

//   // var callback=function(data){console.log(data)}

//   setTimeout(function () {
//     var data = 'hello'
//     callback(data)
//   }, 1000)
// }

// // 如果需要获取一个函数中异步操作的结果,则必须通过回调函数来获取

// fn(function (data) {
//   console.log(data);
// })




// function add(x, y) {
//   console.log(1)
//   setTimeout(function () {
//     console.log(2)
//     var ret = x + y
//     return ret
//   }, 0)
//   console.log(3)
//   // 到这里执行就结束了,不会等到前面的定时器,所以直接就返回了默认值undefined
// }
// console.log(add(1, 2))


// function add(x, y) {

//   var ret
//   console.log(1)
//   setTimeout(function () {
//     console.log(2)
//     ret = x + y

//   }, 0)
//   console.log(3)
//   return ret
// }
// console.log(add(1, 2))





function add(x, y, callback) {
  console.log(1)
  setTimeout(function () {

    var ret = x + y
    callback(ret)

  }, 1000)
}
add(10, 20, function (ret) {

  console.log(ret)
})




// 注意:凡是需要得到一个函数内部异步操作的结果
// setTimeout  readFile writeFire ajax
// 这种情况必须通过:回调函数