"use strict";
/**
 * Problema "troco"
Fazer um programa para calcular o troco no processo de pagamento de um produto de uma mercearia.
O programa deve ler o preço unitário do produto, a quantidade de unidades compradas deste produto,
e o valor em dinheiro dado pelo cliente (suponha que haja dinheiro suficiente). Seu programa deve
mostrar o valor do troco a ser devolvido ao cliente.

Exemplo 1:
Preço unitário do produto: 8.00
Quantidade comprada: 2
Dinheiro recebido: 20.00
TROCO = 4.00

Exemplo 2:
Preço unitário do produto: 30.00
Quantidade comprada: 3
Dinheiro recebido: 100.00
TROCO = 10.00
 */
const preco = parseFloat(prompt("Preço unitário do produto: ") || "0");
const quantidade = parseInt(prompt("Quantidade comprada: ") || "0");
const dinheiroRecibido = parseFloat(prompt("Dinheiro recebido: ") || "0");
const troco = dinheiroRecibido - preco * quantidade;
console.log(`TROCO = ${troco.toFixed(2)}`);
