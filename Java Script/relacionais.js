console.log('01)', '1' == 1 ) // os dois "==" significa que ele está relacionando um valor ao outro, ou seja, se os valores são iguais.
console.log('02)', '1' === 1 ) // usando os três "===" significa que ele está fazendo uma comparação mais rigorosa, no caso ele vai diferenciar uma string de um número.
console.log('03)', '3' != 3 ) // o símbolo "!=" significa diferente.
console.log('04)', '3' !== 3 ) // neste caso ele faz uma comparação mais rigorosa.

console.log('05)', 3 < 2 )
console.log('06)', 3 > 2 )
console.log ('07)', 3 <= 2 )
console.log('08)', 3 >= 2 )

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2 )
console.log('10)', d1 == d2 )
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null )
console.log('13)', undefined === null )

// Dica: é melhor utilizar o "==="/"!==" que é mais rigoroso na comparação.