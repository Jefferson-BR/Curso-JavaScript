// Define uma variável 'x' com valor inicial 0
var x = 0;

// Define um temporizador que executará a função de callback após 1500 milissegundos (ou 1.5 segundos)
var myTimer = setTimeout(function(){
    console.log(`O Valor de X é igual a: ${x}`); // Imprime o valor de 'x' após 1.5 segundos
}, 1500);

// Atualiza o valor de 'x' para 5
x = 5;

// Verifica se 'x' é maior que 0
if(x > 0){
    clearTimeout(myTimer); // Limpa o temporizador 'myTimer' se 'x' for maior que 0
    console.log(`O X não tem mais o valor 0`); // Imprime que 'x' não é mais 0
}

// Define um intervalo que executará a função de callback a cada 1000 milissegundos (ou 1 segundo)
var myInterval = setInterval(function(){
    console.log("Imprimindo o setInterval!"); // Imprime a mensagem a cada segundo
}, 1000);

// Define um temporizador que interromperá o intervalo após 5000 milissegundos (ou 5 segundos)
setTimeout(function(){
    clearInterval(myInterval); // Limpa o intervalo 'myInterval' após 5 segundos
    console.log("Interrompendo a função do setInterval"); // Imprime que a função do setInterval foi interrompida
}, 5000);