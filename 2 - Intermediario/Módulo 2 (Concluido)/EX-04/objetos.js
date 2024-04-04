var dados_do_usuario = {
    nome: ['Jefferson', 'Barbosa'],
    idade: 21,
    profissao: 'Programador',
    contratado: true,
    dispensado: null
}

dados_do_usuario.dispensado = false;

console.log(typeof dados_do_usuario + " " + `${dados_do_usuario.nome[0] + " " + dados_do_usuario.nome[1]} ${dados_do_usuario.idade} ${dados_do_usuario['dispensado']}`);

// Existem 2 formas de acessar objetos pelo JS:
// 1 - Usando o ponto ---> .
// 2 - Usando o colchetes ---> ['']

/*
    Se por acaso uma propriedade tiver mais de um valor dentro dela basta colocar em colchetes e por fim
    especificar qual valor você quer ver, seja ele [0, 1, 2, 3 etc...].
*/