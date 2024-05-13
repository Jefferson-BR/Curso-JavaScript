// Seleciona o elemento com o id 'title' e o armazena na variável 'title'
var title = document.querySelector("#title");

// Adiciona um ouvinte de evento para o evento de passar o mouse sobre o título
title.addEventListener("mouseover", function() {
  // Quando o mouse está sobre o título, muda o fundo para amarelo
  this.style.backgroundColor = "yellow";
});

// Adiciona um ouvinte de evento para o evento de retirar o mouse de cima do título
title.addEventListener("mouseout", function() {
  // Quando o mouse sai do título, restaura o fundo para branco
  this.style.backgroundColor = "white";
});

// Seleciona o elemento com a classe 'subtitle' e o armazena na variável 'subtitle'
var subtitle = document.querySelector(".subtitle");

// Adiciona um ouvinte de evento para o evento de passar o mouse sobre o subtítulo
subtitle.addEventListener("mouseover", function() {
  // Quando o mouse está sobre o subtítulo, remove a classe 'hide' do elemento com o id 'legenda'
  var legenda = document.querySelector("#legenda");
  legenda.classList.remove("hide");
});

// Adiciona um ouvinte de evento para o evento de retirar o mouse de cima do subtítulo
subtitle.addEventListener("mouseout", function() {
  // Quando o mouse sai do subtítulo, adiciona a classe 'hide' ao elemento com o id 'legenda'
  var legenda = document.querySelector("#legenda");
  legenda.classList.add("hide");
});