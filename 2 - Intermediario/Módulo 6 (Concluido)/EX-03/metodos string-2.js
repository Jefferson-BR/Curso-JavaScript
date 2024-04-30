let frase = "Texto Que Vai Ser Manipulado";

// toLowerCase: converte todos os caracteres da string para minúsculas.
console.log(frase.toLowerCase()); // Saída: "texto que vai ser manipulado"

// toUpperCase: converte todos os caracteres da string para maiúsculas.
console.log(frase.toUpperCase()); // Saída: "TEXTO QUE VAI SER MANIPULADO"

var nome = "  Jeff  ";

// trim: remove os espaços em branco do início e do fim da string.
var funcao_trim = nome.trim();

console.log(nome); // Saída: "  Jeff  "
console.log(funcao_trim); // Saída: "Jeff"

let texto = "Olá, mundo! Como você está?";
let arrayDePalavras = texto.split(" "); // Dividirá a string em um array de palavras separadas por espaço
console.log(arrayDePalavras); // Output: ["Olá,", "mundo!", "Como", "você", "está?"]

let texto_2 = "Olá, mundo! Como você está?";
let indice = texto_2.lastIndexOf("Como");
console.log(indice); // Output: 15
