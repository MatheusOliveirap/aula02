const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calcularDesconto(nome, sexo, valorCompra) {
  let desconto = 0;

  if (sexo.toLowerCase() === "feminino") {
    desconto = 0.13; // 13% de desconto para mulheres
  } else if (sexo.toLowerCase() === "masculino") {
    desconto = 0.05; // 5% de desconto para homens
  } else {
    console.log("Sexo inválido.");
    return;
  }

  let valorComDesconto = valorCompra - valorCompra * desconto;

  console.log(`Cliente: ${nome}`);
  console.log(`Sexo: ${sexo}`);
  console.log(`Valor das compras: R$${valorCompra.toFixed(2)}`);
  console.log(`Desconto aplicado: ${desconto * 100}%`);
  console.log(`Valor com desconto: R$${valorComDesconto.toFixed(2)}`);
}

rl.question("Digite seu nome: ", (nome) => {
  rl.question("Digite seu sexo (masculino ou feminino): ", (sexo) => {
    rl.question("Digite o valor das suas compras (em R$): ", (valorCompra) => {
      let valorCompraNum = parseFloat(valorCompra);

      calcularDesconto(nome, sexo, valorCompraNum);

      rl.close();
    });
  });
});
