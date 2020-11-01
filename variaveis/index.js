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
/*const cliente = {
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
console.log(pedido.itensDoPedido[0].sabor) *
    /

*/
//exercicio 1
// criar um objeto com a propriedade cliente que tenha os dados ( nome , telefone .email)
const cliente = {
        nome: "fred",
        telefone: "xxxxxx",
        email: "meuemail"
    }
    // intens do pedido , será um array de itens ( sabor , codigo,preço e tamanho)
const itensDoPedido = [{
            sabor: "calabresa",
            codigo: "cd001",
            tamanho: "70gr",
            preco: 3
        },
        {
            sabor: "queijo",
            codigo: "cd002",
            tamanho: "1200gr",
            preco: 5
        }
    ]
    //console.log(itensDoPedido)
    //propriedade forma de pagamento ( objeto que tem o nome e bandeira (ex: debt , crédt master ou visa))
    // tudo dentro do pedido
const formaDePagamento1 = {
    tipo: "cartao",
    bandeira: "mastercard",
    emissor: "banco do brasil"
}
const formaDePagamento2 = {
    tipo: "cartao",
    bandeira: "visa",
    emissor: "santander"
}
const formaDePagamento3 = {
    tipo: "dinheiro",
    bandeira: "",
    emissor: ""
}
const formasDePagamentoAceitas = [formaDePagamento1, formaDePagamento2, formaDePagamento3]
const codigoDoPedido = "0001"
const pedido1 = {
    numeroPedido: codigoDoPedido,
    horaDoPedido: "23:50",
    cliente: cliente,
    itens: itensDoPedido,
    formaDePagamento: formasDePagamentoAceitas[1].tipo
}

const pedido2 = {
    numeroPedido: "0002",
    horaDoPedido: "22:50",
    cliente: cliente,
    itens: [itensDoPedido[1]],
    formaDePagamento: formasDePagamentoAceitas[1].tipo
}
console.log(pedido1)

const finalizar = {
    clientes: cliente,
}

// exercicio 2
// objeto chamado balanço do dia ( com data - dia semana - pedido  array de pedido)

const balanco = {
    data: "23/10/2020",
    dia: "sabado",
    pedidos: [
        pedido1.numeroPedido,
        pedido2.numeroPedido
    ]

}
console.log(balanco)