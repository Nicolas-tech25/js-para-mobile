import cursos from "./modulos/cursos.js";
/* filter (filtrar) 
Passa por elementos de um array (usando uma função callback) e retornar valores de acordo com uma ou mais condições gerando um novo array. */

// Exemplo 1
const vendas = [1500, 3000, 1000, 500, 750,5000,2000];
const meta = 1000;
console.log(vendas);
// Gerando um array com os valores que bateram a meta
const vendasAcimaDaMeta = vendas.filter((venda) => {
    return venda >= meta
});

console.log(vendasAcimaDaMeta);

console.log("-------------------------------");

// exemplo 2
const alunos = [
    "Nicolas","Eliel","André","Kaue","Barbosa","Aline","Melissa","Marina","mônica", "Marcelo"
];
console.log(alunos);

const resultados = alunos.filter(aluno => {
    // obs: faz diferença usar Maiúsculas e minusculas.
    // return aluno.startsWith("M") || aluno.startsWith("m")
    return aluno.startsWith("M") && aluno.endsWith("o") // Filtrando alunos que começam com "M" e terminam com "o"
});

console.log(resultados);

console.log("---------------");


/* Filtrando cursos da categoria design */
const cursosDesign = cursos.filter( curso => curso.categoria == "Design");
console.log(cursosDesign);

// Filtrando por cursos que não são da categoria Design
const cursosMenosDesign = cursos.filter(
    curso => curso.categoria != "Design");
console.log(cursosMenosDesign);

console.log("-----------");

/* Exercicio */

const cursosFiltrados = cursos.filter(curso => (curso.categoria === "Front-end" || curso.categoria === "Mobile") && curso.preco > 600 );
  
  console.log(cursosFiltrados);

  console.log("-----------");

  /* Desafio */

  const cursosMob = cursos.filter(curso => curso.categoria === "Mobile");

  console.log(cursosMob);

  const cursosT = cursosMob.map((curso)=>curso.titulo);

  console.log(cursosT);