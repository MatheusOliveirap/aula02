//10. Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o seu novo salário, com 15% de aumento.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite seu salario: ", (salario) => {
  let novoSalario = salario * 1.15;
  console.log(`Olá, seu novo salario é ${novoSalario}!`);

  rl.close();
});
