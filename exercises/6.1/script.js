window.onload = function () {
  selectEstados();
}

const btnEnviar = document.getElementById('enviar');

const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const inputCPF = document.getElementById('cpf');
const inputEndereco = document.getElementById('endereco');
const inputCidade = document.getElementById('cidade');
const estado = document.getElementById('estado');
const tipoMoradiaCasa = document.getElementById('casa');
const tipoMoradiaApartamento = document.getElementById('apartamento');
const resumoDoCurriculo = document.getElementById('resumo-curriculo');
const cargo = document.getElementById('cargo');
const descricaoCargo = document.getElementById('descricao-cargo');
const dataInicio = document.getElementById('data-de-inicio');
const form = document.getElementById('form');

const estadosBrasil = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];
const siglasBrasil = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];

function selectEstados() {
  for (let i = 0; i < siglasBrasil.length; i += 1) {
    let option = document.createElement('option');
    option.value = siglasBrasil[i];
    option.innerHTML = estadosBrasil[i];
    estado.appendChild(option);
  }
}

// Validações

function validarNome() {
  if (inputNome.value === "") {
    alert("O Campo Nome é Obrigatório!");
  } else {
    form.submit();
  }
}

function validaEmail() {
  if (inputEmail.value === "") {
    alert("O Campo Email é Obrigatório!");
  }
}

function validaCPF() {
  if (inputCPF.value === "") {
    alert("O Campo CPF é Obrigatório!");
  } else {
    form.submit();
  }
}

function validaEndereco() {
  if (inputEndereco.value === "") {
    alert("O Campo Endereço é Obrigatório!");
  } else {
    form.submit();
  }
}

function validaCidade() {
  if (inputCidade.value === "") {
    alert("O Campo Cidade é Obrigatório!");
  } else {
    form.submit();
  }
}

function validaEstado() {
  if (estado.value === "") {
    alert("O Campo Estado é Obrigatório!");
  } else {
    form.submit();
  }
}

function validaResidencia() {
  if (!(tipoMoradiaCasa.checked) && !(tipoMoradiaApartamento.checked)) {
    alert("Tipo Moradia Não Marcado");
  } else {
    form.submit();
  }
}

function validaResumoCurriculo() {
  if (resumoDoCurriculo.value === "") {
    alert("Resumo Não Preenchido");
  } else {
    form.submit();
  }
}

function validaCargo() {
  if (cargo.value === "") {
    alert("Cargo Não Preenchido");
  } else {
    form.submit();
  }
}

function validaDescricaoCargo() {
  if (descricaoCargo.value === "") {
    alert("Descrição do Cargo Não Preenchido");
  } else {
    form.submit();
  }
}

function validaDataInicio() {
  let vectData = [];
  vectData = dataInicio.value.split("/");
  if (vectData[0] < 0 || vectData[0] > 31) {
    alert("Dia inválido");
  } else if (vectData[1] < 0 || vectData[1] > 12) {
    alert("Mês inválida");
  } else if (vectData[2] < 0) {
    alert("Ano inválida");
  } else {
    form.submit();
  }
}

function submitForm(event) {
  event.preventDefault();
  validarNome();
  validaEmail();
  validaCPF();
  validaEndereco();
  validaCidade();
  validaEstado();
  validaResidencia();
  validaResumoCurriculo();
  validaCargo();
  validaDescricaoCargo();
  validaDataInicio();
}

btnEnviar.addEventListener('click', submitForm);