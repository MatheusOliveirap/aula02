const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function verificarAnoBissexto(ano) {
  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    console.log(`${ano} é um ano bissexto.`);
  } else {
    console.log(`${ano} não é um ano bissexto.`);
  }
}

rl.question("Digite um ano para verificar se é bissexto: ", (ano) => {
  let anoNum = parseInt(ano);

  verificarAnoBissexto(anoNum);

  rl.close();
});
