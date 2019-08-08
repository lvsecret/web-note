// typeof 运算符

// v
// console.log(typeof v); //v is not defined
// typeof window // "object"
// typeof {} // "object"
// typeof [] // "object"

// 错误的写法
// if (v) {
//   // ...
//   console.log(1);
// }
// ReferenceError: v is not defined

// 正确的写法
if (typeof v === "undefined") {
  // ...
  console.log(2);
}


// instanceof 运算符 可以区分数组和对象



// console.log([] instanceof Array);



// Object.prototype.toString 方法