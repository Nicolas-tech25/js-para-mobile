const apiUrl = `https://jsonplaceholder.typicode.com/photos`;

async function acessaAPI(){
    try {
        const resposta = await fetch(apiUrl);

        if(!resposta.ok){
            throw new Error(`erro na requisição: ${resposta.status} - ${resposta.statusText}`);
        }

        const dados = await resposta.json();
        console.log(dados);

    } catch (error) {
        console.error("Erro: "+error.message);
    }
}

acessaAPI();

/* =================================== */

  document.addEventListener(function () {
    const usuarios = document.getElementById('usuarios');

        for (const usuario of usuarios) {
          const listaItem = document.createElement('li');
          listaItem.innerHTML = `Nome: ${usuario.name}
                                 E-mail: ${usuario.email}
                                 Website: ${usuario.website}`;

          usuarios.appendChild(listaItem);
        }
      })