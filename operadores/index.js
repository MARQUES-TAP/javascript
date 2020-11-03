// Operadores lógicos
//---------------------
// !== -> diferente
// ===-> igual
// >= -> maior ou igual - para numericos 
// =< -> menor ou igual para numericos
// > -> maior para numericos
// < -> menor para numericos
// && -> e -> todas as condições precisam ser verdadiras
//  -> ou -> uma das condições precisa ser verdadeira

//Condicionais
//if = SE
//else = ENTAO

//switch
//case

//Resultado é um valor Booleano = boolean = true ou false

/* entrada = idade
const minhaIdade = 18

//regras :
const maiorIdade = 18
const idoso = 65


// faça uma condição que exiba se a idade é : 
// menor de idade abaixo de 18 anos

if (minhaIdade < maiorIdade) {
    console.log("Você é menor de idade")
}
if (minhaIdade >= idoso) {
    console.log("Você é um idoso")
} else {
    console.log("Você é maior de idade")
}
*/
// Identificar curva de venda de um produto 0->100

// entrada = quantidadeVendida
const quantidadeVendida = 21

//curva D = 0 -> [20] OK
//curva C = 21 -> [30] X
//curva B = 31 -> [40] OK
//curva A = acima de [41] OK
// imprimir na tela qual a curva do produto:

const curvaA = 50
const curvaB = 40
const curvaC = 30
const curvaD = 20

if (quantidadeVendida >= 40) {
    console.log(" Produto curva A")
}

if (quantidadeVendida < 40 && quantidadeVendida >= 30) {
    console.log(" Produto curva B")
}

if (quantidadeVendida >= 21 && quantidadeVendida <= 29) {
    console.log(" Produto curva C")
}

if (quantidadeVendida <= 20) {
    console.log(" Produto curva D")
}