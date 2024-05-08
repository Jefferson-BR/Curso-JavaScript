// Cria um novo elemento <h2>
var subtitulo = document.createElement("h2");

// Adiciona uma classe ao elemento <h2>
subtitulo.classList = "teste-de-classe";

// Adiciona um nó de texto ao elemento <h2>
subtitulo.appendChild(document.createTextNode("Esse texto vai no H2"));

// Seleciona o elemento com o ID "titulo" no documento
var title = document.querySelector("#titulo");

// Seleciona o pai do elemento com o ID "titulo"
var pai = title.parentNode;

// Substitui o elemento com o ID "titulo" pelo novo elemento <h2>
pai.replaceChild(subtitulo, title);
