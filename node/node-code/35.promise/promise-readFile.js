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