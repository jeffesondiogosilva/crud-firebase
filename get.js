const botao = document.getElementById('botao');
const dados = document.getElementById('dados');

function mostrar_dados(){

    console.log('foi!');
}

botao.addEventListener('click', (e) => {

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch('https://teste-dados-jeff-default-rtdb.firebaseio.com/usuarios.json?auth=sJpzoQyPT7cgiVYPu07LEwtG7HQGJqgKPKlwHIfn', options)
        .then(response => {response.json()
        .then(data => dados.innerHTML = JSON.stringify(data)) //este segundo then está dentro do primeiro then
        // .then(texto => JSON.parse(texto)) // 
        })
        .catch(err => console.log(err))})
