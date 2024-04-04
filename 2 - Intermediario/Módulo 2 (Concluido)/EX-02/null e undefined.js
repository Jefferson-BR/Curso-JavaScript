// Içamento acontecendo abaixo
console.log(nome, sobrenome);

var nome = 'Jefferson'; // Declaração de variável 'nome'
var sobrenome = null; // Declaração de variável 'sobrenome' com valor nulo

console.log(nome, sobrenome); // Imprime 'Jefferson null'

sobrenome = 'Barbosa'; // Reatribuição da variável 'sobrenome' com valor 'Barbosa'

console.log(nome, sobrenome); // Imprime 'Jefferson Barbosa'

/*

O içamento (hoisting) é um comportamento em JavaScript onde as declarações de variáveis são "elevadas" para o topo do escopo em que estão definidas durante a fase de compilação do código. Isso significa que, independentemente de onde as declarações de variáveis são feitas no código, elas são processadas antes da execução real do código.

É importante notar que o içamento afeta apenas a declaração de variáveis (var), não as atribuições de valores. Ou seja, apenas a declaração da variável é movida para o topo, não a inicialização com valor.

Portanto, ao acessar uma variável antes de ela ser declarada e inicializada, seu valor será 'undefined', não um erro.

*/