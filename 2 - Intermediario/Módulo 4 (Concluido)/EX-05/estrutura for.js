// Loop for para imprimir uma mensagem repetidamente enquanto i for menor ou igual a 15
for (var i = 0; i <= 15; i++) {
    console.log(`Repetição número: ${i}\n`);
}

// Array de itens
var itens_array = ['String', 454, 12.5, null, undefined, +Infinity, -Infinity];

// Loop for para iterar sobre os elementos do array e imprimir o índice e o elemento
for (var contador = 0; contador < itens_array.length; contador++) {
    console.log(`${contador} - ${itens_array[contador]}`);
}
