let a = () => {
    console.log(1)
}

let b = function() {
    console.log(1)
}

function c(){
    console.log(1)
} /* acima sao tres formas de criar uma funcao */
//esta funcao eh asyncrona, ela pede uma funcao que eh a callback
//setTimeout(c, 1000)
console.time()

function resolverDepoisDeDoisSegundos(x) {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

resolverDepoisDeDoisSegundos(1).then(()=>{
    console.log('resolveu')
    console.timeEnd()
}).catch(() => {
    console.log('erro');
}); 

async function adicionar1(x){
    let a = resolverDepoisDeDoisSegundos(x)
    let b = resolverDepoisDeDoisSegundos(x)
    console.log(a)
    console.log(b)
    return x + await a + await b;
}
/*
adicionar1(10).then((retorno)=>{
    console.log('Retorno: ' + retorno)
})*/



