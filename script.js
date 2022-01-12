const button = document.getElementById('buttonHeader');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const checkBox = document.getElementById('agreement');
const envio = document.getElementById('submit-btn');

function headerForm() {
  const confEmail = email.value;
  const confSenha = senha.value;
  if (confEmail === 'tryber@teste.com' && confSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
function btnCheck() {
  envio.disabled = !envio.disabled;
}

envio.disabled = true;

checkBox.addEventListener('click', btnCheck);
button.addEventListener('click', headerForm);
