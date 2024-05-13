// Esta função é executada quando o DOM é completamente carregado
window.onload = function(){
    console.log("Carregamento do DOM");
    
    // Seleciona o elemento com o id 'title' e o armazena na variável 'title'
    var title = document.querySelector("#title");
    
    // Exibe no console o elemento selecionado
    console.log(title);
}

// Esta parte do código é executada após o carregamento do DOM
console.log("Carregamento depois do DOM");

// Seleciona o elemento com o id 'title' e o armazena na variável 'title_2'
var title_2 = document.querySelector("#title");

// Exibe no console o elemento selecionado
console.log(title_2);

