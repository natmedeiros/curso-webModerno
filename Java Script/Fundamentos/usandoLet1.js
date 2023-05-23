let numero = 1
{
    let numero = 2
    console.log('Dentro =',  numero)
} 
console.log('Fora =', numero)
// O 'let'  respeita o bloco, diferente de 'var'

/* Variáveis definidas com a palavra reservada 'var' tem escopo global e escopo de função,
variáveis definidas com a palavra reservada 'let' tem escopo global e escopo de função e escopo de BLOCO. */
