let usuarios = []

if (localStorage.getItem('usuarios')){
    usuarios = JSON.parse(localStorage.getItem('usuarios'))
}

function cadastrar() {
    let salvaNome = document.getElementById('nome').value
    let salvaSenha = document.getElementById('senha').value
    let usuario = {
        nome: salvaNome,
        senha: salvaSenha
    }
    usuarios.push(usuario)
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    console.log(usuarios)
}