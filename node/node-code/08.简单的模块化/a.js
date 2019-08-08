// require 是一个方法
// 它的作用就是用来加载模块的
// 在node中,模块有三种
//    具名的核心模块,例如fs http
//    用户自己编写的文件模块
//        相对路径必须加./
//    在node中,没有全局作用域,只有模块作用域(文件作用域)
//         外部访问不到内部,内部访问不到外部
console.log('start');
var a = 'aaa'
require('./b')
console.log(a);
console.log('end');