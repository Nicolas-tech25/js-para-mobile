document.addEventListener('DOMContentLoaded', function () {
  const usuariosElement = document.getElementById('usuarios');

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(resposta => resposta.json())
    .then(usuarios => {

      for (const usuario of usuarios) {
        const item = document.createElement('li');
        item.innerHTML = `<b>Nome:</b> ${usuario.name} <br>
                          <b>E-mail:</b> ${usuario.email} <br>
                          <b>Website:</b> ${usuario.website}`;

         usuariosElement.appendChild(item);
      }
    })
});

/* Outra forma: */

const botao = document.querySelector("#carregar");
const divUsuarios = document.querySelector("#lista-de-usuarios");

botao.addEventListener("click", async function(){
    try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!resposta.ok){
            throw new Error(resposta.status);
        }
        const dados = await resposta.json();
        
        if(divUsuarios.innerHTML == ""){
            dados.map( usuario => {
                let secao = document.createElement("section");
                secao.innerHTML = `
                    <h2>${usuario.name}</h2>
                    <p>${usuario.email}</p>
                    <p>${usuario.website}</p>
                    <hr>
                `;
                divUsuarios.appendChild(secao);
            } );            
        }

    } catch (error) {
        console.error(error.message);
    }
});