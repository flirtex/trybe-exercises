const btnEnviar = document.getElementById('enviar');
const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const inputCPF = document.getElementById('cpf');
const endereco = document.getElementById('endereco');
const cidade = document.getElementById('cidade');
const estado = document.getElementById('estado');
const tipoMoradiaCasa = document.getElementById('casa');
const tipoMoradiaApartamento = document.getElementById('apartamento');

function submitForm(event){
    event.preventDefault();
}

btnEnviar.addEventListener('click', submitForm);