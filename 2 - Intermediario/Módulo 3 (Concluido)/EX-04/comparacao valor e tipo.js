// Define a variável numero como uma string contendo '5'
var numero = '5';

// Verifica se o valor de numero é igual a 5 e do mesmo tipo
if (numero === 5 || numero === '5') {
    // Se verdadeiro, imprime 'O Numero 5 é do mesmo tipo'
    console.log('O Número 5 é do mesmo tipo, e tem o mesmo valor');
}

// Verifica se o valor de numero é estritamente diferente de '5'
else if (numero !== '5') {
    // Se verdadeiro, imprime 'O Numero 5 não é do mesmo tipo'
    console.log('O Número tem o mesmo tipo, mas não é do mesmo valor');
}

// Verifica se o valor de numero é diferente de 5 ou se o tipo é diferente de string
if (numero !== 5 || typeof numero !== 'string') {
    // Se verdadeiro, imprime 'O Numero é de tipo diferente, mas não tem o mesmo valor'
    console.log('O Número é de tipo diferente, mas não tem o mesmo valor');
}