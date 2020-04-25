async function go(){
    console.log('Inside GO')
    let quadradoDeDentro = document.getElementById('quadradoDeDentro');
    let quadradoDeDentroStyle = quadradoDeDentro.style;
    quadradoDeDentroStyle.backgroundColor = gerarCorRgbAleatoria();
    
    let campoDeFora = document.getElementById('campoDeFora');
    let campoDeForaStyle = campoDeFora.style;
    campoDeForaStyle.backgroundColor = gerarCorRgbAleatoria();
    
    let texto = document.querySelector('#texto');
    console.log(texto);
    let textoStyle = texto.style;
    console.log(textoStyle);

    let pos = 0;;
    let sentidoPositivoAtual = true;
    let sentidoPositivoAnterior;
    while(true){
        sentidoPositivoAtual = obterSentidoPositivo(pos, sentidoPositivoAtual);
        pos = obterNext(pos, sentidoPositivoAtual);
        if(bateu(sentidoPositivoAnterior, sentidoPositivoAtual)){
            quadradoDeDentroStyle.backgroundColor = gerarCorRgbAleatoria();
            campoDeForaStyle.backgroundColor = gerarCorRgbAleatoria();
            textoStyle.color = gerarCorRgbAleatoria();
        }
        quadradoDeDentroStyle.left = pos + "px";
        await sleep(1);  
        sentidoPositivoAnterior = sentidoPositivoAtual;
    }


    
}

function bateu(sentidoPositivoAnterior, sentidoPositivoAtual){
    return sentidoPositivoAnterior !== sentidoPositivoAtual;
}

function obterNext(pos, sentidoPositivo){
    if(pos == 500) return --pos;
    if(pos == 0)   return ++pos;

    if(sentidoPositivo) return ++pos;
    else                return --pos;
}

function obterSentidoPositivo(pos, sentidoPositivo){
    if(pos == 500) return false;
    if(pos == 0)   return true;
    return sentidoPositivo;
}

function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
    
}

function gerarCorRgbAleatoria(){
    let corRetorno = "rgb(";
    let red = Math.random() * 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;
    return corRetorno + red + ',' + green + ',' + blue + ')';
}
