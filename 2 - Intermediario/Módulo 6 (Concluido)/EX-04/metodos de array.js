let arr = [1,2,3,4,5,6,7,8,9,10];

// length: propriedade que retorna o número de elementos em um array.
console.log(arr.length); // Saída: 10 (número de elementos no array)

// push: método que adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.
arr.push('Final'); // Adiciona 'Final' ao final do array
arr.push(true); // Adiciona true ao final do array
console.log(arr); // Saída: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Final', true]

// pop: método que remove o último elemento de um array e retorna o elemento removido.
arr.pop(); // Remove o último elemento ('true') do array
console.log(arr); // Saída: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Final']

// unshift: método que adiciona um ou mais elementos ao início de um array e retorna o novo comprimento do array.
arr.unshift("Inicio", 0); // Adiciona "Inicio" e 0 no início do array
console.log(arr); // Saída: ["Inicio", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Final']

// shift: método que remove o primeiro elemento de um array e retorna o elemento removido.
arr.shift(); // Remove o primeiro elemento ('Inicio') do array
console.log(arr); // Saída: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Final']

// acessar o último elemento: usando o índice -1 para acessar o último elemento do array.
console.log('\n', arr[arr.length - 1]); // Saída: 'Final'

// isArray: função que verifica se um valor é um array.
console.log(Array.isArray(5)); // Saída: false (5 não é um array)
console.log(Array.isArray(arr)); // Saída: true (arr é um array)