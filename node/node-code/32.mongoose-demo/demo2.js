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
  password: {
    type: String,
    required: true
  },
  email: {
    type: String
  }
});

// 3.将文档结构发布为模型  
//  mongoose.model 方法就是用来将一个架构发布为model
// 第一个参数:传入一个大写名词单数字符串用来表示你的数据库名称
//            mongoose会自动将大写名词的字符串生成 小写复数 的集合名称
//            User->users
// 第二个参数:架构Schema
// 返回值:模型构造函数

var User = mongoose.model('User', userSchema)

// 4.当我们有了模型构造函数之后,就可以使用这个构造函数对users集合中的数据为所欲为了


// 新增
// var admin = new User({
//   username: 'zs',
//   password: '123',
//   email: 'admin@123.com'

// })

// admin.save(function (err, ret) {
//   if (err) {
//     console.log('fail');
//   } else {
//     console.log('ok');
//     console.log(ret);
//   }
// })


// 查询

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
// User.findOne({
//   username: 'admin'
// }, function (err, ret) {
//   if (err) {
//     console.log('fail');
//   } else {
//     console.log(ret);
//   }
// })


// 删除

// User.remove({
//   username: 'zs'
// }, function (err, ret) {
//   if (err) {
//     console.log('fail');
//   } else {
//     console.log(ret);
//   }

// })


// 修改

User.findByIdAndUpdate('5d4159d561f2ad1564ba8aac', {
  password: '8888'
}, function (err, ret) {
  if (err) {
    console.log('fail');
  } else {
    console.log('ok');
    console.log(ret);
  }
})