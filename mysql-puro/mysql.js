const mysql = require('mysql');
/*if(erro = 'HandShake') ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
    no momento de criar a conexão
*/
const scripts = require('./scripts');


const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root"
});


con.connect(function(err){
    if(err) throw err;
    console.log('Connected!');

    let sql = scripts.createDataBase('nodeJS');
    
    con.query(sql, function(err, result){
        if(err) throw err;
        console.log(result);
    });
    

});


