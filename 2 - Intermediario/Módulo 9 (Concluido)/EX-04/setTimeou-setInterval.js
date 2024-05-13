// Define um temporizador que executará a função de callback após 2000 milissegundos (ou 2 segundos)
setTimeout(function(){
    console.log("Teste do setTimeout!"); // Imprime a mensagem "Teste do setTimeout!" no console após 2 segundos
}, 2000);

// Define um temporizador que executará a função de callback repetidamente a cada 5000 milissegundos (ou 5 segundos)
setInterval(function(){
    console.log("Teste do setInterval!"); // Imprime a mensagem "Teste do setInterval!" no console a cada 5 segundos
}, 5000);
