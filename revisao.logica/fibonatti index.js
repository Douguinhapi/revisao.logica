function fibonatti (sequencia){
    if (numero === 0 || numero === 1) {
        return 1;
    }
    let resultado = 1
    for (let resultado = i; i + i = l; i + l;)
}
// tentei mais minha lógica não está funcionando 

function fibonacci(sequencia) {
    if (sequencia === 0) {
        return 0;
    } else if (sequencia === 1) {
        return 1;
    }

    let resultado = [0, 1];
    for (let i = 2; i <= sequencia; i++) {
        resultado[i] = resultado[i - 1] + resultado[i - 2];
    }

    return resultado[sequencia];
}