// Seleciona o botão com o id 'btn' e o armazena na variável 'button'
var button = document.querySelector("#btn");

// Seleciona o elemento com o id 'title' e o armazena na variável 'title'
var title = document.querySelector("#title");

// Adiciona um ouvinte de evento para o evento de clique no botão
button.addEventListener("click", function() {
    // Exibe uma mensagem no console quando o evento de clique ocorre
    console.log("Evento de click funcionando!");
    
    // Exibe no console o elemento que acionou o evento (neste caso, o botão)
    console.log(this);
    
    // Muda a cor do texto do botão para vermelho quando clicado
    this.style.color = 'red';
});

// Adiciona um ouvinte de evento para o evento de clique duplo no título
title.addEventListener("dblclick", function(){
    // Exibe no console o elemento que acionou o evento (neste caso, o título)
    console.log(this);
    
    // Oculta o título (alterando seu estilo para 'display: none') quando clicado duas vezes
    this.style.display = "none";
});