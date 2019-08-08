// 在node中,每个模块内部都有一个自己的module对象
//该module中,有一个成员叫:exports也是一个对象
// 也就是说如果你需要对外导出成员,只需要把导出的成员挂载到module.exports中


// 我们发现,每次导出接口成员的时候都通过module.exports.XXX=xxx的方式很麻烦,
// 所以,node为了简化操作,专门提供了一个exports===module.exports


// var module = {
//   exports: {

//   }
// }

// 也就是说在模块中还有这么一句代码
// var exports = module.exports

// module.exports.foo = 'bar'

// module.exports.add = function (x, y) {
//   return x + y
// }

// 两者一致,那就说明,我可以使用任意一方来导出
// console.log(exports === module.exports);

// exports.foo = 'bar'
// exports.add = function (x, y) {
//   return x + y
// }

// 1.当一个模块需要导出单个成员的时候
// 直接给exports赋值是不管用的 exports = 'bar'


//可以
// exports.a = 123
// 不可以
// exports = {}
// exports.foo = 'bar'
// 可以
// module.exports.b = 456

// 2.给exports赋值会断开和module.exports之间的引用
// 给module.exports赋值同理也会断开
// module.exports = 'hello'
// exports.foo = 'word'


// 这里导致exports!==module.exports
// module.exports = {
//   foo: 'nar'
// }
// 但是这里有重新建立两者的引用关系
// exports = module.exports
// exports.foo = 'hello'

// 3.eg
// {foo:'bar'}
exports.foo = 'bar'
//{foo:'bar,a:123}
module.exports.a = 123
// 重新赋值 断开  exports!==module.exports
// 最终retrun是module.exports
// 所以无论你exports中的成员是什么都没用
exports = {
  a: 455
}
//{foo:'hhh',a:123}
module.exports.foo = 'hhh'
// 没关系
exports.c = 456

//重新建立关系
exports = module.exports


//由于在上面建立了引用关系,所以这里生效的
// {foo:'bar,a:789}
exports.a = 789

// 无论前面再牛逼,在这里都全部推翻了,重新赋值
// 最终得到的是function
module.exports = function () {
  console.log('hello');
}

// 真正去使用的时候
// 导出多个成员:exports.xxx=xxx
// 导出多个成员也可以:
// module.exports = {}

// 导出单个成员:module.exports


// 谁来require我,谁就得到module.exports
// 默认在代码的最后有一句
// 一定要记住,最后return的是module.exports
// 不是exports
// 所以你给exports重新赋值不管用,
// return module.exports