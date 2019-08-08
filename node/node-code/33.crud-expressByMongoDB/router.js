/**
 *  router.js路由模块
 *  职责:
 *    处理路由
 *    根据不同的请求方法+请求路径设置具体的请求处理函数
 * 
 */

var fs = require('fs')
var Students = require('./students')

//这样也不方便

// module.exports = function (app) {
//   app.get('/students', function (req, res) {
//     // readFile的第二个参数是可选的,传入utf8,按照utf8编码
//     // 除了这样来装换之外,也可以通过data.toString()
//     fs.readFile('./db.json', 'utf8', function (err, data) {
//       if (err) {
//         return res.status(500).send("server error")
//       }
//       res.render('index.html', {
//         fruits: [
//           '苹果',
//           '香蕉',
//           '橘子'
//         ],
//         // 从文件中读取的数据一定是字符串
//         // 所以这里一定要手动转成对象
//         students: JSON.parse(data).students
//       })
//     })

//   })
//   app.get('/students/new', function (req, res) {})
//   app.get('/students/new', function (req, res) {})
//   app.get('/students/new', function (req, res) {})
//   app.get('/students/new', function (req, res) {})
//   app.get('/students/new', function (req, res) {})
//   app.get('/students/new', function (req, res) {})

// }


//express提供了一个方法
var express = require('express')
// 1.创建一个路由容器
var router = express.Router()
// 2.把路由挂载到rouer路由容器中

/**
 * 获取学生列表
 */
router.get('/students', function (req, res) {
  Students.find(function (err, students) {
    if (err) {
      return res.status(500).send("server error")
    }
    res.render('index.html', {
      fruits: [
        '苹果',
        '香蕉',
        '橘子'
      ],
      // 从文件中读取的数据一定是字符串
      // 所以这里一定要手动转成对象
      students: students
    })
  })

})
/**
 * 跳到添加学生页面
 */
router.get('/students/new', function (req, res) {
  res.render('new.html')
})
/**
 * 添加学生
 */
router.post('/students/new', function (req, res) {
  // console.log(req.body);
  // 1.获取表单数据
  // 2.处理
  //    将数据保存到db.json文件中用以持久化
  // 3.发送响应
  //    先读取出来,转成对象
  //    然后往对象中push数据
  //    然后把对象转成字符串
  //    然后把字符串再次写入文件
  new Students(req.body).save(function (err) {
    if (err) {
      return res.status(500).send("server error")
    }
    res.redirect('/students')
  })

})
/**
 * 渲染编辑学生页面
 */
router.get('/students/edit', function (req, res) {

  // 1.在客户端的列表中处理链接问题(需要id参数)
  // 2.获取需要编辑的id
  // 3.渲染编辑页面
  //    根据id把学生信息查出来
  //     使用模版引擎渲染页面

  Students.findById(req.query.id.replace(/"/g, ''), function (err, student) {
    if (err) {
      return res.status(500).send("server error")
    }
    res.render('edit.html', {
      student: student
    })
  })


})
/**
 * 处理编辑学生
 */
router.post('/students/edit', function (req, res) {
  // 1.获取表单数据
  //  req.body
  // 2.更新
  //  Student.updateById()
  // 3.发送响应

  Students.findByIdAndUpdate(req.body.id.replace(/"/g, ''), req.body, function (err) {
    if (err) {
      return res.status(500).send("server error")
    }
    res.redirect('/students')
  })
})
/**
 * 处理删除学生
 * 
 */
router.get('/students/delete', function (req, res) {
  // 1.获取要删除的id
  // 2.根据id执行删除操作
  // 3.根据操作结果发送响应数据
  // console.log(req.query.id);

  Students.findByIdAndRemove(req.query.id.replace(/"/g, ''), function (err) {
    if (err) {
      return res.status(500).send("server error")
    }
    res.redirect('/students')
  })
})



// 3.把router导出
module.exports = router