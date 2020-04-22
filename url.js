const express = require("express");
const app = express();
const url = require('url');

let address = 'http://localhost:8080/default.htm?year=2017&month=february';
let urlAux = url.parse(address, true);

let jsonString = JSON.stringify(urlAux);
let jsonObject = JSON.parse(jsonString);


 function formatarJsonHtml(json){
    let htmlRetorno = "<table border='1'>";

    let jsonObj = JSON.parse(JSON.stringify(json));
    for(campo in jsonObj){
        htmlRetorno += "<tr><td>" +campo + ': ' + jsonObj[campo] + "</tr></td>";
    }

    htmlRetorno += "</table>";

    return htmlRetorno;
 }

app.get('/', function(request, response){
    response.send('Url de Exemplo: ' + address
    + '<br/>'
    + '<br/>'
    + formatarJsonHtml(jsonObject));
});


//obtendo parametros da URL
app.get("/parametros/:nome/:sobrenome", function(request, response){
    let msg = "<h1> Seja bem vindo senhor(a): ";
    let parametros = request.params;
    response.send(msg + parametros.nome + " " + parametros.sobrenome + ".</h1>");
});

//obter parametros da URL (APOS '?')
app.get("/url", function(request, response){
    let objUrl = url.parse(request.url, true); //objeto com informacoes da url
    response.send(objUrl.query.andre); //caso exista localhost:8181/data?andre=10
});

app.listen(8181,function(){
    console.log('Servidor rodando...');
})