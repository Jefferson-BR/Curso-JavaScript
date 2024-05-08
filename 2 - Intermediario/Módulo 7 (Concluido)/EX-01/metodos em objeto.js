let objeto = {
    nome: ["Jefferson", "Barbosa"],
    idade: 21,
    funcao: function(){
        console.log("Texto de um objeto")
    },
    soma: function(a, b){
        return a + b
    }
}

objeto.funcao()

var soma = objeto.soma(2, 2)

console.log(soma)