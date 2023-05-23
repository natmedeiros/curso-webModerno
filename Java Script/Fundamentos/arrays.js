const valores = [7.7, 8.9, 6.3, 9.2] // um par de "[]" cria um array
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) // "length" mostra a quantidade de elementos no array

valores.push({id: 3}, false, null, 'teste') // "push" adiciona valores ao array
console.log(valores)

console.log(valores.pop()) // "pop" tira o ultimo elemento do array
delete valores[0] // Deleta o valor do elemento escolhido
console.log(valores)

console.log(typeof valores)