let usuarios = [];

if (localStorage.getItem('usuarios')) {
  usuarios = JSON.parse(localStorage.getItem('usuarios'));
}


// para formatar o cpf

function formatarCPF(campo) {
  let valor = campo.value;

  valor = valor.replace(/\D/g, '');
  valor = valor.substring(0, 11);

  if (valor.length > 9) {
    valor = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  } else if (valor.length > 6) {
    valor = valor.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
  } else if (valor.length > 3) {
    valor = valor.replace(/(\d{3})(\d{1,3})/, '$1.$2');
  }

  campo.value = valor;
}




function cadastrar() {
  let nome = document.getElementById('nome').value;
  let senha = document.getElementById('senha').value;
  let email = document.getElementById('email').value;
  let cpf = document.getElementById('cpf').value;
  let cep = document.getElementById('cep').value;
  let rua = document.getElementById('rua').value;
  let numero = document.getElementById('numero').value;
  let complemento = document.getElementById('complemento').value;
  let bairro = document.getElementById('bairro').value;
  let cidade = document.getElementById('cidade').value;
  let estado = document.getElementById('estado').value;

  if (!nome || !senha || !email || !cpf || !cep || !rua || !numero || !bairro || !cidade || !estado) {
    alert('Por favor, preencha todos os campos!');
    return;
  }
  const novoUsuario = {
      nome: nome,
      senha: senha,
      email: email,
      cpf: cpf,
      endereco: {
      cep: cep,
      rua: rua,
      numero: numero,
      complemento: complemento,
      bairro: bairro,
      cidade: cidade,
      estado: estado
    },
      filmes: [],
      logado: false,
  };

  usuarios.push(novoUsuario);
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  console.log(usuarios);

  document.getElementById('nome').value = '';
  document.getElementById('senha').value = '';
  document.getElementById('email').value = '';
  document.getElementById('cpf').value = '';
  document.getElementById('cep').value = '';
  document.getElementById('rua').value = '';
  document.getElementById('numero').value = '';
  document.getElementById('complemento').value = '';
  document.getElementById('bairro').value = '';
  document.getElementById('cidade').value = '';
  document.getElementById('estado').value = '';


  console.log(usuarios)

  window.location.href = 'login.html';
}

function buscarEndereco() {
  const cep = document.getElementById('cep').value.replace(/\D/g, ''); // Remove caracteres não numéricos
  if (cep.length !== 8) {
    alert('CEP inválido!');
    return;
  }

  const url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.erro) {
        alert('CEP não encontrado!');
        document.getElementById('rua').value = '';
        document.getElementById('bairro').value = '';
        document.getElementById('cidade').value = '';
        document.getElementById('estado').value = '';
      } else {
        document.getElementById('rua').value = data.logradouro;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('cidade').value = data.localidade;
        document.getElementById('estado').value = data.uf;
      }
    })
    .catch(error => {
      console.error('Erro ao buscar o CEP:', error);
      alert('Ocorreu um erro ao buscar o CEP.');
    });
}