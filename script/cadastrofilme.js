let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

function cadastrarFilme() {
    let nome = document.getElementById('nome').value.trim();
    let ano = document.getElementById('ano').value.trim();
    let diretor = document.getElementById('diretor').value.trim();
    let produtor = document.getElementById('produtor').value.trim();
    let estudio = document.getElementById('estudio').value.trim();


    if (!nome || !ano || !diretor || !produtor || !estudio) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

   

    const novoFilme = {
        nome,
        ano,
        diretor,
        produtor,
        estudio
    };

    const usuarioLogado = usuarios.find(user => user.logado === true);

    if (usuarioLogado) {
        usuarioLogado.filmes.push(novoFilme);

        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        document.getElementById('nome').value = '';
        document.getElementById('ano').value = '';
        document.getElementById('diretor').value = '';
        document.getElementById('produtor').value = '';
        document.getElementById('estudio').value = '';

        alert("Filme cadastrado com sucesso!");
        console.log("Filme cadastrado com sucesso!", novoFilme);
    } else {
        alert("Nenhum usuário logado.");
    }
}