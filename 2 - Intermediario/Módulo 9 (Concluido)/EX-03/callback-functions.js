// Função que imprime o resultado da operação
function resultado(num) {
    console.log(`O Resultado da operação é: ${num}`);
}

// Função de soma que recebe dois números e uma função de retorno de chamada
function soma(a, b, cb) {
    // Realiza a operação de soma
    let operacao = a + b;
    // Chama a função de retorno de chamada e passa o resultado da operação como argumento
    cb(operacao);
}

// Função de multiplicação que recebe dois números e uma função de retorno de chamada
function multiplicacao(a, b, callback) {
    // Realiza a operação de multiplicação
    let operacao = a * b;
    // Chama a função de retorno de chamada e passa o resultado da operação como argumento
    callback(operacao);
}

// Chama a função de soma, passando os números 5 e 5 e a função de retorno de chamada 'resultado'
soma(5, 5, resultado);

// Chama a função de multiplicação, passando os números 5 e 10 e a função de retorno de chamada 'resultado'
multiplicacao(5, 10, resultado);
