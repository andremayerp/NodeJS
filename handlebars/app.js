const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize')
const bodyParser = require('body-parser');

//--CONFIGURANDO ENGINE TEMPLATE
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//--CONFIGURANDO BODY-PARSER
// support parsing of application/json type post data
app.use(bodyParser.json());
// support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({extended: false}));

//configurando os publicos do express, aqui que ele consulta seu arquivos
//https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

console.log(__dirname)

//Conexao com o banco
const sequelize = new Sequelize('nodejs', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

app.get('/form', function(req, res){
    res.render('formulario');
})

app.post('/recebendoForm', function(req, res){
    res.send(req.body.nome);
})

app.get('/test', (req, res) =>{
    res.render('test');
});

app.listen(8181, function(){
    console.log('Server running...');
})
