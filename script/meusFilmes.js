let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
const usuarioLogado = usuarios.find(user => user.logado === true);

if (!usuarioLogado) {
  alert("Usuário não logado.");
  window.location.href = "login.html";
}

let filmes = usuarioLogado.filmes || [];

filmes.forEach((filme, indice) => {
  let tr = document.createElement('tr');
  let td1 = document.createElement('td');
  td1.innerText = indice + 1;
  let td2 = document.createElement('td');
  td2.innerText = filme.nome;
  let td3 = document.createElement('td');
  td3.innerText = filme.ano;
  let td4 = document.createElement('td');
  td4.innerText = filme.diretor;
  let td5 = document.createElement('td');
  td5.innerText = filme.produtor;
  let td6 = document.createElement('td');
  td6.innerText = filme.estudio;
  let td7 = document.createElement('td');

  const btnEditar = document.createElement('button');
  btnEditar.innerText = "Editar";

  const btnSalvar = document.createElement('button');
  btnSalvar.innerText = "Salvar";
  btnSalvar.style.display = "none";

  const btnCancelar = document.createElement('button');
  btnCancelar.innerText = "Cancelar";
  btnCancelar.style.display = "none";

  const btnExcluir = document.createElement('button');
  btnExcluir.innerText = "Excluir";


  btnEditar.onclick = () => {
    btnEditar.style.display = "none";
    btnSalvar.style.display = "inline";
    btnCancelar.style.display = "inline";

    td2.innerHTML = `<input value="${filme.nome}" id="nome-${indice}">`;
    td3.innerHTML = `<input value="${filme.ano}" id="ano-${indice}">`;
    td4.innerHTML = `<input value="${filme.diretor}" id="diretor-${indice}">`;
    td5.innerHTML = `<input value="${filme.produtor}" id="produtor-${indice}">`;
    td6.innerHTML = `<input value="${filme.estudio}" id="estudio-${indice}">`;
  };


  btnSalvar.onclick = () => {
    const novoNome = document.getElementById(`nome-${indice}`).value;
    const novoAno = document.getElementById(`ano-${indice}`).value;
    const novoDiretor = document.getElementById(`diretor-${indice}`).value;
    const novoProdutor = document.getElementById(`produtor-${indice}`).value;
    const novoEstudio = document.getElementById(`estudio-${indice}`).value;

    usuarioLogado.filmes[indice] = {
      nome: novoNome,
      ano: novoAno,
      diretor: novoDiretor,
      produtor: novoProdutor,
      estudio: novoEstudio
    };

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    location.reload();
  };


  btnCancelar.onclick = () => {
    location.reload();
  };


  btnExcluir.onclick = () => {
    if (confirm("Tem certeza que deseja excluir este filme?")) {
      usuarioLogado.filmes.splice(indice, 1);
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      location.reload();
    }
  };

  td7.appendChild(btnEditar);
  td7.appendChild(btnSalvar);
  td7.appendChild(btnCancelar);
  td7.appendChild(document.createTextNode(" "));
  td7.appendChild(btnExcluir);

  tr.append(td1, td2, td3, td4, td5, td6, td7);
  document.querySelector('.tabela').appendChild(tr);
});
