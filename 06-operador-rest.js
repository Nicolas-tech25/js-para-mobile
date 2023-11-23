/* ...rest operator
Usando o ... como "rest operator"
podemos mesclar uma lista de parâmetros/argumentos para uma função. */

const cientistas = ["tesla","Eisten","Newton","Darwin"];
const artistas = ["Kayblack🐊","DEREK💽","Dfideliz💵","Yunk vino💣"];

const classificar = (...parametro) => {
return parametro.sort();
};

// chamada da função
console.log(classificar(...cientistas)); //spread
console.log(classificar(...artistas)); //spread