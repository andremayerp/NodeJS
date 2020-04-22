const express = require('express');
const app = express();
const events = require('events');
const eventEmitter = new events.EventEmitter();

var myScream = function(){
    console.log('Aaaaaaaaaah');
}

eventEmitter.on('scream', myScream);

app.get('/', function(request, response){
    eventEmitter.emit('scream');

    response.send('Someone shouted?'); //Alguém gritou?
});


app.listen(8181, function(){
    console.log('Server running...');
});
