const button = document.getElementById('buttonHeader');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const checkBox = document.getElementById('agreement');
const envio = document.getElementById('submit-btn');
const textArea = document.getElementById('textarea');
const count = document.getElementById('counter');

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
count.innerText = 500;

function contCarc() {
  const carac = textArea.value;
  const caracNum = carac.length;
  count.innerText = 500 - parseInt(caracNum, 10);
}

envio.disabled = true;

checkBox.addEventListener('click', btnCheck);
button.addEventListener('click', headerForm);
textArea.addEventListener('keyup', contCarc);
