// Exercise 1
const newEmployees = () => {
  const employees = {
    id1: pessoaContratada('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: pessoaContratada('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: pessoaContratada('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

function pessoaContratada(nomeCompleto) {
  let dividiNome = nomeCompleto.split(' ');
  let primeiroNome = dividiNome[0];
  let segundoNome = dividiNome[1];
  let emailCompleto = primeiroNome + '_' + segundoNome + '@trybe.com';
  const pessoa = ({
    nome: nomeCompleto,
    email: emailCompleto,
  })
  return pessoa;
}

// Exercise 2
const resultSorteio = (numeroApostado) => {
  let numeroAleatorio = Math.floor(Math.random() * (5 - 1 + 1) + 1);
  if(numeroApostado === numeroAleatorio){
    return 'Parabéns Você Ganhou'
  }
  return 'Tente Novamente';
}

// Exercise 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function conferencia(){
  let contador = 0;
  for(let i = 0; i < RIGHT_ANSWERS.length; i +=1){
    for(let j = 0; j < STUDENT_ANSWERS.length; j +=1){
      if(RIGHT_ANSWERS[i] === STUDENT_ANSWERS[j]){
        contador += 1;
        i += 1;
      }else if(RIGHT_ANSWERS[i] !== STUDENT_ANSWERS[j] && STUDENT_ANSWERS[j] !== 'N.A'){
        contador -= 0.5;
        i += 1;
      }else{
        i += 1;
      }
     
    }
  }
  return contador;
}

const hofConferencia = (gabarito, respostasPessoaEstudante, checkRespostas) => {
  let conf = checkRespostas();
  return conf;
 }

console.log(hofConferencia(RIGHT_ANSWERS, STUDENT_ANSWERS, conferencia));
