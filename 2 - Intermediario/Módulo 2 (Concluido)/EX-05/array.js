// Definindo um array que contém diversos tipos de dados, incluindo um objeto
var array = [21, 'Jefferson', true, {nulo: null, indefinido: undefined, boleano: true}, false];
//           0       1          2                   3                                     4


array[3].indefinido = 'Um Texto qualquer'
// Acessando o primeiro elemento do array (índice 0) e imprimindo-o no console
console.log(array[0], array[3].indefinido); // Saída: 21

// Acessando o tipo de dado da propriedade 'boleano' dentro do objeto dentro do array
console.log(typeof array[3].boleano); // Saída: 'boolean'
