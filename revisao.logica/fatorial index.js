function fatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }

    let resultado = 1;
    for (let i = numero; i >= 2; i--) {
        resultado *= i;
    }

    return resultado;
}
console.log(fatorial(6)) 