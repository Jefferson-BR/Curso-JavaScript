// Array de frutas
var lista_de_frutas = ['Maça', 'Laranja', 'Morango', 'Uva', 'Manga', 'Limão'];

// Cria um elemento de lista não ordenada (ul)
var lista = document.createElement('ul');

// Seleciona o elemento body
var body = document.getElementsByTagName('body');

// Adiciona a lista criada ao corpo do documento
body[0].appendChild(lista);

// Seleciona a lista recém-criada
var lista_2 = document.getElementsByTagName('ul');

// Imprime a lista selecionada
console.log(lista_2[0]);

// Loop para iterar sobre a lista de frutas e criar elementos de lista (li) para cada fruta
for (var i = 0; i < lista_de_frutas.length; i++) {
    // Cria um elemento de lista (li)
    var liFor = document.createElement('li');
    
    // Cria um nó de texto com o nome da fruta atual
    var Texto_lista = document.createTextNode(lista_de_frutas[i]);
    
    // Adiciona o nó de texto ao elemento de lista (li)
    liFor.appendChild(Texto_lista);
    
    // Adiciona o elemento de lista (li) à lista (ul) criada anteriormente
    lista_2[0].appendChild(liFor);
}
