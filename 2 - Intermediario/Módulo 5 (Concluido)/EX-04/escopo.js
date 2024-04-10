// Variável global acessível em todo o código
var globalVariable = 50;

function teste(){
    let num_1 = 25
    console.log(num_1)
    console.log(globalVariable)
}

teste();
// console.log(num_1) <---- Não é possivel acessar essa variavel, pois ela está dentro do bloco (function).

function teste_2(){
    let num_1 = 100
    console.log(num_1)
    // Embora a variavel (num_1) já tenha sido criada, não vai ocorrer nenhum problema de sintaxe.
    // Afinal as variaveis são estão acessiveis dentro dos blocos, caso contrario haveria um erro.
}

teste_2()