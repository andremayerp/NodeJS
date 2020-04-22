let createDataBase = function(nome){
    let sql = `CREATE DATABASE IF NOT EXISTS ${nome};`;
    return sql;
}

module.exports.createDataBase = createDataBase;