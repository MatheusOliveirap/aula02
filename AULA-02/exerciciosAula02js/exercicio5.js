const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calcularPrecoPassagem(distancia) {
  let precoPorKm;

  if (distancia <= 200) {
    precoPorKm = 0.5;
  } else {
    precoPorKm = 0.45;
  }

  let precoTotal = distancia * precoPorKm;

  console.log(`Distância desejada: ${distancia} Km`);
  console.log(`Preço por Km: R$${precoPorKm.toFixed(2)}`);
  console.log(`O preço total da passagem é: R$${precoTotal.toFixed(2)}`);
}

rl.question(
  "Digite a distância que você deseja percorrer (em Km): ",
  (distancia) => {
    let distanciaNum = parseFloat(distancia);

    calcularPrecoPassagem(distanciaNum);

    rl.close();
  }
);
