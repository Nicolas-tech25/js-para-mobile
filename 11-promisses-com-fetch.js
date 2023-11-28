/* Comunicação assíncrona (AJAX) para carregamento de dados usando fetch/then/catch */

const apiUrl = `https://jsonplaceholder.typicode.com/users/3`;

function acessaAPI(){

// Conecte/ Acesse
fetch(apiUrl)

// ... e então capture a resposta da api no formato json
.then(resposta => {
    /* Se a resposta de requisição não for bem-sucedida (por exemplo, se não houver registros, ou se der erro no próprio server [500]) */
    if(!resposta.ok){
        throw new error(
            `Erro de requisição: ${resposta.status} - ${resposta.statusText}`
        )
    }
    return resposta.json();
})

// ... e então capture os dados contidos na resposta
.then(dados => console.log(dados))

// em caso de erro ("erros no geral, rede, acesso, json,") capture o erro
.catch(error => {
    console.error("erro na operação: "+error.message)
})
}
acessaAPI();