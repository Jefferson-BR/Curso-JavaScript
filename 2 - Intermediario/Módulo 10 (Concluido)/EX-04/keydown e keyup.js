// Adiciona um ouvinte de evento para o evento de pressionar uma tecla no documento
document.addEventListener("keydown", function(event){
    // Verifica se a tecla pressionada é a tecla "Enter"
    if(event.key === "Enter"){
        // Se a tecla pressionada for "Enter", exibe uma mensagem no console
        console.log("Tecla Enter apertada!");
    }
});

// Adiciona um ouvinte de evento para o evento de soltar uma tecla no documento
document.addEventListener("keyup", function(e){
    // Verifica se a tecla solta é a tecla "Enter"
    if(e.key === "Enter"){
        // Se a tecla solta for "Enter", exibe uma mensagem no console
        console.log("Tecla Enter foi solta!");
    }
});
