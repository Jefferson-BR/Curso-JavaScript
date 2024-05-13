// Imprime no console o elemento body do documento HTML
console.log(document.body);

// Imprime no console o elemento head do documento HTML
console.log(document.head);

// Imprime no console a URL atual do documento HTML
console.log(document.URL);

// Imprime no console o primeiro link encontrado no documento HTML
console.log(document.links[0]);

// Imprime no console o título atual do documento HTML
console.log(document.title);

// Altera o texto do primeiro link encontrado para "Google"
document.links[0].textContent = "Google";

// Altera o título do documento HTML para "Titulo alterado"
document.title = "Titulo alterado";

// Imprime no console o novo título do documento HTML após a alteração
console.log(document.title);
