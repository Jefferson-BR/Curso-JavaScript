// Seleciona o elemento com o ID "titulo" e armazena na variável 'title'
var title = document.querySelector('#titulo')

// Seleciona o elemento com a classe CSS "subtitulo" e armazena na variável 'subtitle'
var subtitle = document.querySelector('.subtitulo')

// Altera o conteúdo HTML do elemento 'title' para "Esse titulo principal foi alterado com innerHTML (JS)"
title.innerHTML = "Esse titulo principal foi alterado com innerHTML (JS)"

// Altera o texto do elemento 'subtitle' para "Esse subtitulo foi alterado com textContent (JS)"
subtitle.textContent = "Esse subtitulo foi alterado com textContent (JS)"

// Exibe no console o elemento 'title' após a alteração
console.log(title)

// Exibe no console o elemento 'subtitle' após a alteração
console.log(subtitle)



// Altera o conteúdo HTML do elemento 'title' para "Esse titulo principal foi alterado com innerHTML (JS)"
// 'innerHTML' é frequentemente usado para manipular conteúdo HTML dentro de um elemento. No entanto, tenha cuidado ao usá-lo, pois ele pode resultar na reavaliação de todo o conteúdo HTML interno do elemento.

// Altera o texto do elemento 'subtitle' para "Esse subtitulo foi alterado com textContent (JS)"
// 'textContent' é geralmente a prática recomendada para atualizar o texto de um elemento, pois ele manipula apenas o texto interno do elemento, sem reavaliar ou modificar a estrutura HTML circundante.
