var url = require('url')
var obj = url.parse('http://127.0.0.1:3000/pinglun?name=11&message=11111', true)
console.log(obj);
console.log(obj.query);