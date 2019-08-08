// require方法有两个作用
//    1.加载文件模块并执行里面的代码
//    2.拿到被加载文件模块导出的接口对象
//     在每个文件模块中都提供一个对象:exports
//    exports 默认是一个空对象
//    你要做的是把所有需要被外部访问的成员挂载到这个exports对象中

var bExports = require('./b')
console.log(bExports.foo);
console.log(bExports.add(1, 2));
bExports.readFile('./a.js');