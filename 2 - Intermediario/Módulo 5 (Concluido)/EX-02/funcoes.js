// Definição da função para imprimir um nome
function dizerNome(nome) {
    console.log('O Nome é: ' + nome);
}

// Chamadas da função dizerNome com diferentes nomes como argumentos
dizerNome('Lucas');
dizerNome('Davi');
dizerNome('Matheus');
dizerNome('Leonardo');

// Definição de uma variável global Banco_De_Dados
var Banco_De_Dados = 'Jefferson';

// Chamada da função dizerNome com o valor da variável Banco_De_Dados como argumento
dizerNome(Banco_De_Dados);

// Definição da função para calcular a soma de dois números
function calculo(numero_1, numero_2) {
    var soma = numero_1 + numero_2; // Cálculo da soma
    return soma; // Retorna o resultado
}

// Chamada da função calculo com dois números como argumentos
var retorno = calculo(25, 25);

// Imprime o resultado retornado pela função calculo
console.log('Resultado: ' + retorno);
