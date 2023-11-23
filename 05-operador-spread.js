/* ...spread -> espalhar
Copiar elementos/dados de um array/objeto
para dentro de outro array/objeto. */

const bandas = ["pink Floyd", "Rush","Yes"];
const maisBandas = [...bandas,"Slayer", "Nightwish"];

console.log(bandas);
console.log(maisBandas);

//Spread com objetos
const cliente = {
    nome: "Seu madruga",
    cidade: "Acapulco",
    idade: 55,
};
const novosDados = {
    ...cliente,
    estado: "Sp",
    cidade: "123xyz",
    total: 5000.00,
};
console.log(novosDados);