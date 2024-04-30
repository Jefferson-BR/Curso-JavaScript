// length: propriedade que retorna o número de caracteres em uma string.
let frase = "Um Texto qualquer digitado pela maquina windows";
console.log(frase.length); // Saída: 45 (contando os espaços)

// indexOf: método que retorna o índice da primeira ocorrência de um determinado valor em uma string.
console.log(frase.indexOf('Texto')); // Saída: 3 (o índice onde 'Texto' começa)

// slice: método que retorna uma parte da string, começando do índice especificado até o índice especificado.
console.log(frase.slice(3, 8)); // Saída: 'Text' (os caracteres do índice 3 ao 7)
console.log(frase.slice(40, 47)); // Saída: 'maquina' (os caracteres do índice 40 ao 47)
