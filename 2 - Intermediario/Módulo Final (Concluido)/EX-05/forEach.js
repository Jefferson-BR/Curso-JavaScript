// Array de objetos representando produtos com seus respectivos nomes, valores e porcentagens de desconto
let produtos = [
    {   
        NomeDoProduto: "Celular",
        ValorDoProduto: 2500,
        porcentagemDeDesconto: 0.10,
    },
    {
        NomeDoProduto: "Notebook",
        ValorDoProduto: 3500,
        porcentagemDeDesconto: 0.20,
    },
    {
        NomeDoProduto: "Televisão",
        ValorDoProduto: 9000,
        porcentagemDeDesconto: 0.30,
    },
];

// Usando forEach para iterar sobre cada produto no array
produtos.forEach((ProdutoAtual) => {
    // Calculando o desconto aplicado ao produto atual
    let desconto = ProdutoAtual.ValorDoProduto * ProdutoAtual.porcentagemDeDesconto;
    // Calculando o valor total do produto com o desconto aplicado
    let valor_total = ProdutoAtual.ValorDoProduto - desconto;
    // Atribuindo o valor total calculado à variável ValorTotalDoProduto (não é necessário, poderia ser eliminada)
    let ValorTotalDoProduto = valor_total;
    // Imprimindo na console as informações sobre o produto atual, incluindo o valor total com desconto
    console.log(`O Valor do Produto é: R$${ProdutoAtual.ValorDoProduto.toFixed(2)}, Com o desconto de ${ProdutoAtual.porcentagemDeDesconto * 100}%, Esse sera o valor total do produto com desconto: R$${ValorTotalDoProduto.toFixed(2)}`);
});

/*
 - Este código cria um array de objetos que representam produtos, cada um com um nome, valor e porcentagem de desconto associados. Em seguida, ele utiliza um loop forEach para iterar sobre cada produto no array. Dentro desse loop, o código calcula o desconto aplicado a cada produto com base na sua porcentagem de desconto e no seu valor original. Depois, calcula o valor total do produto com o desconto subtraindo o valor do desconto do valor original. Por fim, imprime as informações sobre cada produto, incluindo seu valor original, porcentagem de desconto e valor total com desconto, no console.

*/