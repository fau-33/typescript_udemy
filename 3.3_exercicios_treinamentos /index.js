"use strict";
/**
 * Problema "idades"
    Fazer um programa para ler o nome e idade de duas pessoas. Ao final mostrar uma mensagem com os
    nomes e a idade média entre essas pessoas, com uma casa decimal, conforme exemplo.
    Exemplo:
    Dados da primeira pessoa:
    Nome: Maria Silva
    Idade: 19
    Dados da segunda pessoa:
    Nome: Joao Melo
    Idade 20
    A idade média de Maria Silva e Joao Melo é de 19.5 anos

 */
const nome1 = prompt("Dados da primeira pessoa:\nNome: ") || "";
const idade1 = parseInt(prompt("Idade: ") || "0");
const nome2 = prompt("Dados da segunda pessoa:\nNome: ") || "";
const idade2 = parseInt(prompt("Idade: ") || "0");
// calculo da media de idades
const media = (idade1 + idade2) / 2;
console.log(`A idade média de ${nome1} e ${nome2} é de ${media.toFixed(1)} anos`);
