const button = document.getElementById('buttonHeader');
const email = document.getElementById('email');
const senha = document.getElementById('senha');

function headerForm() {
  const confEmail = email.value;
  const confSenha = senha.value;
  if (confEmail === 'tryber@teste.com' && confSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

button.addEventListener('click', headerForm);
