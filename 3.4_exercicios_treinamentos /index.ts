/**
 * Problema "soma"
  Fazer um programa para ler dois valores inteiros X e Y, e depois mostrar na tela o valor da soma destes
  números.

  Exemplo 1:
  Digite o valor de X: 8
  Digite o valor de Y: 10
  SOMA = 18

  Exemplo 2:
  Digite o valor de X: 12
  Digite o valor de Y: 31
  SOMA = 43
 */

const x = parseInt(prompt("Digite o valor de X: ") || "0");
const y = parseInt(prompt("Digite o valor de Y: ") || "0");

const soma = x + y;
console.log(`SOMA = ${soma}`);

const subtracao = x - y;
console.log(`SUBTRACAO = ${subtracao}`);

const multiplicacao = x * y;
console.log(`MULTIPLICACAO = ${multiplicacao}`);

const divisao = x / y;
console.log(`DIVISAO = ${divisao.toFixed(2)}`);

const resto = x % y;
console.log(`RESTO = ${resto}`);
