// Exercício
//03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

function expoente(base, expoente) {
    let resultado = Math.pow(base, expoente)
                //Ou
    resultado = base ** expoente
    return resultado
}

console.log(expoente(3, 2))