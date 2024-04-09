for(var i = 0; i <= 15; i++){
    console.log(`Repetição número: ${i + '\n'}`)
}

var itens_array = ['String', 454, 12.5, null, undefined, +Infinity, -Infinity]

for(var contador = 0; contador < itens_array.length; contador++){
    console.log(`${contador + ' -'} ${itens_array[contador]}`)
}