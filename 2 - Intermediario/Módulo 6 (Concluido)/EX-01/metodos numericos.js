// parseFloat: analisa uma string e retorna um número de ponto flutuante
console.log(parseFloat('12.500')); // Saída: 12.5
console.log(Number.parseFloat('12.500')); // Saída: 12.5

// parseInt: analisa uma string e retorna um número inteiro
console.log(parseInt('21.21')); // Saída: 21

// toFixed: formata um número com um número fixo de casas decimais
console.log(23.5000.toFixed(1)); // Saída: 23.5

// isNaN: verifica se o valor passado é NaN (não é um número)
console.log(isNaN('Teste')) // Saída: true
console.log(isNaN(12)) // Saída: false
console.log(isNaN('14')) // Saída: false


// MAX_VALUE e MIN_VALUE: representam os maiores e menores valores possíveis em JavaScript, respectivamente.

console.log(Number.MAX_VALUE) // Acima disso o resultado vai ser +Infinity
console.log(Number.MIN_VALUE) // Abaixo disso o resultado vai ser -Infinity