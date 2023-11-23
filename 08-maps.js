import cursos from "./modulos/cursos.js";

const numeros = [10,20,4,12,66,50];
console.log(numeros);

const numerosDobrados = numeros.map(numero =>numero *2);

console.log(numerosDobrados);
console.log(cursos);

console.log("--------");
// Exemplo 02: gerar um novo array apenas com nome dos cursos
const titulos = cursos.map( (curso)=>{
    return curso.titulo
} );

console.log(titulos);

console.log("--------");

const precos = cursos.map( (curso)=>{
    return curso.preco - (curso.preco * 0.10) 
} );
 
console.log(precos);

// desafio
const cursosBlackFriday = cursos.map(curso => {
    return {...curso, preco: curso.preco - curso.preco * 0.10}
});

console.log(cursosBlackFriday);