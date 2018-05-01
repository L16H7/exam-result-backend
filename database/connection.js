var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'exam-result'
});

connection.connect(function(err) {
  if (err) {
      console.error('ERR connecting: ' + err.stack);
  } else {
      console.log('CONNECTED AS ID ' + connection.threadId);
  }
});

module.exports = connection;