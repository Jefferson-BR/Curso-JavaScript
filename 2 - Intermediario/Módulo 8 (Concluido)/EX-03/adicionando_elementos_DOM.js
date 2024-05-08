// Cria uma nova div
var div_1 = document.createElement("div");

// Adiciona a classe "div-criada" à div criada
div_1.classList = "div-criada";

// Imprime a div_1 no console
console.log(div_1);

// Seleciona o elemento com o ID "container"
var container = document.querySelector("#container");

// Adiciona a div_1 como um filho do container
container.appendChild(div_1);

// Cria uma segunda div
var div_2 = document.createElement("div");

// Adiciona a classe "div-before" à segunda div
div_2.classList = "div-before";

// Seleciona o primeiro elemento com a classe "div-criada" dentro do container
var implemento = document.querySelector("#container .div-criada");

// Imprime o elemento selecionado no console
console.log(implemento);

// Insere a div_2 antes do elemento selecionado implemento dentro do container
container.insertBefore(div_2, implemento);
