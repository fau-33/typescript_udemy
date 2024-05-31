// 1,crie uma variavel que recebe um numero
let numero: number = 10;

// 2.Converta o numero para string em uma nova variavel
let numeroString: string = numero.toString();

// 3.Esta variavel de conversão deve estar tipada por inferência
let numeroStringInferencia = numero.toString();

// 4.Imprima este numero em uma string maior, utilizando o recurso de template string ou concatenação
console.log(`O número é ${numeroString}`);
