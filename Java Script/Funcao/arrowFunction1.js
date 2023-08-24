let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // função arrow = função reduzida com return implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'// função arrow sem parâmetros
ola = _ => 'Olá' // possui um parâmetro que pode ser ignorado
console.log(ola())

// Usar funções arrow é uma boa prática