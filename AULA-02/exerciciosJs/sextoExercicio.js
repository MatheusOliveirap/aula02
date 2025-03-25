//6. Faça um programa que leia um número inteiro e mostre o seu antecessor e seu sucessor.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o numero: ", (n1) => {
  let antecessor;
  let sucessor;

  antecessor = parseInt(n1 - 1);
  sucessor = parseInt(n1) + 1;

  console.log(
    `O numero que voce digitou foi ${n1}, seu antecessor é ${antecessor} e seu sucessor é ${sucessor}`
  );

  rl.close();
});
