window.onload = function(){
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

const estadosBrasil = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];
const siglasBrasil = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];



function submitForm(event){
    event.preventDefault();
    console.log(("oi"));
    // validarNome();
    // validaEstado();
    validaResidencia();
}

function selectEstados(){
    for(let i = 0; i < siglasBrasil.length; i += 1){
        let option = document.createElement('option');
        option.value = siglasBrasil[i];
        option.innerHTML = estadosBrasil[i];
        estado.appendChild(option);
    }
}

// Validações

function validarNome(){
    // let limite = 39;
    if(inputNome.value === ""){
        alert("O Campo Nome é Obrigatório!");
    }
    // if(inputNome.value.length > limite ){
    //     console.log("passou do limite");
    // }
}

function validaEmail(){
    if(inputEmail.value === ""){
        alert("O Campo Email é Obrigatório!");
    }
}

function validaCPF(){
    if(inputCPF.value === ""){
        alert("O Campo CPF é Obrigatório!");
    }
}

function validaEndereco(){
    if(inputEndereco.value === ""){
        alert("O Campo Endereço é Obrigatório!");
    }
}

function validaCidade(){
    if(inputCidade.value === ""){
        alert("O Campo Cidade é Obrigatório!");
    }
}

function validaEstado(){
    if(estado.value === ""){
        alert("O Campo Estado é Obrigatório!");
    }
}

function validaResidencia(){
    if(!(tipoMoradiaCasa.checked) && !(tipoMoradiaApartamento.checked)){
        alert("Tipo Moradia Não Marcado");
    }
}


document.addEventListener('click', function(event){
   
});

btnEnviar.addEventListener('click', submitForm);