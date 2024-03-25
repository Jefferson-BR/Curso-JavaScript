let num = [8, 7, 6, 5, 4]
num[5] = 3,
num[6] = 2
num.push(1)
num.sort()

console.log(`Nosso vetor é: ${num} Com um total de: ${num.length} Itens`)

// for (let pos=0; pos < num.length; pos++){
//     console.log(`A posição ${pos} tem um valor de: ${num[pos]}`)
// }

for (let pos in num){
    console.log(`A posição ${pos} tem um valor de: ${num[pos]}`)
}

let pos = num.indexOf(9)
console.log(`O Valor Solicitado 9 está na posição: ${pos}`)