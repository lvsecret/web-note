// 获取机器信息的
var os = require('os')
// 查看当前机器的cpu信息
// console.log(os.cpus());
// 查看内存
console.log(os.totalmem());

// 操作路径的
var path = require('path')
// 查看文件的后缀名
console.log(path.extname('c:/a/b/hell.txt'));