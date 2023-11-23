/* Destructuring 
Existir os dados de array e objetos para variaveis constand
*/

const alunas = ["Tanaka","Zimbo","Melissa"];
const [tanaka,zimbo,melissa] = alunas;

console.log(tanaka);
console.log(zimbo);
console.log(melissa);

console.log("-----------");

const unidades = ["Penha", "Tatuapé","Itaquera","São Miguel"];
const [penha,tatuape,,smp] = unidades;

console.log(penha);
console.log(tatuape);
console.log(smp);

console.log("-----------");

const [tesla,eistein,newton] = ["Tesla", "Eistein","Newton"];
console.log(tesla);
console.log(eistein);
console.log(newton);

console.log("-----------");

const recursos = [
    ["Notebook","Tv led", "Luva de box"],
    (texto) => texto.toUpperCase()

];
console.log(recursos); // array completo

// Destructuring
const [produtos,converter] = recursos;

// Acessando através da constante que foi gerada pelo destructuring
console.log(produtos[1]); // Tv led
for(const produto of produtos){
    console.log("Produto: "+produto);
}

console.log(converter("Nicolas"));
console.log(converter("Geladeira"));
console.log(converter(produtos[2]));

console.log("-----------");

// Destructuring em objetos
const pessoa = {
    nome: "André",
    idade: 19,
    bairro: "Penha",
    situacao: "critica"
};
const { nome, idade, bairro, situacao } = pessoa;

console.log(`O aluno ${nome} está em situação ${situacao} no curso.`);
console.log(`Mora na ${bairro} e mesmo assim se atrasa (T_T).`);

// Criando apelido para a propriedade codigo
const { codigo: pedido , cursos, preco } = {codigo: "123abc", cursos:["figma","node.js"], preco: 1000}

console.log(pedido); // pedido é um apelido
console.log(cursos);
console.log(preco);

console.log("-----------");

// Destructing para parametros de funcao

function exibirDados({titulo,ano}){
    console.log(`Filme: ${titulo} - ano lançamento: ${ano}`);
}

const filme1 = {
    titulo: "Hellraiser",
    ano: 1987
};

const filme2 = {
    titulo: "Puppet Master",
    ano: 1989
};
exibirDados(filme1);
exibirDados(filme2);