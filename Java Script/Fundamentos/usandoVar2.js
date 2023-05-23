var numero = 1
{
    var numero = 2
    console.log('Dentro =', numero);
}
console.log('Fora =', numero);
// O 'var' ignora o bloco, tanto fz estar dentro ou fora do bloco, vai ser lido do mesmo jeito.

/* Variáveis definidas com a palavra reservada 'var' tem escopo global e escopo de função,
variáveis definidas com a palavra reservada 'let' tem escopo global e escopo de função e escopo de BLOCO. */
