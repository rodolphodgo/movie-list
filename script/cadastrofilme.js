let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

function cadastrarFilme() {
    let nome = document.getElementById('nome').value;
    let ano = document.getElementById('ano').value;
    let diretor = document.getElementById('diretor').value;
    let produtor = document.getElementById('produtor').value;
    let estudio = document.getElementById('estudio').value;

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

        console.log("Filme cadastrado com sucesso!", novoFilme);
    } else {
        alert("Nenhum usuário logado.");
    }
}
