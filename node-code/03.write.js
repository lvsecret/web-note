var fs = require('fs')
// 参数一 文件路径
// 参数二 文件内容
// 参数三 回调函数
fs.writeFile('./data/您好.md', '大家好', function (error) {
  if (error) {
    console.log('写入失败');
  } else {
    console.log('写入成功');
  }
})