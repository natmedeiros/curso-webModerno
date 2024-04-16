/*
    Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
    primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
    retornará o valor da aplicação sob o regime de juros compostos.
*/

    function jurosSimples(capital, taxa, tempo){
        const montante1 = capital + (capital * tempo  * taxa);

        return montante1
};

function jurosCompostos(capital, taxa, tempo){
    const montante2 = capital * (Math.pow(1 + taxa, tempo));

    return montante2
};

console.log(jurosSimples(30000, 10/100, 12));
console.log(jurosCompostos(30000, 10/100, 12));