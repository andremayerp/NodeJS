const logger = require('../logger/log.js');

const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

//necessário pois sem isto está depreciado
let optionsMongo = {useUnifiedTopology: true}
const mongoClient = new MongoClient(url, optionsMongo);

//criando conexao  //(dica) se o err fosse parametro aqui, ele nao aceitaria
mongoClient.connect().then((db) =>{
    console.log('Conexao estabelecida com MongDB...');
    
    /*
     *objeto que representa um banco de dados especifico
     *neste caso o 'banco'
     *o mesmo eh quem faz a manipulacao dos dados
    */
  
    let dbo = db.db('banco'); 

    dbo.createCollection('pessoa', function(err, res){
        
        if(err) throw err;
        logger.info('Colecao criada');
        
    });

    dbo.collection('pessoa').insertOne({name:'andre', saldo: 200}, function(err, res){
        if(err) throw err;
        logger.info(res.insertedCount + ' pessoa inserida');
    })

    dbo.collection('pessoa').insertMany([{name:'Roberval', saldo: 201}, {name: 'Diego'}])
    .then((res)=>{
        logger.info(res.insertedCount + ' pessoa(s) inserida(s)');
        mongoClient.close(); 
    }).catch((err)=>{
        throw err;
    });

    dbo.collection('funcao').insertOne({func: function(){return 'oie';}},function(err, res){
        if(err) throw err;
        console.log(res.insertedId + ' funcao inserido');
    })

    //colocar tudo num outro arquivo separado por métodos

}).catch(function(err){
    console.log('erro: ');
    if(err) throw err;
});

