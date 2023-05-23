const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //codigo relacionado a tabela uniCode
console.log(escola.indexOf('3')) //mostra o índice do numero 3

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + (escola) + ("!"))
console.log(escola.replace(3, 'e')) //subistituiu o número 3 pela letra 'é'

console.log('Ana,Maria,Pedro'.split(','))
