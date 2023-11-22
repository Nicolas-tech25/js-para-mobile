/* import pessoa from "./modulos/dados.js"; */
import {livro, pessoa, alunos as reprovados} from "./modulos/dados.js";
import alunos from "./modulos/alunos.js";
// import {
//     converteMaiusculas,
//     converteMinusculas,
//     formataMoeda
// } from "./modulos/funcoes.js";

import * as minhasFuncoes from "./modulos/funcoes.js";

console.log(reprovados);
console.log(alunos );

console.log("---------");
console.log(pessoa);
console.log(pessoa.nome);

for( const prop in pessoa){
    console.log(pessoa[prop]);
}
console.log("---------");
console.log(livro.titulo);
console.log(livro.titulo);

console.log(minhasFuncoes.converteMaiusculas(reprovados[0]));
console.log(minhasFuncoes.converteMinusculas(alunos[0]));

let preco1 = 1200.88;
let preco2 = 100000000.88;
let preco3 = 500.8432;

console.log(minhasFuncoes.formataMoeda(preco1));
console.log(minhasFuncoes.formataMoeda(preco2));
console.log(minhasFuncoes.formataMoeda(preco3));