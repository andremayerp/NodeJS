const Sequelize  = require('sequelize');
const sequelize = new Sequelize('nodejs', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

const Usuario = sequelize.define('usuarios', {
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

Usuario.sync(); //criar mesmo se existir = Usuario.sync({force:true});
