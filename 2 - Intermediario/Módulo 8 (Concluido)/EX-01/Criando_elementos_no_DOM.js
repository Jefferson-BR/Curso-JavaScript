// Cria um novo elemento <h1>
var titulo = document.createElement("h1");

// Cria um novo elemento <h2>
var subtitulo = document.createElement("h2");

// Cria um nó de texto para o título
var texto = document.createTextNode("Este é um texto criado dinamicamente usando createTextNode (JS)");

// Cria um nó de texto para o subtítulo
var texto_2 = document.createTextNode("Este é outro texto criado dinamicamente usando createTextNode (JS)");

// Adiciona o nó de texto ao elemento <h1>
titulo.appendChild(texto);

// Adiciona o nó de texto ao elemento <h2>
subtitulo.appendChild(texto_2);

// Cria um novo elemento <div>
var container = document.createElement("div");

// Cria um novo elemento <span>
var span = document.createElement("span");

// Cria um nó de texto para o <span>
span.appendChild(document.createTextNode("Este texto será adicionado ao <span>!"));

// Adiciona o <span> ao <div>
container.appendChild(span);

// Seleciona o corpo da página
var body = document.querySelector("body");

// Adiciona o título ao corpo da página
body.appendChild(titulo);

// Adiciona o subtítulo ao corpo da página
body.appendChild(subtitulo);

// Adiciona o contêiner ao corpo da página
body.appendChild(container);