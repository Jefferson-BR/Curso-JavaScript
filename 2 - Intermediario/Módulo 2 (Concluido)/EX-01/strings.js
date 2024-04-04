// Existem 3 formas de usar strings no js usando:
// 1 - Usando aspas duplas ""
// 2 - Usando aspas simples ''
// 3 - Usando a crase ``

var nome = "Jefferson" // aspas duplas "
var sobrenome = 'Barbosa' // aspas simples '
var terceiro_nome = `Santos` // crase ``

var nomeCompleto = `${nome} ${sobrenome} ${terceiro_nome}`

console.log(nomeCompleto)