const Sequelize  = require('sequelize');
const sequelize = new Sequelize('nodejs', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

const dao = {};

const usuario = sequelize.define('usuario', {
    login:{
        type: Sequelize.STRING //cria um varchar(255)
    },
    senha:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    }
});

//usuario.sync(); //criar mesmo se existir = Usuario.sync({force:true});

dao.usuario = usuario;

module.exports = dao;
