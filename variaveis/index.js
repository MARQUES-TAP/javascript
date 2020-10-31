//variaveis
// let variaveis de scopo
// const variaveis que não muda o valor = constatntes
// var = let nao muito usado atualmente
// variavel é uma caixa que guarda um pedaço de informação
/*
const dado1 = 10 // número inteiro 
const dado2 = 20 // número inteiro
const resultado = dado1 / dado2
console.log(resultado)

const dado1 = "daniel" // texto string 
const dado2 = " marques" // texto string
const resultado = dado1 + dado2
console.log(resultado)
*/
// array uma coleção de dados que pode agregar qualquer tipo
//indice o ponteiro de uma posição, que sempre começa em zero
/*const sabores = ["calabres", "nutella", "queijo"] //coleção de dados array  simples
const tamanhos = ["70gr", "120gr", "170gr"]
const valores = [7, 5, 3]
const pedidos = [
    ["calabresa", "70gr", 3],
    ["nutella", "120gr", 5],
    ["queijo", "170gr", 7]
]
const ultimoPedido = pedidos[2]
console.log(ultimoPedido[0])

/*console.log(sabores[2])
console.log(tamanhos[1])
console.log(valores[0])
*/

// objetos (parece com array , porém o indice é uma propriedade)
const cliente = {
        nome: "fred",
        telefone: "xxxxxx",
        nota: 3
    }
    //console.log(cliente.nome)
const itens = [{
    sabor: "calabresa",
    valor: 7,
    tamanho: "170gr"
}, {
    sabor: "nutella",
    valor: 5,
    tamanho: "120gr"
}]
const pedido = {
    cliente: cliente,
    itensDoPedido: itens

}

//console.log(pedido.itensDoPedido[0].sabor)
//exercicio 1
// criar um objeto com a propriedade cliente que tenha os dados ( nome , telefone .email)
// intens do pedido , será um array de itens ( sabor , codigo,preço e tamanho)
// propriedade forma de pagamento ( objeto que tem o nome e bandeira (ex: debt , crédt master ou visa))
// tudo dentro do pedido

// exercicio 2
// objeto chamado balanço do dia ( com data - dia semana - pedido ( array de pedido))