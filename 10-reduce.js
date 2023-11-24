import cursos from "./modulos/cursos.js"
/* Comentário */
const valores = [10,5,50,200,1000];
const total = valores.reduce((acumulador, valor ) => {
    return acumulador + valor
}, 0);

console.log(valores);
console.log(total);

// Sem reduce
let acumuladora1 = 0;
for( let i= 0; i < valores.length; i++){
    acumuladora1 += valores[i];
}

console.log(acumuladora1);
// Sem reduce com for/of
let acumuladora2 = 0;
for( let valor of valores){
    acumuladora2 += valor;
}

console.log(acumuladora2);

console.log("-----------------");

/*  Exercicio */
// faça a soma dos precos de todos os cursos
const soma = cursos.reduce((acumulador, curso) => { 
    return acumulador + curso.preco;
  }, 0);
  
console.log(soma);
