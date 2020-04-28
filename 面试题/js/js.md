# js

## 1.深浅拷贝

https://www.cnblogs.com/secretAngel/p/10188716.html

![](E:\note\面试题\js\img\深浅拷贝.jpg)

浅拷贝只复制指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存,深拷贝会另外创造一个一模一样的对象，新对象跟原对象不共享内存，修改新对象不会改到原对象

![](E:\note\面试题\js\img\深浅区别.jpg)

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

递归方法实现深度克隆原理：遍历对象、数组直到里边都是基本数据类型，然后再去复制，就是深度拷贝。

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

## 2异步编程

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

## 3.捕获和冒泡

#### 事件捕获(上->下)

事件从最不精确的对象(document 对象)开始触发，然后到最精确(也可以在窗口级别捕获事件，不过必须由开发人员特别指定)

#### 事件冒泡(下->上)

件按照从最特定的事件目标到最不特定的事件目标(document对象)的顺序触发

![](E:\note\面试题\js\img\捕获冒泡.png)

```javascript

//当你把一个可以漂浮在水面上的物品，使劲向水里砸下去，它会首先有一个下降的过程，这个过程就可以理解为从最顶层向事件发生的最具体元素（目标点）的捕获过程；之后由于浮力大于物体自身的重力，物体会在到达最低点（ 最具体元素）之后漂浮到水面上，这个过程相对于事件捕获是一个回溯的过程，即事件冒泡。
//element.addEventListener(event, function, useCapture) tue 捕获 false冒泡默认
btn.addEventListener('click',function(){
        console.log('1')
        },false)
btn.addEventListener('click',function(){
        console.log('2')
        },true)
btn.addEventListener('click',function(){
        console.log('3')
        },true)
btn.addEventListener('click',function(){
        console.log('4')
        },false)

//结果 2314
//阻止冒泡
方法1:event.stopPropagation();
方法2:return false;
```

## 4.跨域解决方案

- jsonp(只支持get,支持老ie浏览器)

  原理:利用`<script>`标签没有跨域限制，通过`<script>`标签src属性，发送带有callback参数的GET请求，服务端将接口返回数据拼凑到callback函数中，返回给浏览器，浏览器解析执行，从而前端拿到callback函数返回的数据。

- cors(跨域资源共享) 不支持ie10以下

  请求的url地址,必须与浏览器上的url地址处于同域上,也就是域名,端口,协议相同.

- nginx(适合前后分离项目)

- node.js中间件代理(适合前后分离项目)

- iframe(适合主域名相同,子域名不同的跨域请求)

- postMessage(h5新特性,只支持主流浏览器和ie10+)

- websocket(h5新特性,只支持主流浏览器和ie10+)

## 5.无限极累加的函数

https://www.cnblogs.com/oxspirt/p/5436629.html

用js 实现一个无限极累加的函数， 形如 add(1) //=> 1; add(1)(2)  //=> 2; add(1)(2)(3) //=>  6; add(1)(2)(3)(4) //=> 10; 以此类推

```javascript
function add(a){
 function s(b){
    a =   a+b;
    return s;
 }
 s.toString = function(){return a;}
 return s;
}
console.log(add(1)(2)(3)(4));//10
//1. 使用闭包， 同时要对JavaScript 的作用域链（原型链）有深入的理解；
//2. 重写函数的 toSting()方法；
/*
a) 执行add(1);   
　　　　　　返回的是里面的  s  函数， 通过闭包，s 函数里面可以访问到 变量 a=1;  所以 当我们 alert(add(1)); 的时候， 调用的 toSting（）方法会将作用域（原型链）里面的 a = 1 弹出来。
　　　　　　
b) 执行add(1)(2);
　　　　　　<===等价于===> s(2);  这里面相当于 把 2 传递给 s()函数里面的 b , 让作用域（原型链）里面的 a = a+b ,此时 a = 3， 继续保存在作用域中了。 然后还是返回 s 函数。

c) 执行 add(1)(2)(3); 

　　　　　　<===等价于===> s(3);和上面 b) 中的分析一样，只是更新了作用域中的 a = 6 了，然后同样是返回 s 函数。
*/
```

## 6.闭包

闭包就是能够读取其他函数内部变量的函数，(子函数访问父函数的变量)
由于在 Javascript 语言中，只有函数内部的子函数才能读取局部变量，
因此可以把闭包简单理解成 “定义在一个函数内部的函数”。
所以，在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。

```javascript
 //普通的函数

 function f1() {

   var num = 10;

   num++;

   return num;

 }

 console.log(f1());//11

 console.log(f1());//11

 console.log(f1());//11

 //函数模式的闭包

 function f2() {

   var num = 10;

   return function () {

     num++;

     return num;

   }

 }

 var ff = f2();

 console.log(ff());//11

 console.log(ff());//12

 console.log(ff());//13
```



特点:

- 函数声明的时候,会生成一个独立的作用域
- 同一作用域的对象可以互相访问
- 闭包的作用是保护一些私有属性,不让外界访问,只有return将属性暴露才能被外界访问

闭包的用途：

- 可以在函数外部读取函数内部成员
- 让函数内成员始终存活在内存中

防止闭包:调完父函数的变量之后**设置null**清除变量

**使用闭包的注意点（缺点）：**由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。

## 7.**递归**

函数中调用函数自己,此时就是递归,递归一定要有结束的条件,否则就是死循环

```javascript
      //求n个数字的和,5 计算1+2+3+4+5
      // var sum = 0;
      // for (var i = 1; i <= 5; i++) {
      //   sum += i;
      // }
      // console.log(sum);

      //递归实现:求n个数字的和   n=5--->  5+4+3+2+1
      //函数的声明

      function getSum(x) {
        if (x == 1) {
          return 1;
        }
        return x + getSum(x - 1);
      }
      //函数的调用
      console.log(getSum(5));
      /*
       * 执行过程:
       * 代码执行getSum(5)--->进入函数,此时的x是5,执行的是5+getSum(4),此时代码等待
       * 此时5+getSum(4),代码先不进行计算,先执行getSum(4),进入函数,执行的是4+getSum(3),等待, 先执行的是getSum(3),进入函数,执行3+getSum(2),等待,先执行getSum(2),进入函数,执行 2+getSum(1);等待, 先执行getSum(1),执行的是x==1的判断,return 1,所以,
       * 此时getSum(1)的结果是1,开始向外走出去
       * 2+getSum(1) 此时的结果是:2+1
       * 执行:
       * getSum(2)---->2+1
       * 3+getSum(2) 此时的结果是3+2+1
       * 4+getSum(3) 此时的结果是4+3+2+1
       * 5+getSum(4) 此时的结果是5+4+3+2+1
       * 结果:15
       * */
```



递归应用场景

- 深拷贝
- 菜单树
- 遍历 DOM 树

## 8.原型&原型链

#### 原型

目的:解决构造函数带来的问题-资源不共享,消耗空间

定义:

- 实例对象中有__proto__这个属性,叫原型,也是一个对象,这个属性是给浏览器使用,不是标准的属性----->__proto__----->可以叫原型对象

- 构造函数中有prototype这个属性,叫原型,也是一个对象,这个属性是给程序员使用,是标准的属性------>prototype--->可以叫原型对象

不需要共享的数据写在构造函数中,需要共享的数据写在原型中

实例对象使用的属性或者方法,先在实例中查找,找到了则直接使用,找不到则,去实例对象的__proto__指向的原型对象prototype中找,找到了则使用,找不到则报错

如何把局部变量变成全局变量?

把局部变量给window就可以了

```javascript
 (function (win) {
   var num=10;//局部变量
   win.num=num;
 })(window);

```

原型的指向是可以改变的

如果原型指向改变了,那么就应该在原型改变指向之后添加原型方法

实例对象访问这个属性,应该先从实例对象中找,找到了就直接用，找不到就去指向的原型对象中找,找到了就使用,找不到呢?

通过实例对象能否改变原型对象中的属性值?不能

就想改变原型对象中属性的值,怎么办?直接通过原型对象.属性=值;可以改变

#### 原型链

是一种关系,实例对象和原型对象之间的关系,关系是通过原型(__proto__)来联系的

## 9.继承

https://www.cnblogs.com/diligentYe/p/6413450.html

https://www.jianshu.com/p/1016160e91fe

- 原型继承-改变原型的指向
- 借用构造函数继承-主要解决属性问题
- 组合继承-原型继承+借用构造函数继承.解决属性和方法问题
- 拷贝继承(推荐)-就是把对象中需要共享的属性或者方法直接遍历的方法复制到另外一个对象中

## 10.上下问调用-this

- call()

  语法:函数.call(期望函数内部this指向谁,参数1,参数2,...)

- apply()

  语法:函数.apply(this的新指向,数组或者伪数组)

  注意:与call区别是参数是一个数组

- bind()

  语法:函数,bind(this的新指向,可以写参数也可以不写参数)

  注意:不会执行改函数,而是返回一个函数体一模一样但是改变了thsi指向的函数

## 11.状态码

200:成功

301:重定向

304:该资源在上次请求之后没有任何修改（这通常是浏览器的缓存机制，使用GET请求时尤其需要注意）

400:请求错误

401:没有权限

403：（禁止）服务器拒绝请求；

404：（未找到）服务器找不到请求的网页；

408：（请求超时）服务器等候请求时发生超时；

500：（服务器内部错误）服务器遇到错误，无法完成请求  

## 12.cookies sessionStorage和localstorage区别

相同点:都存储再客户端

不同点:

- 存储大小

  cookie不超过4k

  sessionStorage和localStorage可以达到5M或者更大

- 有效时间

  localStorage    存储持久数据，浏览器关闭后数据不丢失除非主动删除数据

  sessionStorage  数据在当前浏览器窗口关闭后自动删除

   设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭

- 数据与服务器之间的交互方式

  cookie的数据会自动的传递到服务器，服务器端也可以写cookie到客户端

  sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存

## 13.http原理

1 客户端与服务器建立tcp连接（三次握手）

A:来握个手

B:收到 好的 马上

A:好的 等你

B:好了来握手把

A-B B-A A-B

2建立连接后，客户机发送一个请求给服务器

3服务器接到请求后，给予相应的响应信息，其格式为一个状态行，包括信息的协议版本号、一个成功或错误的代码，后边是MIME信息包括服务器信息、实体信息和可能的内容。         

4客户端接收服务器所返回的信息通过浏览器显示在用户的显示屏上，然后客户机与服务器断开连接。

