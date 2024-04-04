var numero = '5';

if(numero === 5) {
    console.log('O Numero 5 é do mesmo tipo');
    // Esse operador compara o tipo de dado se ambos forem do mesmo tipo number + number ou
    // string + string o resultado vai ser verdadeiro, do contrario sera falso.
}
if(numero !== '5') {
    console.log('O Numero 5 não é do mesmo tipo');
    // Esse operador só vai ser acionado se o 5 que está no if for diferente do 5 que está na variavel
}