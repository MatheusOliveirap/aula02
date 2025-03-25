//5. Faça um programa que leia as duas notas de um aluno em uma matéria e mostre na tela a sua média na disciplina.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite a primeira nota do aluno: ", (n1) =>
  rl.question("Digite a segunda nota do aluno: ", (n2) => {
    let soma;
    soma = parseInt(n1) + parseInt(n2);
    let media;
    media = soma / 2;

    console.log(`A media do aluno é: ${media}`);

    rl.close();
  })
);
