const nome = "Chapolin";
const sobrenome = "Colorado";
let idade = 10;
let cidade = "São Paulo";
let estado = "SP"

/* Concatenação traducional usando operador + Meu nome é chapolin colorado tenho 25 anos e moro atualmente na cidade de São Paulo - SP. */
let mensagem1 = "Meu nome é <b class=\"destaque\">"+nome+"</b> "+sobrenome+" tenho 25 anos e moro atualmente na cidade de "+cidade+" - "+estado+".";

console.log(mensagem1);

/* Template string/literal */
let mensagem2 = `Meu nome é ${nome.toUpperCase()} ${sobrenome} ,tenho ${idade} anos e moro atualmente na cidade de ${cidade} - ${estado}. Sou ${ idade >= 18 ?'maior' : 'menor'} de idade.`;

console.log(mensagem2);