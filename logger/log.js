let logger = {};

function nivelEMensagem(nivel, mensagem){
    console.log(nivel + ': '+ mensagem);
}

logger.info = function(msg){
    nivelEMensagem('INFO', msg);
}

//nao utilizar, parece que deixa mais confuso a analise do log
//TODO: pensar em um upgrade
logger.error = function(msg){
    nivelEMensagem('ERROR', msg);
    return msg;
}

logger.alert = function(msg){
    nivelEMensagem('ALERT', msg);
}

module.exports = logger;