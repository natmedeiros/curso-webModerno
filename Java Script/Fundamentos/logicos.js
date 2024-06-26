function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // operação do tipo "ou"
    const comprarTv50 = trabalho1 && trabalho2 // operação do tipo "e"
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // usando a negação para fazer uma operação do tipo "ou exclusivo"
    const manterSaudavel = !comprarSorvete // operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))