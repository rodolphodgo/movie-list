let usuarios = []

if (localStorage.getItem('usuarios')){
    usuarios = JSON.parse(localStorage.getItem('usuarios'))
}

function logar() {
    let salvaNome = document.getElementById('nome').value
    let salvaSenha = document.getElementById('senha').value
    let achou = usuarios.filter((elemento)=>{
        return elemento.nome === salvaNome && elemento.salvaSenha === salvaSenha
    })

    console.log(achou)
    if(achou.length>0){
        alert("Usuario logado com sucesso")
    }else{
        alert("Usuario não logado")
    }
}
