// novo recurso do ES215

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereço: {
        logradouro: 'Rua X',
        numero: 1213
    }
}

const { nome, idade } = pessoa
console.log(nome + ',', idade + ' anos.')

const { nome: n, idade: i } = pessoa
console.log(n,i)

const { endereço: {logradouro, numero } } = pessoa
console.log(logradouro + ',', numero + '.')