const log = require('../logger/log.js');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('nodejs', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});



sequelize.authenticate().then(function(){
    log('Connected!');
}).catch(function(err){
    log('Error: ' + err);
});

