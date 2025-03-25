const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Qual a velocidade do carro (em km/h)? ", (velocidade) => {
  let velocidadeNum = parseFloat(velocidade);

  if (velocidadeNum > 80) {
    let excesso = velocidadeNum - 80;
    let multa = excesso * 5; // R$5 por km/h acima do limite
    console.log(`Você foi multado! O valor da multa é R$${multa.toFixed(2)}.`);
  } else {
    console.log("Você está dentro do limite de velocidade.");
  }

  rl.close();
});
