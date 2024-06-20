/**
 * Problema "retangulo"
  Fazer um programa para ler as medidas da base e altura de um retângulo. Em seguida, mostrar o valor
  da área, perímetro e diagonal deste retângulo, com quatro casas decimais, conforme exemplos.

  Exemplo 1:
  Base do retangulo: 4.0
  Altura do retangulo: 5.0
  AREA = 20.0000
  PERIMETRO = 18.0000
  DIAGONAL = 6.4031

  Exemplo 2:
  Base do retangulo: 10.3
  Altura do retangulo: 13.1
  AREA = 134.9300
  PERIMETRO = 46.8000
  DIAGONAL = 16.6643
 */

const base = parseFloat(prompt("Base do retangulo: ") || "0");
const altura = parseFloat(prompt("Altura do retangulo: ") || "0");

// calculo da area
const area = base * altura;
console.log(`AREA = ${area.toFixed(4)}`);

// calculo do perimetro
const perimetro = 2 * (base + altura);
console.log(`PERIMETRO = ${perimetro.toFixed(4)}`);

// calculo da diagonal
const diagonal = Math.sqrt(base ** 2 + altura ** 2);
console.log(`DIAGONAL = ${diagonal.toFixed(4)}`);
