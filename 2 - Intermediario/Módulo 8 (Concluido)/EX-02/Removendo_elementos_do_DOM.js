// Cria um novo elemento <h1>
var titulo = document.createElement("h1");

// Adiciona um texto ao elemento <h1>
titulo.appendChild(document.createTextNode("Esse Titulo vai ser removido pelo metodo .remove()"));

// Seleciona o elemento <body> do documento HTML
var body = document.querySelector("body");

// Adiciona o elemento <h1> ao final do <body>
body.appendChild(titulo);

// Seleciona o elemento <h1> do documento HTML
var remocao_titulo = document.querySelector("h1");

// Remove o elemento <h1> do documento HTML
remocao_titulo.remove();

// Seleciona o elemento com o id "paragrafo" do documento HTML
var paragrafo = document.querySelector("#paragrafo");

// Seleciona o elemento <span> dentro do elemento com id "paragrafo"
var remocao_do_span = document.querySelector("#paragrafo span");

// Remove o elemento <span> do elemento com id "paragrafo"
paragrafo.removeChild(remocao_do_span);
