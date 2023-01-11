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
        .then(texto => texto.replace(/["]/g, '')) 
        })
        .catch(err => console.log(err))})

const post = document.getElementById('post');
const dados_post = document.getElementById('dados_post');

function fazPost(url, body) {
    console.log("Body=",body);
    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(JSON.stringify(body));

    request.onload = function() {
        console.log(this.responseText)
        
        return request.responseText;
    }
}


function cadastraCliente(){
    event.preventDefault();
    
    let url = `https://teste-dados-jeff-default-rtdb.firebaseio.com/usuarios.json?auth=sJpzoQyPT7cgiVYPu07LEwtG7HQGJqgKPKlwHIfn`; 
    
    let email = document.getElementById('ent-email').value;
    let nome = document.getElementById('ent-nome').value;
    let senha = document.getElementById('ent-senha').value;


     body = {
        "email" : email,
        "nome" : nome,
        "senha" : senha,
        "id" : ''
    }

    alert(nome + ", seu cadastro foi salvo!")
    
    // email = '';
    // nome = '';
    // senha = '';

    console.log(nome);

    fazPost(url, body)

    

}