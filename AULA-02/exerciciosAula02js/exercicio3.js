const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function verificarAlistamento(anoNascimento) {
  const anoAtual = new Date().getFullYear();

  const idade = anoAtual - anoNascimento;

  if (idade < 18) {
    const anosFaltando = 18 - idade;
    console.log(
      `Você tem ${idade} anos. Faltam ${anosFaltando} ano(s) para o alistamento.`
    );
  } else if (idade === 18) {
    console.log("Você tem 18 anos. O ano do seu alistamento é agora!");
  } else {
    const anosPassados = idade - 18;
    console.log(
      `Você tem ${idade} anos. Já se passaram ${anosPassados} ano(s) desde o seu alistamento.`
    );
  }
}

rl.question("Digite o seu ano de nascimento: ", (anoNascimento) => {
  let anoNascimentoNum = parseInt(anoNascimento);

  verificarAlistamento(anoNascimentoNum);

  rl.close();
});
