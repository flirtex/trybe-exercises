window.onload = function () {
  selectEstados();
}

const btnEnviar = document.getElementById('enviar');
const btnLimpar = document.getElementById('limpar');

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

const main = document.getElementById('main');
const div = document.createElement('div');
const divDadoInvalido = document.createElement('div');

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
    main.appendChild(div);
    let p = document.createElement('p');
    p.innerText = inputNome.value;
    div.appendChild(p);
    form.submit();
  }
}

function validaEmail() {
  if (inputEmail.value === "") {
    alert("O Campo Email é Obrigatório!");
  } else {
    main.appendChild(div);
    let p = document.createElement('p');
    p.innerText = inputEmail.value;
    div.appendChild(p);
    form.submit();
  }
}

function validaCPF() {
  if (inputCPF.value === "") {
    alert("O Campo CPF é Obrigatório!");
  } else {
    main.appendChild(div);
    let p = document.createElement('p');
    p.innerText = inputCPF.value;
    div.appendChild(p);
    form.submit();
  }
}

function validaEndereco() {
  if (inputEndereco.value === "") {
    alert("O Campo Endereço é Obrigatório!");
  } else {
    main.appendChild(div);
    let p = document.createElement('p');
    p.innerText = inputEndereco.value;
    div.appendChild(p);
    form.submit();
  }
}

function validaCidade() {
  if (inputCidade.value === "") {
    alert("O Campo Cidade é Obrigatório!");
  } else {
    main.appendChild(div);
    let p = document.createElement('p');
    p.innerText = inputCidade.value;
    div.appendChild(p);
    form.submit();
  }
}

function validaEstado() {
  if (estado.value === "") {
    alert("O Campo Estado é Obrigatório!");
  } else {
    main.appendChild(div);
    let p = document.createElement('p');
    p.innerText = estado.value;
    div.appendChild(p);
    form.submit();
  }
}

function validaResidencia() {
  if (!(tipoMoradiaCasa.checked) && !(tipoMoradiaApartamento.checked)) {
    alert("Tipo Moradia Não Marcado");
  } else {
    if (tipoMoradiaCasa.checked) {
      main.appendChild(div);
      let p = document.createElement('p');
      p.innerText = tipoMoradiaCasa.value;
      div.appendChild(p);
    } else if (tipoMoradiaApartamento.checked) {
      main.appendChild(div);
      let p = document.createElement('p');
      p.innerText = tipoMoradiaApartamento.value;
      div.appendChild(p);
    }
    form.submit();
  }
}

  function validaResumoCurriculo() {
    if (resumoDoCurriculo.value === "") {
      alert("Resumo Não Preenchido");
    } else {
      main.appendChild(div);
      let p = document.createElement('p');
      p.innerText = resumoDoCurriculo.value;
      div.appendChild(p);
      form.submit();
    }
  }

  function validaCargo() {
    if (cargo.value === "") {
      alert("Cargo Não Preenchido");
    } else {
      main.appendChild(div);
      let p = document.createElement('p');
      p.innerText = cargo.value;
      div.appendChild(p);
      form.submit();
    }
  }

  function validaDescricaoCargo() {
    if (descricaoCargo.value === "") {
      alert("Descrição do Cargo Não Preenchido");
    } else {
      main.appendChild(div);
      let p = document.createElement('p');
      p.innerText = descricaoCargo.value;
      div.appendChild(p);
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
      main.appendChild(div);
      let p = document.createElement('p');
      p.innerText = dataInicio.value;
      div.appendChild(p);
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

  function clearForm(){
    
  }