// 浏览器中的javascrip是没有文件操作的能力的
//但是node中的javascript具有文件操作的能力的
// fs是file-system的简写,就是文件系统的意思
//在ndoe中如果想要进行文件操作,就必须引入fs这个核心模块
//在fs这个核心模块中,就提供了所有的文件操作相关的api
//e.g: fs.readFile就是用来读取文件的
var fs = require('fs');
// 参数一文件路径
//参数二回调函数
//   成功
//    data 数据
//    error null
//  失败
//    data null
//    error 错误对象
fs.readFile('./data/read.txt', function(error, data) {
  //要用toString()转成字符串
  // console.log(data.toString());
  // console.log(error);
  if (error) {
    console.log('文件不存在');
  } else {
    console.log(data.toString());
  }
});
