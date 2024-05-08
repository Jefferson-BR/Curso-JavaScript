// Seleciona o elemento com o id "titulo" e armazena-o na variável title
var title = document.querySelector("#titulo");

// Define a classe do elemento title como "testando-classe"
title.setAttribute("class", "testando-classe");

// Seleciona o elemento com o id "btn" e armazena-o na variável button
var button = document.querySelector("#btn");

// Desativa o botão definindo o atributo "disabled" como "disabled"
button.setAttribute("disabled", "disabled");

// Seleciona o elemento com o id "titulo_2" e armazena-o na variável subtitle
var subtitle = document.querySelector("#titulo_2");

// Remove o atributo "id" do elemento subtitle
subtitle.removeAttribute("id");
