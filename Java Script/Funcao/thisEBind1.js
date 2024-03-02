const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // A partir dessa função o "this" sempre sera definido para "pessoa."
falarDePessoa()

// O bind() é o método responsável por amarrar o "this" ao objeto definido.