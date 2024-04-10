// Loop for decrescente, começando em 10 e indo até 1
for (var i = 10; i > 0; i--) {
    console.log(i); // Imprime o valor atual de i
    
    // Verifica se i é igual a 5
    if (i === 5) {
        break; // Se i for igual a 5, interrompe o loop
    }
}

console.log('Break foi acionado no número 5\n'); // Imprime uma mensagem após o loop

var x = 0;

// Loop while que adiciona 10 a x a cada iteração, até que x seja maior ou igual a 100
while (x < 100) {
    x += 10; // Incrementa x em 10

    // Verifica se x é 30, 60 ou 90
    if (x === 30 || x === 60 || x === 90) {
        console.log('Continue Executado'); // Imprime uma mensagem se x for um dos valores especificados
        continue; // Pula para a próxima iteração do loop sem executar o código abaixo
    }
    
    console.log(`Repetição Número: ${x}`); // Imprime o valor de x em cada iteração, exceto quando x é 30, 60 ou 90
}
