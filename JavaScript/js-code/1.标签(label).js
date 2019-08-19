// top:
//   for (let index = 0; index < 3; index++) {
//     for (let j = 0; j < 3; j++) {
//       if (index === 1 && j === 1) break top;
//       console.log('index=' + index, 'j=' + j);

//     }

//   }
/*
index=0 j=0
index=0 j=1
index=0 j=2
index=1 j=0
*/
// 上面代码为一个双重循环区块，
// break命令后面加上了top标签（注意，top不用加引号），
// 满足条件时，直接跳出双层循环。如果break语句后面不使用标签，
// 则只能跳出内层循环，进入下一次的外层循环。

foo: {
  console.log('a');
  break foo
  console.log('不输出');
}
console.log('b');


// 上面代码执行到break foo，就会跳出区块。