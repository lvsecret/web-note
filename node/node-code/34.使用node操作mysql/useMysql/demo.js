var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '123456',
  database: 'users'
});

connection.connect();

connection.query('SELECT * FROM `users`', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
// connection.query('INSERT INTO users VALUES(NULL,"admin","123456")', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results);
// });

connection.end();