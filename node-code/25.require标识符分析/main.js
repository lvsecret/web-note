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