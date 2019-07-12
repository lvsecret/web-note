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

### web服务开发

#### ip地址和端口号

- ip地址用来定位计算机
- 端口号用来定位具体的应用程序
- 一切需要联网通信的软件都会占用一个端口号
- 在计算机中有一些默认端口号,最好不要去使用 eg http服务的 80
- 在一台计算机中,同一个端口号同一时间只能被一个程序占用

#### Content-Type

 http://tool.oschina.net/commons

## Node中的模块系统

 * 在 Node 中没有全局作用域的概念
    * 在 Node 中，只能通过 require 方法来加载执行多个 JavaScript 脚本文件
    * require 加载只能是执行其中的代码，文件与文件之间由于是模块作用域，所以不会有污染的问题
      - 模块完全是封闭的
      - 外部无法访问内部
      - 内部也无法访问外部
    * 模块作用域固然带来了一些好处，可以加载执行多个文件，可以完全避免变量命名冲突污染的问题
    * 但是某些情况下，模块与模块是需要进行通信的
    * 在每个模块中，都提供了一个对象：`exports`
    * 该对象默认是一个空对象
    * 你要做的就是把需要被外部访问使用的成员手动的挂载到 `exports` 接口对象中
    * 然后谁来 `require` 这个模块，谁就可以得到模块内部的 `exports` 接口对象
    * 还有其它的一些规则，具体后面讲，以及如何在项目中去使用这种编程方式，会通过后面的案例来处理

## 服务端和客户端渲染

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