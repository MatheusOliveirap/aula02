const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function verificarTriangulo(a, b, c) {
  if (a < b + c && b < a + c && c < a + b) {
    console.log("É possível formar um triângulo com esses segmentos de reta.");
  } else {
    console.log(
      "Não é possível formar um triângulo com esses segmentos de reta."
    );
  }
}

rl.question(
  "Digite o comprimento do primeiro segmento de reta (em cm): ",
  (ladoA) => {
    rl.question(
      "Digite o comprimento do segundo segmento de reta (em cm): ",
      (ladoB) => {
        rl.question(
          "Digite o comprimento do terceiro segmento de reta (em cm): ",
          (ladoC) => {
            let ladoANum = parseFloat(ladoA);
            let ladoBNum = parseFloat(ladoB);
            let ladoCNum = parseFloat(ladoC);

            verificarTriangulo(ladoANum, ladoBNum, ladoCNum);

            rl.close();
          }
        );
      }
    );
  }
);
