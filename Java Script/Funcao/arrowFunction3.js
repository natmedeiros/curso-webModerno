let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow

/* Vantagens da Arrow Functio: além dde ser escrita de forma reduzida, com funções 
pequenas, de uma única linha. O "This" não muda e é mais determinado dentro da arrow function.*/