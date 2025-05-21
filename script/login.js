let usuarios = []

if (localStorage.getItem('usuarios')){
    usuarios = JSON.parse(localStorage.getItem('usuarios'))
}

function logar() {
    let salvaNome = document.getElementById('nome').value
    let salvaSenha = document.getElementById('senha').value
    let achou = usuarios.filter((elemento)=>{
        return elemento.nome === salvaNome && elemento.senha === salvaSenha

    })

    console.log(achou)
    if(achou.length>0){
        window.location.href = "perfil.html";
    }else{
        alert("Usuario não logado")
    }
}
