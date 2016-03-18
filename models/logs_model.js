var mysql = require('mysql');

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'a1s2d3f4',
    database: 'minutrade'
});

var logsModel = {};

//Get all trasactions logs functions
logsModel.getLogs = function(callback){
    if(connection){
        connection.query('SELECT * FROM log_transactions',function(error,rows){
            if(error){
                throw error;
            }else{
              callback(null, rows);
            }
        });
    }
}

//Export object when you call
module.exports = logsModel;
