var mysql = require("mysql2");

var connection = mysql.createConnection({
    host: "localhost", 
    port: 3306,
    user: "root", 
    password: "", 
    database: "contactInfo_db"
});

connection.connect(function(err) {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;