/* Formas tradicionais */

/*
sintaxe anonima acossiada a variável/constante 
obs: cuidado com a ordem, nesta sintaxe a função primeiro deve ser declarada e depois executada
*/
const exemplo1 = function(){
    console.log("Função anônima!");
};

exemplo1();

/* sentaxe declarada/nomeada */
function exemplo2(){
    console.log("Função nomeada!");
}
exemplo2();

/* Exercício */

valor1 = 10;
valor2 = 20;

function exercicio1(valor1, valor2) {
    return valor1 - valor2;
}

let resultado1 = exercicio1(10,5);
let resultado2 = exercicio1(120,66);

console.log(resultado1);
console.log(resultado2);

/* Sintaxe de arrow function */
const exemplo3 = () => {
console.log("arrow function");
};

exemplo3();

// const saudacao = (cliente) => {
//     console.log("Olá " + cliente);
// }

// Omitir os parênteses do parametro (Somente qubado for 1)
// const saudacao = cliente => {
//     console.log("Olá " + cliente);
// }

// Omitir {} (SOMENTE QUANDO  FOR UMA ÚNICA INSTRUÇÃO)
const saudacao = cliente => console.log("Olá "+cliente);
saudacao("Parceiro");
saudacao("Fulano");

const calculaMetade = (valor) => {
    return valor / 2;
};

let resultadoA = calculaMetade(100);
let resultadoB = calculaMetade(666);

console.log(resultadoA);
console.log(resultadoB);