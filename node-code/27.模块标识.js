var fs = require('fs')

// 咱们所使用的所有文件操作的api都是异步的
// 就像你的ajax请求一样

//文件操作中的相对路径可以省略./

/**
 * 在文件操作的相对路径中
 *   ./data/a.txt  相对于当前目录
 *   data/a.txt    相对于当前目录
 *   /data/a.txt    绝对路径,当前文件模块所处磁盘根目录
 *   c:/xxx/xxx     绝对路径
 */
fs.readFile('data/read.txt', function (err, data) {
  if (err) {
    return console.log('读取失败');
  }
  console.log(data.toString());
})
// 模块不可以省略 ./
require('./data/foo.js')('123')