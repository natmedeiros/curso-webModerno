/* Exercício
02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
 */

// Resolução

function triangulo( a, b, c ) {
    if( a + b > c && a + c > b && b + c > a){
    if( a == b && b == c && c == a ) 
        return 'Equilátero'
   
    if( a == b || b == c || c == a ) 
    return 'Isósceles'
   
    if( a != b && c != a && b != c)
        return 'Escaleno'
    }
    else {
        return 'Não forma um triângulo'
    }
   
}

console.log(triangulo(2, 5, 4))
console.log(triangulo(4, 5, 4))
console.log(triangulo(5, 5, 5))
console.log(triangulo(3, 3, 8))
