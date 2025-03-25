//4. Desenvolva um algoritmo que leia dois números inteiros e mostre o somatório entre eles.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o primeiro numero inteiro: ", (n1) =>
  rl.question("Digite o segundo numero inteiro: ", (n2) => {
    let soma;
    soma = parseInt(n1) + parseInt(n2);

    console.log(`A soma dos numeros é:${soma}`);

    rl.close();
  })
);
