// Função IIFE

let funcao = (function(){
    return "Qualquer valor que estiver aqui dentro vai ser executado..";
})()

let funcao_divisao = (function(num1, num2){
    let soma = num1 / num2 
    return soma
})(50, 2)

console.log(funcao);
console.log(funcao_divisao)

/*
    O que é uma função IIFE?

    - Uma função IIFE, ou Immediately Invoked Function Expression, é uma função em JavaScript que é definida e executada imediatamente após a sua criação. Isso significa que uma vez que a função é definida, ela é imediatamente chamada e o seu código é executado, sem a necessidade de chamá-la explicitamente em outro lugar do código. Essa técnica é comumente usada para criar um escopo isolado para variáveis e funções, evitando assim a poluição do escopo global.
*/ 