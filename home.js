function mostrarNome(nome) {
  return nome;
}

// Função para descobrir se o número é ímpar ou par.
function parImpar(num) {
  if (num % 2 === 0) {
    return `o número ${num} é PAR`;
  } else {
    return `o número ${num} é ÍMPAR`;
  }
}
console.log(parImpar(258));
