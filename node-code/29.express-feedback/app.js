var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use('/public/', express.static('./public/'))

//配置使用art-template模块引擎
// 第一个参数,表示,当渲染以.art结尾的文件的时候,使用art-template模版引擎
// express-art-template 是专门用来在express中把art-template整合到express中
//虽然外面这里不需要记载art-template但是也必须安装
//原因就在于express-art-template 依赖了art-template

// app.engine('art', require('express-art-template'));

// 第一个参数该成html,以.html结尾的文件
app.engine('html', require('express-art-template'));

// express为response响应对象提供了一个方法:render
//render方法默认是不可以使用,但是如果配置了模版引擎就可以使用了
//res.render('html模板名',{模版数据})
// 第一个参数不能写路径,默认会去项目中的views目录查找该模版文件
// 也就是说express有一个约定：开发人员把所有的视图文件都放到views目录中

// 如果想要修改默认的views目录,则可以
// app.set('views',render函数的默认路径)
// app.get('/admin', function (req, res) {

//   res.render('admin/index.html', {
//     title: '管理系统'
//   })
// })

//配置body-parser中间件(插件,专门用来解析表单post请求体)
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))
// parse application/json
app.use(bodyParser.json())

var comments = [{
    name: 'jack1',
    msg: 'good',
    dataTime: '2019-07-12'
  },
  {
    name: 'jack2',
    msg: 'good',
    dataTime: '2019-07-12'
  },
  {
    name: 'jack3',
    msg: 'good',
    dataTime: '2019-07-12'
  },
  {
    name: 'jack4',
    msg: 'good',
    dataTime: '2019-07-12'
  },
]

app.get('/', function (req, res) {
  res.render('index.html', {
    comments: comments
  })

})

app.get('/post', function (req, res) {
  res.render('post.html')

})

app.get('/pinglun', function (req, res) {
  // console.log(req.query);
  var comment = req.query
  comment.dataTime = '2019-06-9'
  comments.unshift(comment)
  //原生
  // res.statusCode = 302
  // res.setHeader('Location', '/')

  //express
  res.redirect('/')

})

//当以post请求/post的时候,执行指定的处理函数
//这样的话我们就可以利用不同的请求方法让一个请求路径使用多次
app.post('/post', function (req, res) {
  // console.log('post请求');
  // 1.获取表单post请求数据
  // 2.处理
  // 3.发送响应
  console.log(req.body);
  var comment = req.body
  comment.dataTime = '2019-06-9'
  comments.unshift(comment)
  res.redirect('/')



})

app.listen(3000, function () {
  console.log('Server is running ...');
})