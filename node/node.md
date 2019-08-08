Node.js

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

#### 解决npm翻墙问题

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

#### package-lock.json和package.json

npm5以前没有package-lock.json

当你安装包的时候,npm都会生成或者更新package-lock.json这个文件

- npm5以后的版本安装包不需要加--save参数，它会自动保存依赖信息
- package-lock.json这个文件会保存node_modules中所有包的信息(版本,下载地址)
  - 这样的话重新npm install的时候速度就可以提升

- 从文件看没有一个lock称之为锁
  - 这个lock是锁版本的
  - 如果项目依赖了1.1.1版本
  - 如果你重新install其实会下载最新本版,而不是1.1.1
  - 我们的目的是希望可以锁住1.1.1这个版本
  - 所以这个package-lock.json这个文件的另一个作用就是锁定版本号,防止自动升级新版本



## path路径操作模块

常用

- path.basename
  - 获取一个路径的文件名(默认包含扩展名)
- path.dirname
  - 获取一个路径中的目录部分
- path.extname
  - 获取一个路径的扩展名部分
- path.parse
  - 把一个路径转为对象
    - root根路经
    - dir 目录
    - base包含后缀名的文件名
    - ext后缀名
    - name不包含后缀名的文件名
- path.jon
  - 当你需要进行路径并接的时候,推荐使用这个方法
- path.isAbsolute
  - 判断一个路径是否是绝对路径

## node中的其它成员

在每个模块中,除了require export等相关api之外,还有两个特殊成员

- __dirname 可以用来获取当前文件模块的所属目录的绝对路径
- __filename 可以用来获取当前文件的绝对路径

在文件操作中,使用相对路径是不可靠的,因为在node中文件操作的路径被2设计为相对与执行node命令所处的路径

所以把相对变成绝对路径

这里使用__dirname  __filename

注意:模块中的路径标识和这里的路径没有关系,不受影响(相对于文件模块)

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
npm install body-parser -S
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

### 在express配置使用express-session插件

安装

npm install express-session

配置

```javascript
//改插件会为req请求对象添加一个成员:req.session默认是对象
//这是最简单的配置方式
app.use(session({
  // 配置加密字符串，它会在原有加密基础之上和这个字符串拼起来去加密
  // 目的是为了增加安全性，防止客户端恶意伪造
  secret: 'itcast',
  resave: false,
  saveUninitialized: false // 无论你是否使用 Session ，我都默认直接给你分配一把钥匙
}))
```

使用

```javascript
//添加session数据
req.session.foo='bar'
//获取session数据
req.session.foo
// 清除登陆状态
req.session.user = null

```

![1565252152377](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1565252152377.png)

提示:默认session数据是内存存储,服务器一旦重启就会丢失,真正的生产环境会把seesion进行持久化存储



### CRUD案例

#### 起步

\- 初始化

-安装依赖

\- 模板处理



#### 路由设计

| 请求方法 | 请求路径         | get 参数 | post 参数                  | 备注             |
| -------- | ---------------- | -------- | -------------------------- | ---------------- |
| GET      | /studens         |          |                            | 渲染首页         |
| GET      | /students/new    |          |                            | 渲染添加学生页面 |
| POST     | /studens/new     |          | name、age、gender、hobbies | 处理添加学生请求 |
| GET      | /students/edit   | id       |                            | 渲染编辑页面     |
| POST     | /students/edit   |          |                            | 处理编辑请求     |
| GET      | /students/delete | id       | name、age、gender、hobbies | 处理删除请求     |



#### 提取路由模块

```javascript
/**
 *  router.js路由模块
 *  职责:
 *    处理路由
 *    根据不同的请求方法+请求路径设置具体的请求处理函数
 * 
 */
var express = require('express')
// 1.创建一个路由容器
var router = express.Router()
// 2.把路由挂载到rouer路由容器中

router.get('/students', function (req, res) {
})

router.get('/students/new', function (req, res) { 
})

router.post('/students/new', function (req, res) {
})

router.get('/students/edite', function (req, res) {
    
})

router.post('/students/edite', function (req, res) {
    
})

router.get('/students/delete', function (req, res) {
    
})



// 3.把router导出
module.exports = router
```

app.js

```javascript
var router = require('./router')
// 把路由容器挂载到app服务汇总
app.use(router)
```



#### 设计操作数据的api文件模块

```javascript
/**
 * student.js
 * 数据操作文件模块
 * 职责:操作文件中的数据,只处理数据,不关心业务
 * 
 * 
 */

/**
 * 获取所有学生列表
 * return[]
 */
exports.find = function () {

}
/**
 * 添加保存学生
 */
exports.save = function () {

}
/**
 * 更新学生
 */
exports.update = function () {

}
/**
 * 删除学生
 */
exports.delete = function () {}
```

## MongoDB

#### 关系型数据库和非关系型数据库

表就是关系

或者说表与表之间存在关系.

- 所有的关系型数据库都需要通过sql语言来操作
- 所有的关系型数据库在操作之前都需要设计表结构
- 而且数据表还支持约束
  - 唯一的
  - 主键
  - 默认值
  - 非空

- 非关系型数据库非常灵活
- 有的关系型数据库就是key-value对
- 但是MongoDB是长的最像关系型数据的非关系型数据库
  - 数据库->数据库
  - 数据表->集合(数组)
  - 表记录->文档对象

- MongoDB不需要设计表结构
- 也就是说你可以任意的往里面存数据,没有结构性这么一说

#### 安装

- 下载

- 安装

- 配置环境变量  C:\Program Files\MongoDB\Server\4.0\bin    在bin中                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

- 最后输入mongod --version 测试是否安装成功


#### 启动和关闭数据库

启动:

```javascript
//mongodb默认使用执行mongod命令所处盘符根目录下的/data/db作为自己的数据存储目录
//所以在第一次执行改命令之前先自己手动新建一个/data/db
mongod
```

如果想要修改默认的数据存储目录,可以:

```
mongod --dbpath=路径
```

停止:

```javascript
在开启服务的控制台,ctr+c或者直接关闭
```

#### 链接数据库

```shell
#默认链接本机
mongo
#退出
exit
```

#### 基本命令

- show dbs
  - 查看显示所有数据库

- db
  - 查看当前操作的数据库
- use 数据库名称
  - 切换到指定的数据(如果没有就会新建)

- 插入数据

#### 在node中如何操作MongoDB数据

##### 使用官方的mongodb包来操作

https://github.com/mongodb/node-mongodb-native

##### 使用第三方mongoose来操作MongoDB数据库

第三方包:mongoose基于MongoDB官方的mongodb包再一次做了封装

- 安装

  ```javascript
  npm i mongoose
  ```

- 起步

  - ```javascript
    const mongoose = require('mongoose');
    
    // 连接数据库
    mongoose.connect('mongodb://localhost:27017/test', {
      useNewUrlParser: true
    });
    // 创建一个模型 就是在设计数据库
    //MongoDB 是动态的,非常灵活,只需要在代码中设计你的数据库就可以了
    // mongoose这个包就可以让你的设计编写过程变得非常的简单
    const Cat = mongoose.model('Cat', {
      name: String
    });
    
    // 实例化一个cat
    const kitty = new Cat({
      name: 'Zildjian'
    });
    // 持久化保存kitty实例
    kitty.save().then(() => console.log('meow'));
    ```

- 官方指南

  - 设计Schema发布model

    ```javascript
    const mongoose = require('mongoose')
    
    //表结构
    const Schema = mongoose.Schema
    // 1.链接数据库
    mongoose.connect('mongodb://localhost/test')
    
    // 2.设计集合结构(表结构)
    // 字段名称就是表结构中的属性名称
    // 值
    // 约束目的是为了保证数据的完整性,必要有脏数据
    var userSchema = new Schema({
      username: {
        type: String,
        required: true //必须有
      },
      password:{
        type:String,
        required:true
      },
      email:{
        type:String
      }
    });
    
    // 3.将文档结构发布为模型  
    //  mongoose.model 方法就是用来将一个架构发布为model
    // 第一个参数:传入一个大写名词单数字符串用来表示你的数据库名称
    //            mongoose会自动将大写名词的字符串生成 小写复数 的集合名称
    //            User->users
    // 第二个参数:架构Schema
    // 返回值:模型构造函数
    
    var User=mongoose.model('User',userSchema)
    
    // 4.当我们有了模型构造函数之后,就可以使用这个构造函数对users集合中的数据为所欲为了
    
    ```

  - 增加数据

    ```javascript
    var admin = new User({
      username: 'admin',
      password: '123',
      email: 'admin@123.com'
    
    })
    
    admin.save(function (err, ret) {
      if (err) {
        console.log('fail');
      } else {
        console.log('ok');
        console.log(ret);
      }
    })
    ```

    

  - 查询数据

    ```javascript
    // 查所有
    // User.find(function (err, ret) {
    //   if (err) {
    //     console.log('fail');
    //   } else {
    //     console.log(ret);
    //   }
    // })
    // // 条件查询
    // User.find({
    //   username: 'zs'
    // }, function (err, ret) {
    //   if (err) {
    //     console.log('fail');
    //   } else {
    //     console.log(ret);
    //   }
    // })
    // 查询一个
    User.findOne({
      username: 'admin'
    }, function (err, ret) {
      if (err) {
        console.log('fail');
      } else {
        console.log(ret);
      }
    })
    ```

    

  - 删除数据

    ```javascript
    User.remove({
      username: 'zs'
    }, function (err, ret) {
      if (err) {
        console.log('fail');
      } else {
        console.log(ret);
      }
    
    })
    ```

    

  - 修改数据

    ```javascript
    User.findByIdAndUpdate('5d4159d561f2ad1564ba8aac', {
      password: '8888'
    }, function (err, ret) {
      if (err) {
        console.log('fail');
      } else {
        console.log('ok');
        console.log(ret)
      }
    })
    ```

## 使用node操作mysql

- 安装

  ```shell
  npm install mysql
  ```

- 使用

  ```javascript
  var mysql = require('mysql');
  var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'users'
  });
  
  connection.connect();
  
  connection.query('SELECT * FROM `users`', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
  });
  // connection.query('INSERT INTO users VALUES(NULL,"admin","123456")', function (error, results, fields) {
  //   if (error) throw error;
  //   console.log('The solution is: ', results);
  // });
  
  connection.end();
  ```

  

## node综合web案例

- 目录结构

  ```
  app.js
  controllers
  models
  node_modules
  package.json      
  package-lock.json  第三方包版本锁定文件(npm5以后才有)
  public
  README.md  
  routers
  views
  ```

  

- 模版页

  - [模版继承]([https://aui.github.io/art-template/zh-cn/docs/syntax.html#%E6%A8%A1%E6%9D%BF%E7%BB%A7%E6%89%BF](https://aui.github.io/art-template/zh-cn/docs/syntax.html#模板继承))
  - [子模版]([https://aui.github.io/art-template/zh-cn/docs/syntax.html#%E5%AD%90%E6%A8%A1%E6%9D%BF](https://aui.github.io/art-template/zh-cn/docs/syntax.html#子模板))

- 路由设计

  | 路径      | 方法 | get参数 | post参数               | 是否需要登录 | 备注         |
  | --------- | ---- | ------- | ---------------------- | ------------ | ------------ |
  | /         | get  |         |                        |              | 渲染首页     |
  | /register | get  |         |                        |              | 渲染注册页面 |
  | /register | post |         | email nicknam password |              | 处理注册请求 |
  | /login    | get  |         |                        |              | 渲染登录页面 |
  | /login    | post |         | email password         |              | 处理登录请求 |
  | /logout   | get  |         |                        |              | 处理退出请求 |
  |           |      |         |                        |              |              |

  

- 模型设计

- 功能实现

- 书写步骤

  - 创建目录结构
  - 整合静态页-模版页
    - include
    - block
    - extend

- 设计用户路由 退出 注册的路由
- 用户注册
  - 先处理好客户端页面的内容(表单控件的name.收集表单数据 发起请求
  - 服务端
    - 获取客户端表单数据
    - 操作数据库
      - 如果错误,发送500告诉客户端服务错误了
      - 其它的根据你的业务发送不同的响应数据

- 用户登录
- 用户退出

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

### 异步编程

#### 回调函数

1.不成立的情况

```javascript
function add(x, y) {
  console.log(1)
  setTimeout(function () {
    console.log(2)
    var ret = x + y
    return ret
  }, 0)
  console.log(3)
  // 到这里执行就结束了,不会等到前面的定时器,所以直接就返回了默认值undefined
}
console.log(add(1, 2))  
//执行结果  1 3 undefined 2
```

2.不成立的情况

```javascript
function add(x, y) {
  var ret
  console.log(1)
  setTimeout(function () {
    console.log(2)
    ret = x + y

  }, 0)
  console.log(3)
  return ret
}
console.log(add(1, 2))
//执行结果  1 3 undefined 2
```

3.回调函数

```javascript
function add(x, y, callback) {
   //callback就是回调函数
    //var x=10
    //var y=20
    //var callback=function(ret){console.log(ret)}
  console.log(1)
  setTimeout(function () {
    var ret = x + y
    callback(ret)

  }, 1000)
}
add(10, 20, function (ret) {
  console.log(ret)
})
// 注意:凡是需要得到一个函数内部异步操作的结果
// setTimeout  readFile writeFire ajax
// 这种情况必须通过:回调函数
```

基于原生XMLHTTPRequest封装get方法:

[原生XMLHTTPRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)

```javascript
 function get(url, callback) {
        var oReq = new XMLHttpRequest();
        // 当请求加载成功之后要调用指定的函数
        oReq.onload = function() {
          callback(oReq.responseText);
        };
        oReq.open('get', url, true);
        oReq.send();
  }
  get('data.json', function(data) {
        console.log(data);
      });
```

#### promise

![1564632583747](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1564632583747.png)





基本语法



![1564986799040](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1564986799040.png)

```javascript
var fs = require('fs')


// 创建promise容器
// 1.promise容器一旦创建,就开始执行里面的代码
var p1 = new Promise(function (resolve, reject) {

  fs.readFile('../data/read.txt', 'utf8', function (err, data) {
    if (err) {
      // 失败了,承诺容器中的任务失败了
      // 把容器的pending状态变为rejected
      // 调用reject就相当于调用了then方法的第二个参数函数
      reject(err)
    } else {
      // 成功了把容器的pending状态变为resolved
      // 也就是说这里调用的resolve方法实际上就是then方法传递的那个function
      resolve(data)
    }
  })
})
// p1就是那个承诺
// 当p1成功了然后(then)做什么
// then方法接收的function就是容器中的resolve函数
p1.then(function (data) {
  console.log(data);
}, function (err) {
  console.log('读取失败', err);
})
```

![1564992985840](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1564992985840.png)

封装promise版本德readFile

```javascript
var fs = require('fs')


function pReadFile(filePath) {
  return new Promise(function (resolve, reject) {

    fs.readFile(filePath, 'utf8', function (err, data) {
      if (err) {

        reject(err)
      } else {

        resolve(data)
      }
    })
  })
}

pReadFile('../data/read.txt').then(
  function (data) {
    console.log(data);
    return pReadFile('../data/read.txt')
  }
).then(function (data) {
  console.log(data);
  return pReadFile('../data/read.txt')
}).then(
  function (data) {
    console.log(data);
  }
)
```



### 语法

find

```javascript
 	// es6中的一个数组方法:find
    // 需要接收一个函数作为参数
    // 当某个遍历项符合 item.id===student.id条件的时候,find会终止遍历,同时返回遍历项
    var stu = students.find(function (item) {
      return item.id === student.id
    })
```



findIndex

```javascript
	// findIndex方法专门用来根据条件查找元素的下标
    var deleteId = students.findIndex(function (item) {
      return item.id === parseInt(id)
    })
    // 根据下标从数组中删除对应的学生对象
    students.splice(deleteId, 1)
```



for in

```javascript
	// 这种方式你就写死了,有100个难道就写100次码?
    // stu.name = student.name
    // stu.age = student.age

    //遍历拷贝对象
    for (const key in student) {
      stu[key] = student[key]
    }
```

throw

```javascript
fs.readFile('./a.txt',function(err,data){
    if(err){
        trow err
    }
        
})
```

