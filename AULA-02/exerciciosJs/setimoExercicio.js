//7. Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$) e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$5,60.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Digite o valor que voçê possue em sua carteira em R$: ",
  (reais) => {
    let dolar = 5.6;

    console.log(`Voçê poderá comprar ${reais / dolar}`);

    rl.close();
  }
);
