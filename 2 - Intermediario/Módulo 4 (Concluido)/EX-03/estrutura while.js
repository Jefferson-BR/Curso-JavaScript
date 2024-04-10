// Loop while para imprimir uma mensagem repetidamente enquanto x for menor ou igual a 5
var x = 0;
while (x <= 5) {
    console.log(`Repetição ${x}`);
    x++; // incrementador
}

// Array de itens
var itens_array = ['Texto', 21, 54.9, true, null, undefined, 'Texto', 21, 54.9, true, null];

// Inicializa y como 0 para iterar sobre os elementos do array
var y = 0;

// Loop while para iterar sobre os elementos do array e imprimir o índice e o elemento
while (y >= 0 && y <= 10) {
    console.log(`${y} - ` + itens_array[y]);
    y++;
}
