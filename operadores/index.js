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
// entrada = idade
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


// Identificar curva de venda de um produto 0->100

// entrada = quantidadeVendida
const quantidadeVendida = 50

//curva D = 0 -> [20]
//curva C = 21 -> [30]
//curva B = 31 -> [40]
//curva A = acima de [41]
// imprimir na tela qual a curva do produto: