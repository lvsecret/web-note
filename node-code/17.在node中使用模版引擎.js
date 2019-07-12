var fs = require('fs')
// art-template
// art-template 不仅可以在浏览器使用,也可以在node服务端使用
// 安装 npm install art-template

// 在node中使用art-template模板引擎
// 1. 安装
// 2.在需要使用的文件模块中加载art-template
//    require方法
//    参数名字就是你安装包install的名字
// 3.查看文档,使用模版引擎的api

var template = require('art-template')

//这里不是浏览器没有标签
// template('script标签id', {
//   '对象'
// })


// var tpl = `  hello{{name}}123
// 我喜欢:{{ each hobbies }} {{ $value }} {{ /each }}`

fs.readFile('./tpl.html', function (err, data) {
  if (err) {
    return console.log('读取文件失败');
  }
  var ret = template.render(data.toString(), {
    name: 'jack',
    hobbies: ['写代码', '看书'],
    title: '个人信息'
  })
  console.log(ret);
})