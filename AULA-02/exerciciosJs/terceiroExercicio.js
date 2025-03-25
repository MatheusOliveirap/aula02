//3. Faça um programa que leia o nome do funcionário e seu salário e mostre uma mensagem como a do exemplo: O funcionário Lucas recebe R$2000,00 por mês.
//

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// pedindo para que o usuário informe seu nome e captura o dado
rl.question("Escreva seu nome: ", (nome) =>
  rl.question("Escreva seu salario: ", (salario) => {
    console.log(`Olá, ${nome}, seu salario é ${salario}!`);

    rl.close();
  })
);
