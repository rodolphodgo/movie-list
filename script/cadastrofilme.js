let filmes = [];

if (localStorage.getItem('filmes')) {
    usuarios = JSON.parse(localStorage.getItem('filmes'));
}

function cadastrarFilme() {
    let nome = document.getElementById('nome').value;
    let ano = document.getElementById('ano').value;
    let diretor = document.getElementById('diretor').value;
    let produtor = document.getElementById('produtor').value;
    let estudio = document.getElementById('estudio').value;

    const novoFilme = {
        nome: nome,
        ano: ano,
        diretor: diretor,
        produtor: produtor,
        estudio: estudio,
    };

    filmes.push(novoFilme);
    localStorage.setItem('filmes', JSON.stringify(filmes));
    console.log(filmes);

    document.getElementById('nome').value = '';
    document.getElementById('ano').value = '';
    document.getElementById('diretor').value = '';
    document.getElementById('produtor').value = '';
    document.getElementById('estudio').value = '';
}