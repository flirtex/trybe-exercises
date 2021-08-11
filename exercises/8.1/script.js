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
