const express = require("express");
const app = express();
const url = require('url');
const fs = require('fs');
const formidable = require('formidable');

//rota principal (index)
app.get("/", function(request, response){
    response.send("Olá Mundo!");
});

app.get("/arquivo", function(request, response){
    let objUrl = url.parse(request.url, true); // true para pegar queryString
    let idArquivo = objUrl.query.id;

    fs.readFile("",function(err, data){
        console.log(data);
       response.send('nao implementado');
    });d
});

app.get('/fileupload', function(request, response){
    response.sendFile(__dirname + '/arquivos/file-upload.html');
});
 


app.post('/fileupload', function(request, response){
    let form = new formidable.IncomingForm();
    //transformando o arquivo no request em objeto
    form.parse(request, function(err, fields, files){
        if(err) throw err;
        console.log('fields = ' + JSON.stringify(fields));
        console.log('files = ' + JSON.stringify(files));

        let oldPath = files.filetoupload.path;
        let newPath = 'C:\\Users\\Pichau\\Desktop\\nodeJS\\js\\arquivos\\' 
                                + files.filetoupload.name;
        //mudando do local temporario para o do projeto
        fs.rename(oldPath, newPath, function(err){
            if(err) throw err;
            response.send('File save!');
        });

    });
});




app.listen(8181, function(){
    console.log("Servidor rodando...");
});
