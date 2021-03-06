const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize')
const bodyParser = require('body-parser');
const port = 8181;
const url = require('url');
const dao = require('./dao/dao.js');

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

let getForm = function(req, res){
    res.render('formulario');
}

let postRecebendoForm = function(req, res){
    let nome = req.body.nome;
    let texto = req.body.texto;
    res.redirect('/test?nome=' + nome + "&texto=" + texto);
    //o redirect nao leva o body do req
} //usar enconding?

let getTest = (req, res) =>{
    let objUrl = url.parse(req.url, true);
    
    res.send("Nome = " + objUrl.query.nome + "<br/>" 
    + "Texto = " +objUrl.query.texto);
}

let getJavaScript = (req, res) =>{
    res.render('animacao');
}

let icons = (req, res) =>{
    res.render('iconsbar');
}

let getBackToFront = (req, res) => {
    res.render('backToFront', {nome: 'andre', idade: 25, profissao: 'programador'});
}

let getCadastrarUsuario = (req, res) => {
    res.render('cadastro-usuario');
}

let postCadastrarUsuario = (req, res) => {
    let usuario = {};
    usuario.login = req.body.login;
    usuario.senha = req.body.senha;
    usuario.email = req.body.email;
    
    dao.usuario.create(usuario).then(usr=>{
        console.log(usr.toJSON());
    }).catch(err => {
        throw err;
    });

    res.send('sucesso');
}

app.post('/recebendoForm', postRecebendoForm);
app.post('/cadastrarUsuario', postCadastrarUsuario);

app.get('/cadastrarUsuario', getCadastrarUsuario);
app.get('/backtofront', getBackToFront);
app.get('/form', getForm);
app.get('/test', getTest);
app.get('/javascript', getJavaScript);
app.get('/iconsbar', icons);

app.listen(port, function(){
    console.log('Server running...');
})
