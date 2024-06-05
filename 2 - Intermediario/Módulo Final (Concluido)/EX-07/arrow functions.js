// Arrow functions

let Arrow_function = () => {
    return "Retornando uma arrow function"
}

console.log(Arrow_function)
console.log(Arrow_function())

/*

O Que são arrow functions? (ES/ECMA 6)

- As arrow functions são uma forma mais concisa de escrever funções em JavaScript. Elas oferecem uma sintaxe mais curta e simplificada em comparação com as funções tradicionais. As principais características das arrow functions incluem:

Sintaxe simplificada: Elas permitem que você escreva funções de uma forma mais compacta, eliminando a necessidade de usar a palavra-chave function e as chaves {} em alguns casos.

Contexto léxico: Ao contrário das funções tradicionais, as arrow functions não têm seu próprio contexto this. Em vez disso, elas herdam o contexto léxico do escopo pai.

Útil para funções de uma linha: São especialmente úteis quando você precisa de funções de uma única linha.

*/