let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];


let filmes = [];

usuarios.forEach(user => {
  if (Array.isArray(user.filmes)) {
    user.filmes.forEach(filme => {
      filmes.push(filme);
    });
  }
});


filmes.forEach((elemento, indice) => {
  let tr = document.createElement('tr');

  let td1 = document.createElement('td');
  let td2 = document.createElement('td');
  let td3 = document.createElement('td');
  let td4 = document.createElement('td');
  let td5 = document.createElement('td');
  let td6 = document.createElement('td');

  td1.innerHTML = `${indice + 1}`;
  td2.innerHTML = `${elemento.nome}`;
  td3.innerHTML = `${elemento.ano}`;
  td4.innerHTML = `${elemento.diretor}`;
  td5.innerHTML = `${elemento.produtor}`;
  td6.innerHTML = `${elemento.estudio}`;

  tr.append(td1, td2, td3, td4, td5, td6);
  document.querySelector('.tabela').appendChild(tr);
});
