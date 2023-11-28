/* Comunicação assíncrona (AJAX) para carregamento de dados usando fetch/then/catch */

const apiUrl = `https://jsonplaceholder.typicode.com/users/3`;

// Conecte/ Acesse
fetch(apiUrl)

// ... e então capyure a resposta da api no formato json
.then(resposta => resposta.json())

// ... e então capture os dados contidos na resposta
.then(dados => console.log(dados))

// em caso de erro ("erros no geral, rede, acesso, json,") capture o erro
.catch(error => {
    console.error("erro na operação: "+error.message)
})