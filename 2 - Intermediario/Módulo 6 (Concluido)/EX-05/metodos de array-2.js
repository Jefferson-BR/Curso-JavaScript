var arr = [1, 2, 3, 4, 5];

// splice: método que altera o conteúdo de um array, adicionando ou removendo elementos.
arr.splice(2, 0, 'texto Adicionado'); // Adiciona 'texto Adicionado' na posição 2 sem remover nenhum elemento
console.log(arr); // Saída: [1, 2, "texto Adicionado", 3, 4, 5]

arr.splice(0, 2); // Remove os dois primeiros elementos do array
console.log(arr); // Saída: ["texto Adicionado", 3, 4, 5]

var arr_2 = ["Um", "Texto", "Qualquer"];

// join: método que une todos os elementos de um array em uma única string.
arr_2.join(); // Junta os elementos do array com uma vírgula por padrão
console.log(arr_2); // Saída: ["Um", "Texto", "Qualquer"]

// reverse: método que inverte a ordem dos elementos de um array.
arr_2.reverse(); // Inverte a ordem dos elementos do array
console.log(arr_2); // Saída: ["Qualquer", "Texto", "Um"]
