const pessoa = {
    nome: "Maria",
    idade: 30,
    saudacao() {
    console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    },
    aniversario() {
    this.idade += 1;
    console.log(`Feliz aniversário! Agora eu tenho ${this.idade} anos.`);
    },
};

pessoa.saudacao(); // Output: Olá, meu nome é Maria e eu tenho 30 anos.
pessoa.aniversario(); // Output: Feliz aniversário! Agora eu tenho 31 anos.
pessoa.saudacao(); // Output: Olá, meu nome é Maria e eu tenho 31 anos.

console.log(typeof this)
