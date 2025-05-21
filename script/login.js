let usuarios = [];

if (localStorage.getItem('usuarios')) {
    usuarios = JSON.parse(localStorage.getItem('usuarios'));
}

function logar() {
    let salvaNome = document.getElementById('nome').value;
    let salvaSenha = document.getElementById('senha').value;

    let achou = usuarios.filter((elemento) => {
        return elemento.nome === salvaNome && elemento.senha === salvaSenha;
    });

    console.log(achou);

    if (achou.length > 0) {
        const index = usuarios.findIndex(u => u.nome === salvaNome && u.senha === salvaSenha);
        if (index !== -1) {
            usuarios[index].logado = true;
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
        }

        window.location.href = "perfil.html";
    } else {
        alert("Usuário ou Senha incorretos");
    }
}



function sair() {
    const index = usuarios.findIndex(u => u.logado === true);
    if (index !== -1) {
        usuarios[index].logado = false;
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }

    window.location.href = "login.html";
}
