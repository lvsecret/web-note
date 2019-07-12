// app application 应用程序
// 把当前模块所有的依赖项都声明再文件模块最上面
// 为了让目录结构保持统一清晰，所以我们约定，把所有的 HTML 文件都放到 views（视图） 目录中
// 我们为了方便的统一处理这些静态资源，所以我们约定把所有的静态资源都存放在 public 目录中
// 哪些资源能被用户访问，哪些资源不能被用户访问，我现在可以通过代码来进行非常灵活的控制
// / index.html
// /public 整个 public 目录中的资源都允许被访问
// 前后端融会贯通了，为所欲为

var http = require('http')
var fs = require('fs')
var url = require('url')

var template = require('art-template')

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

/**
 * http://127.0.0.1:3000/pinglun?name=11&message=11111
 * 对于这种表单提交的请求路径,由于其中具有用户动态填写的内容
 * 所以你不可能通过过去判断完整的url路径来处理这个请求
 * 
 * 结论:对于我们来讲,其实只需要判定,如果你的请求路径是/pinglun的时候,那我就认为你提交表单的请求过来了
 * 
 */

http.createServer(function (req, res) { //简写方式,该函数直接被注册为server的request请求事件处理函数

  // 使用url.parse方法将路径解析为应该方便操作的对象,第二个参数为true表示直接将查询字符串转为应该对象(通过query属性来访问)
  var parseObj = url.parse(req.url, true)
  // 单独获取不包含查询字符串的路径部分(不包括?之后的部分)
  var pathName = parseObj.pathname

  if (pathName === '/') {
    fs.readFile('./views/index.html', function (err, data) {
      if (err) {
        return res.end('404')
      }
      var htmlStr = template.render(data.toString(), {
        comments: comments
      })
      res.end(htmlStr)
    })
  } else if (pathName === '/post') {
    fs.readFile('./views/post.html', function (err, data) {
      if (err) {
        return res.end('404')
      }
      res.end(data)
    })

  } else if (pathName.indexOf('/public') === 0) {
    /**
     * 统一处理
     *  如果请求路径是以/public/开头的,则我认为你要获取public中的某个资源
     *  所以我们就直接可以把请求路径当作文件路径来直接进行获取
     *  哪些资源能够被用户访问,哪些资源不能被用户访问,我现在可以通过代码来进行非常灵活的操作
     * 
     */
    fs.readFile('.' + pathName, function (err, data) {
      if (err) {
        return res.end('404')
      }
      res.end(data)
    })
  } else if (pathName === '/pinglun') {
    // 注意:这个时候无论/pinglun之后是什么,我都不用担心了,因为我的pathname是不包含?之后的路径
    // console.log('收到表单请求了', parseObj.query);
    // res.end(JSON.stringify(parseObj.query))
    // 我们已经使用url模块的parse方法把请求路径中的查询字符串给解析成应该对象
    // 1.获取表达提交的数据parseObj.query
    // 2.生成日期到数据对象中,然后存储到数组中
    // 3.让用户重定向跳转到首页 /
    //  当用户重新请求/的时候,我数组中的数据已经发生变化了,所以用户看到了添加的评论

    var comment = parseObj.query
    comment.dataTime = '2019-06-06'
    comments.push(comment)
    // 服务端这个时候已经把数据存储好了,接下来就是让用户重新请求/首页,就可以看到重新的页面


    //如果通过服务器让客户端重定向
    // 1.302 临时重定向
    //  statusCode
    // 2.在响应头中通过location告诉客户端往哪儿重定向
    //  setHeader
    // 如果客户端发现收到服务器的响应的状态吗是302就会自动去响应头中找到location
    res.statusCode = 302
    res.setHeader('Location', '/')
    res.end()


  } else {
    // 其它的都处理成404找不到
    fs.readFile('./views/404.html', function (err, data) {
      if (err) {
        return res.end('404')
      }
      res.end(data)
    })
  }
}).listen(3000, function () {
  console.log('Server is running');
})