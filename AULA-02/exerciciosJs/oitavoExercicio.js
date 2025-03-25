//8. Faça um algoritmo que leia a largura e altura de uma parede e mostre a área a ser pintada e a quantidade de tinta necessária para o serviço, sabendo que cada litro de tinta pinta uma área de 2 metros quadrados.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite a largura da sua parede em metros: ", (largura) =>
  rl.question("Digite a altura da sua parede em metros: ", (altura) => {
    let area = parseInt(largura) * parseInt(altura);

    console.log(`A area total da parede a ser pintada é ${area}`);

    rl.close();
  })
);
