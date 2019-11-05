//1.什么是闭包
// 闭包指的是有权访问另外一个函数作用域中的变量的函数

//2.产生一个闭包
// 简单的产生闭包就是一个函数里面创建一个函数
// function func() {
//   var a = 1,
//     b = 2;
//   //闭包
//   function closure() {
//     return a + b;
//   }
//   return closure;
// }
// console.log(func()());
// 闭包的作用域链包含着它自己的作用域，以及包含它的函数的作用域和全局作用域。

// 3.闭包的注意事项
// 通常，函数的作用域及其所有变量都会在函数执行结束后被销毁。但是，在创建了一个闭包以后，这个函数的作用域就会一直保存到闭包不存在为止。
// function makeAdder(x) {
//   return function (y) {
//     return x + y
//   }
// }
// var makeAdder5 = makeAdder(2)
// var makeAdder10 = makeAdder(10)
// console.log(makeAdder5(5));
// console.log(makeAdder10(7));

// 释放对闭包的引用
makeAdder5 = null;
makeAdder10 = null;

// 闭包只能取得包含函数中任何变量的最后一个值，这是因为闭包所保存的是整个变量对象，而不是某个特殊的变量。
// function test() {
//   var arr = [];
//   for (var i = 0; i < 10; i++) {
//     arr[i] = function () {
//       return i;
//     };
//   }
//   for (var a = 0; a < 10; a++) {
//     console.log(arr[a]());
//   }
// }
// test(); //10次10
// function test() {
//   var arr = [];
//   for (let i = 0; i < 10; i++) { // 仅在这里作出了改动
//     arr[i] = function () {
//       return i;
//     };
//   }
//   for (var a = 0; a < 10; a++) {
//     console.log(arr[a]());
//   }
// }
// test(); // 打印 0 到 9

// 4.闭包的应用
// 匿名函数最大的用途是创建闭包， 并且还可以构建命名空间， 以减少全局变量的使用。 从而使用闭包模块化代码， 减少全局变量的污染。

var objEvent = objEvent || {};
(function () {
  var addEvent = function () {
    // some code
  };

  function removeEvent() {
    // some code
  }

  objEvent.addEvent = addEvent;
  objEvent.removeEvent = removeEvent;
})();
var countNumber = (function () {
  var num = 0;
  return function () {
    return ++num;
  };
})();
// 闭包的缺陷
// 闭包的缺点就是常驻内存会增大内存使用量，并且使用不当很容易造成内存泄露。
// 如果不是因为某些特殊任务而需要闭包，在没有必要的情况下，在其它函数中创建函数是不明智的，因为闭包对脚本性能具有负面影响，包括处理速度和内存消耗。
//面试题
// function fun(n, o) {
//   console.log(o);
//   return {
//     fun: function (m) {
//       return fun(m, n);
//     }
//   };
// }

// var a = fun(0); // ?
// console.log(a);
// a.fun(1); // ?        
// a.fun(2); // ?
// a.fun(3); // ?

// var b = fun(0).fun(1).fun(2).fun(3); // ?

// var c = fun(0).fun(1); // ?
// c.fun(2); // ?
// c.fun(3); // ?