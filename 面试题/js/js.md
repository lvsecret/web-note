# js

## 1.深浅拷贝

浅拷贝

```javascript
   var obj1 = {
      age: 10,

      sex: '男',

      car: ['奔驰', '宝马', '特斯拉', '奥拓'],
    }

    //另一个对象

    var obj2 = {}

    //写一个函数,作用:把一个对象的属性复制到另一个对象中,浅拷贝

    //把a对象中的所有的属性复制到对象b中

    function extend(a, b) {
      for (var key in a) {
        b[key] = a[key]
      }
    }

    extend(obj1, obj2)

    console.dir(obj2) //开始的时候这个对象是空对象

    console.dir(obj1) //有属性
```

深拷贝

```javascript
var obj1 = {
      age: 10,

      sex: '男',

      car: ['奔驰', '宝马', '特斯拉', '奥拓'],

      dog: {
        name: '大黄',

        age: 5,

        color: '黑白色',
      },
    }

    var obj2 = {} //空对象

    //通过函数实现,把对象a中的所有的数据深拷贝到对象b中

    function extend(a, b) {
      for (var key in a) {
        //先获取a对象中每个属性的值

        var item = a[key]

        //判断这个属性的值是不是数组

        if (item instanceof Array) {
          //如果是数组,那么在b对象中添加一个新的属性,并且这个属性值也是数组

          b[key] = []

          //调用这个方法，把a对象中这个数组的属性值一个一个的复制到b对象的这个数组属性中

          extend(item, b[key])
        } else if (item instanceof Object) {
          //判断这个值是不是对象类型的

          //如果是对象类型的,那么在b对象中添加一个属性,是一个空对象

          b[key] = {}

          //再次调用这个函数,把a对象中的属性对象的值一个一个的复制到b对象的这个属性对象中

          extend(item, b[key])
        } else {
          //如果值是普通的数据,直接复制到b对象的这个属性中

          b[key] = item
        }
      }
    }

    extend(obj1, obj2)

    console.dir(obj1)

    console.dir(obj2)
```

### 2异步编程

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

封装promise版本的readFile

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

封装微信小程序请求

```javascript
/**
 * 封装微信的的request
 */
function request(url, data = {}, method = "GET",header=1) {
  return new Promise(function(resolve, reject) {
    wx.request({
      url: url,
      data: data,
      method: method,
      header: {
        'Content-Type': header === 1 ? 'application/json' : 'application/x-www-form-urlencoded',
        'token': 'app_access'
      },
      success: (res) => {
        resolve(res.data)
      },
      fail: (err) => {
        reject(err)
        // console.log("failed")
      }
    })
  });
}

```

