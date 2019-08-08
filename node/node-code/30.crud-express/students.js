/**
 * student.js
 * 数据操作文件模块
 * 职责:操作文件中的数据,只处理数据,不关心业务
 * 
 * 
 */
var fs = require('fs')
var dbPath = './db.json'
/**
 * 获取所有学生列表
 * return[]
 * callback中的参数
 *    第一个参数是err
 *        成功是 null
 *        错误是 错误对象
 *    第二个参数是结果
 *        成功是  数组
 *        错误是   undefined
 */
exports.find = function (callback) {
  fs.readFile(dbPath, function (err, data) {
    if (err) {
      return callback(err)
    }
    callback(null, JSON.parse(data).students)
  })
}
// 调用的时候
// find(function (err, data) {})

/**
 * 根据id获取学生信息对象
 * @param {Number}   id       学生id
 * @param {Function} callback  回调函数
 * 
 */
exports.findById = function (id, callback) {
  fs.readFile(dbPath, function (err, data) {
    if (err) {
      return callback(err)
    }
    var students = JSON.parse(data).students
    var ret = students.find(function (item) {
      return item.id === parseInt(id)
    })
    callback(null, ret)
  })
}
// findById(id, function (err, student) {})

/**
 * 添加保存学生
 */
exports.save = function (student, callback) {
  fs.readFile(dbPath, 'utf8', function (err, data) {
    if (err) {
      return callback(err)
    }
    var students = JSON.parse(data).students
    // 处理id唯一的,不重复
    student.id = students[students.length - 1].id + 1

    students.push(student)

    var fileData = JSON.stringify({
      students: students
    })
    fs.writeFile(dbPath, fileData, function (err) {
      if (err) {
        // 错误就是把错误对象传递给它
        return callback(err)
      }
      // 成功就没有错误,所以错误对象是null
      callback(null)
    })
  })
}

// save({
//   name: 'xxx',
//   age: 18
// }, function (err) {
//   if (err) {
//     console.log('保存失败');
//   } else {
//     console.log('保存成功');
//   }
// })

/**
 * 更新学生
 */
exports.updateById = function (student, callback) {
  fs.readFile(dbPath, 'utf8', function (err, data) {
    if (err) {
      return callback(err)
    }
    var students = JSON.parse(data).students
    // 统一把id转数字
    student.id = parseInt(student.id)

    // 你要修改谁,就需要把谁找出来
    // es6中的一个数组方法:find
    // 需要接收一个函数作为参数
    // 当某个遍历项符合 item.id===student.id条件的时候,find会终止遍历,同时返回遍历项
    var stu = students.find(function (item) {
      return item.id === student.id
    })
    // 这种方式你就写死了,有100个难道就写100次码?
    // stu.name = student.name
    // stu.age = student.age

    //遍历拷贝对象
    for (const key in student) {
      stu[key] = student[key]
    }

    var fileData = JSON.stringify({
      students: students
    })
    fs.writeFile(dbPath, fileData, function (err) {
      if (err) {
        // 错误就是把错误对象传递给它
        return callback(err)
      }
      // 成功就没有错误,所以错误对象是null
      callback(null)
    })

  })

}
// updateById({
//   id: 1,
//   name: 'xxx',
//   age: 18
// }, function (err) {})


/**
 * 删除学生
 */
exports.deleteById = function (id, callback) {
  fs.readFile(dbPath, 'utf8', function (err, data) {
    if (err) {
      return callback(err)
    }
    var students = JSON.parse(data).students

    // findIndex方法专门用来根据条件查找元素的下标
    var deleteId = students.findIndex(function (item) {
      return item.id === parseInt(id)
    })
    // 根据下标从数组中删除对应的学生对象
    students.splice(deleteId, 1)
    var fileData = JSON.stringify({
      students: students
    })
    fs.writeFile(dbPath, fileData, function (err) {
      if (err) {
        // 错误就是把错误对象传递给它
        return callback(err)
      }
      // 成功就没有错误,所以错误对象是null
      callback(null)
    })
  })
}
// deleteById(id, function (err) {})