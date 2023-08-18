
function ExibirNumerosPrimos(numero) {
    if (numero <= 1) {
        return "Não é primo";
    }
    
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return "Não é primo";
        }
    }
    
    return "Primo";
}