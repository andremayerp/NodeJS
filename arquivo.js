const express = require('express');
const app = express();
const fs = require('fs');


//baixar arquivo
app.get("/", function(request, response){
    fs.readFile(__dirname + '/arquivos/index.html', function(err, data){
        response.send(data); 
    });
});

//retornar arquivo
app.get("/index", function(request, response){
    response.sendFile(__dirname + '/arquivos/index.html');
});

app.get('/append', function(request, response){
    fs.appendFile(__dirname + '/arquivos/appendFile.txt', 'Oie ', function(err){
        if(err) throw err;
        console.log('Write success!');
        response.send('Write success!');
    });
    
});

app.get('/open', function(request, response){
    fs.open(__dirname + '/arquivos/open.txt', 'w', function(err, file){
        if(err) throw err;
        console.log(file);
        response.send('Done');
    });
});

app.s(8181, function(){
    let servidor = 'Servidor';
    let rodando = 'rodando';
    console.log(`${servidor} ${rodando}...`);
});