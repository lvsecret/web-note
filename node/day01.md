# Node.js

## Node.js介绍

### Node.js是什么

- Node.js® is a JavaScript runtime built on [Chrome's V8 JavaScript engine](https://v8.dev/).

  - Node.js不是一门语言

  - Node.js不是库 不是框架

  - Node.js是要给javascript运行环境

  - 简单来说就是Node.js可以解析和执行javascript代码

  - 也就是说现在的javascript可以完全脱离浏览器来运行,一切都归功于:node.js

    

- 浏览器中的javascript

  - Ecmscript
    - 变量
    - 方法
    - 数据类型
    - 内置对象
    - Array
    - Object
    - Date
    - Math

  - BOM
  - DOM

- Node.js中的javascript

  - 没有BOM  没有DOM
  - Ecmascrpt
  - 在node会责怪javascript执行环境中为javascript提供了一些服务器级别的操作api
    - 例如文件读写
    - 网络服务的构建
    - 网络通信
    - htt服务器
    - 等处理....

- 构建与chrome的v8引擎之上
  - 代码只是具有特定格式的字符串而已
  - 引擎可以认识它,引擎可以帮你去解析和执行
  - Google Chrome的v8引擎是目前公认的解析javascript
  - node.js的作者把Google Chrome的v8引擎移植了出去,开发了一个独立的javascript运行时环境.
- Node.js uses an event-driven,non-blocking I/O model that makes it lightweight and efficient.
  - event-driven 事件驱动
  - non-blockingI/O model 非阻塞IO模型(异步)
  - lightweight and efficient 轻量和高效
- Node.js'package ecosystem,npm ,is the largest ecosystem of open source libraries in the word.
  - npm 是世界商最大的开源库生态系统
  - 绝大多数javascript相关的包都存放在npm上,这样的目的为了让开发人员跟方便的去下载使用我
  - 
    npm install jquery

### Node.js能够做什么

- web服务器后台
- 命令行工具
  - npm
  - git(c语言)
  - hexo(node)

- 对于前端开发工程师来讲,接触node最多的是它的命令行工具
  - 自己写的很少,主要是使用别人第三方的
  - webpack
  - gulp
  - npm

### 预备知识

- HTML
- CSS
- Javascript
- 简单的命令行操作
  - cd
  - dir
  - ls
  - mkdir
  - rm

- 具有服务端开发经验更佳

### 一些资源

- <深入渐出Node.js>
- <node.js权威指南>
- javascript标准参考教程(alpha):https://wangdoc.com/javascript/
- node入门:http://www.nodebeginner.org/index-zh-cn.html
- CNODE社区:http://cnodejs.org
- CNODE-新手入门:http://cnodejs.org/getstart

### 这门课程能够学到什么?

- B/S编程模型
  - Browser-Server
  - back-end
  - 任何服务端都一样
  - node.js学习B/S编程模型的一个工具而已
- 模块化编程
  - RequireJs
  - SeaJs
  - @import('文件路径')
  - 以前认知的javascript只能通过script标签来加载
  - 在node中可以像@import()一样来引用加载javascript脚本文件
- node常用api
- 异步编程
  - 回调函数
  - promise
  - async
  - generator
- Express开发框架
- Ecmscript 6

## 起步

### 安装node环境

- node --version

### hello word

- 执行node.js文件

  命令行输入   node xx.js

- 注意文件名最好不要以node.js命名
- 读写文件
- http

## Node中的javascript

- EcmaScript
  - 没有DOM BOM
- 核心模块
- 第三方模块
- 用户自定义模块

最简单的http服务

```javascript
//构建一个简单的http
//http这个模块的职责就是帮你创建编写的服务器
//1.加载http核心模块
var http = require('http')
//2.使用http.createServer()方法创建一个web服务器
var server = http.createServer()

//3.服务器要干嘛?
// 提供服务
//发请求
//接收请求
//处理请求
//给个反馈(发送响应)
//注册request请求事件
//当客户端请求过来,就会自动触发服务器的request请求事件,然后执行第二个参数,回调处理
server.on('request', function () {
  console.log('收到客户端的请求了');
})

//4.绑定端口号,启动服务器
server.listen(3000, function () {
  console.log('服务器启动成功');
})
```

### 核心模块

node为javascript提供很多服务器级别的api,这些api绝大多数都包装到了一个具名的核心模块中了.

例如文件操作fs核心模块 http服务器构建的http模块 paht路径操作模块 os操作系统信息模块等



只要是核心模块,你就要马上想到如果想要使用它,就必须:

```javascript
var fs=require('fs')
var http=require('http')
...
```

### 用户自定义模块

### 第三方模块

## web服务开发

#### ip地址和端口号

- ip地址用来定位计算机
- 端口号用来定位具体的应用程序
- 一切需要联网通信的软件都会占用一个端口号
- 在计算机中有一些默认端口号,最好不要去使用 eg http服务的 80
- 在一台计算机中,同一个端口号同一时间只能被一个程序占用

#### Content-Type

 http://tool.oschina.net/commons

## Node中的模块系统

- Ecmascript语言
- 核心模块
  - 文件操作fs
  - http服务的http
  - url路径操作模块
  - path路径处理模块
  - os操作系统信息
- 第三方模块
  - art-template
- 自己写的模块
- 加载规则以及加载机制
- 循环加载

## 什么是模块化

- 文件作用域
- 通信规则
  - 加载require
  - 导出

在 Node 中没有全局作用域的概念

- 在 Node 中，只能通过 require 方法来加载执行多个 JavaScript 脚本文件
- require 加载只能是执行其中的代码，文件与文件之间由于是模块作用域，所以不会有污染的问题
  - 模块完全是封闭的
  - 外部无法访问内部
  - 内部也无法访问外部
- 模块作用域固然带来了一些好处，可以加载执行多个文件，可以完全避免变量命名冲突污染的问题
- 但是某些情况下，模块与模块是需要进行通信的
- 在每个模块中，都提供了一个对象：`exports`
- 该对象默认是一个空对象
- 你要做的就是把需要被外部访问使用的成员手动的挂载到 `exports` 接口对象中
- 然后谁来 `require` 这个模块，谁就可以得到模块内部的 `exports` 接口对象
- 还有其它的一些规则，具体后面讲，以及如何在项目中去使用这种编程方式，会通过后面的案例来处理

## CommonJS模块规范

在node中的javascript还有一个很重要的概念:模块系统.

- 模块作用域
- 使用require方法来加载模块
- 使用exports接口对象用来导出模块中的成员

### 加载require

语法:

```javascript
var 自定义变量名称=require('模块')
```

两个作用:

- 执行被加载模块中的代码
- 得到被加载模块中的exports导出接口对象

### 导出exports

- node中模块作用域,默认文件中所有的成员只在当前文件模块有效
- 对于希望可以被其它模块访问的成员,我们就需要把这些公开的成员都挂载到exports接口对象中就可以了

导出多个成员(必须在对象中):

```javascript
exports.a=123
exports.b='hello'
exports.c=function(){
	console.log('123')
}

```



导出单个成员(拿到的就是:函数 字符串):

```javascript
module.exports='hello'
```

以下情况会覆盖:

```javascript
module.exports='hello'
//以这个为准,后者会覆盖前者
module.exports='123'
```

也可以这样导出多个成员

```javascript
module.exports={
    a:"123",
    b:'456'
}
```

### 原理解析

exports和module.exports的一个引用:

```javascript
console.log(exports===module.exports) //true

exports.foo='bar'

//等价于
module.exports.foo='bar'
```



### exports 和 module.exports 的区别

- 每个模块中都有一个 module 对象
- module 对象中有一个 exports 对象
- 我们可以把需要导出的成员都挂载到 module.exports 接口对象中
- 也就是：`moudle.exports.xxx = xxx` 的方式
- 但是每次都 `moudle.exports.xxx = xxx` 很麻烦，点儿的太多了
- 所以 Node 为了你方便，同时在每一个模块中都提供了一个成员叫：`exports`
- `exports === module.exports` 结果为  `true`s
- 所以对于：`moudle.exports.xxx = xxx` 的方式 完全可以：`expots.xxx = xxx`
- 当一个模块需要导出单个成员的时候，这个时候必须使用：`module.exports = xxx` 的方式
- 不要使用 `exports = xxx` 不管用
- 因为每个模块最终向外 `return` 的是 `module.exports`
- 而 `exports` 只是 `module.exports` 的一个引用
- 所以即便你为 `exports = xx` 重新赋值，也不会影响 `module.exports`
- 但是有一种赋值方式比较特殊：`exports = module.exports` 这个用来重新建立引用关系的
- 之所以让大家明白这个道理，是希望可以更灵活的去用它

### require方法加载规则

- 核心模块
  
  - 模块名
  
- 第三方模块
  
  - 模块名
  
- 用户自己写的
  
- 路径
  
- 优先从缓存加载

  ```javascript
  
  // 优先从缓存加载
  // 由于在a中已经加载过b
  // 所以这里不会重复加载
  // 可以拿到其中的接口对象,但是不会重复执行里面的代码
  // 这样做的目的是为了避免重复加载,提高模块加载效率
  ```

  

- 判断模块标识

  - 核心模块

  - 第三方模块

  - 自定义模块

    ```javascript
    // 如果是非路径形式的模块标识  
    // 路径形式的模块: ./    ../  /xxx
    require('./foo.js')
    
    // 核心模块 本质是文件 核心模块文件已经被编译到了二进制文件中了,我们只需要按照名字来加载就可以了
    require('fs')
    
    // 第三方模块
    // 凡是第三方模块都需要通过npm来下载
    // 使用的时候就可以通过require（‘包名）的方式来进行加载才可以使用
    // 不可能有任何一个第三方包和核心模块的名字是一样的
    // 即不是核心模块,也不是路径形式的模块
    //    先找到当前文件所处目录中的node_module目录
    //     node_modules/art-template
    //     node_modules/art-template/package.json文件
    //     node_modules/art-template/package.json文件中的main属性
    //      main属性中就记录了art-template的入口模块
    //      然后加载使用这个第三方包,实际还是文件
    
    /**
     * 如果package.json文件不存在或者main指定的入口模块也没有
     * 则node会自动找该目录下的index.js
     * 也就是说index.js会作为一个默认备选项
     * 
     * 如果以上所有任何一个条件都不成立,则会进入上一级目录中的node_modules
     * ....
     * 如果直到当前磁盘更目录还找不到,最后报错
     *  can not  find module xxxxs
     */
    var template = require('art-template')
    ```

    

## npm

node package manager

- npm init -y 初始化

- npm install 

  npm i

- npm 包  --save

  npm -S

- npm --version 查找版本

- npm install --global npm 升级npm

- npm uninstall 

  npm un

  npm uninstall --save

  npm un -S

解决npm翻墙问题

安装淘宝的cnpm

```javascript
npm install --global cnpm
```

接下来你安装包的时候把npm换成cnpm

如果不想安装cnpm又想使用淘宝

```javascript
npm install xx --registry=https://registry.npm.taobao.org
```

但是每一次手动这样加参数很麻烦,所以可以设置

```javascript
npm config set registry https://registry.npm.taobao.org
//查看npm配置信息
npm config list
```

## express

### 起步

#### 安装:

```javascript
npm i express --save
```

#### hell world:

```javascript
var express = require('express')

var app = express()

app.get('/', function (req, res) {
  // res.write('123')
  // res.end('hello')

  res.send('jack')
})
app.get('/login', function (req, res) {
  // res.write('123')
  // res.end('hello')

  res.send('jack')
})

app.listen(3000, function () {
  console.log('Server is running...');
})
```

#### 基本路由:

路由器:

- 请求方式
- 请求路径
- 请求处理函数

get:

```javascript
//当以get方式请求 / 的时候,执行对应的处理函数
app.get('/',function(req,res){
     console.log(req.query);//req.query是get获取数据使用
    res.send('hellow')
})
```

post:

```javascript
//当以post方式请求 / 的时候,执行对应的处理函数
app.post('/',function(req,res){
    res.send('post')
})
```

静态服务:

```javascript
// 1.当以/public/开头的时候,去./public/目录中找找对应的资源 第一个参数就是别名 http://127.0.0.1:3000/public/login.html
app.use('/public/', express.static('./public/'))

// 2.当省略第一个参数的时候,访问的时候去掉/public/,直接写对应的资源 http://127.0.0.1:3000/login.html
app.use(express.static('./public/'))

app.use('static',express.static(path.join(__dirname,'public')))
```

### 在express中获取表单get请求参数

在express中内置了一个api,可以直接通过req.query来获取

```javascript
req.query
```

### 在express获取表单post请求体数据

在express中没有内置获取表单post请求体的api,这里我们需要使用一个第三方包:body-parser.

安装:

```shell
npm install body-parser
```

配置:

```javascript
var express = require('express')
// 0.引包
var bodyParser = require('body-parser')

var app = express()
//配置body-parser
//只要加入这个配置,则在req请求对象上会多出来一个属性:body
//也就是说你就可以直接通过req.body来获取表单post请求体数据了
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


```

使用:

```javascript
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
    //可以通过req.body来获取表单psot请求数据
  res.end(JSON.stringify(req.body, null, 2))
})
```



### 在express中配置使用art-template

[art-template的github仓库](https://github.com/aui/art-template)

[art-templat官方文档](https://aui.github.io/art-template/)

安装:

```shell
npm install --save art-template
npm install --save express-art-template
```

配置:

```javascript
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
```

使用:

```javascript
app.get('/admin', function (req, res) {
//express默认会去项目的views目录找index.html
  res.render('admin/index.html', {
    title: '管理系统'
  })
})
```



## 其它

### 服务端和客户端渲染

- 服务端渲染
  + 说白了就是在服务端使用模板引擎
  + 模板引擎最早诞生于服务端，后来才发展到了前端
- 服务端渲染和客户端渲染的区别
  + 客户端渲染不利于 SEO 搜索引擎优化
  
  + 服务端渲染是可以被爬虫抓取到的，客户端异步渲染是很难被爬虫抓取到的
  
  + 所以你会发现真正的网站既不是纯异步也不是纯服务端渲染出来的
  
  + 而是两者结合来做的
  
  + 例如京东的商品列表就采用的是服务端渲染，目的了为了 SEO 搜索引擎优化
  
  + 而它的商品评论列表为了用户体验，而且也不需要 SEO 优化，所以采用是客户端渲染
  
  + 页面右键可以查看源代码的就是服务端渲染
  
    最少两次请求，发起 ajax 在客户端使用模板引擎渲染
  
    客户端拿到的就是服务端已经渲染好的

### 在 Node 中使用 art-template 模板引擎

+ 安装
+ 加载
+ template.render()

### 如何在 Node 中实现服务器重定向

+ header('location')
  * 301 永久重定向 浏览器会记住
    - a.com b.com
    - a 浏览器不会请求 a 了
    - 直接去跳到 b 了
  * 302 临时重定向 浏览器不记忆
    - a.com b.com
    - a.com 还会请求 a
    - a 告诉浏览器你往 b

### jQuery 的 each 和 原生的 JavaScript 方法 forEach

+ EcmaScript 5 提供的
  * 不兼容 IE 8
+ jQuery 的 each 由 jQuery 这个第三方库提供
  * jQuery 2 以下的版本是兼容 IE 8 的
  * 它的 each 方法主要用来遍历 jQuery 实例对象（伪数组）
  * 同时它也可以作为低版本浏览器中 forEach 替代品
  * jQuery 的实例对象不能使用 forEach 方法，如果想要使用必须转为数组才可以使用
  * `[].slice.call(jQuery实例对象)`

### 文件操作路径和模块路径

```javascript
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
```

### 修改完代码自动重启

第三方工具 nodemon

```javascript
npm i --global nodemon
```

使用:

```javascript
node app.js
//使用nodemon
nodemon app.js
```





