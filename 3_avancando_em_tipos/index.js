"use strict";
// 1 - Arrays
let numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers[2]);
const names = ["John", "Doe", "Jane"];
names.push("Mary");
names.push("Alice");
console.log(names[3]);
// 2 - outra sintaxe de arrays
let numbers2 = [100, 200];
numbers2.push(300);
console.log(numbers2);
// 3 - Any
let arr = [1, "Hello", true, [], { name: "John" }];
console.log(arr);
arr.push({ age: 30 });
console.log(arr);
// 4 - Parâmetro tipados
function soma(a, b) {
    console.log(a + b);
}
soma(1, 2);
// 5 - Retornos de funções tipados
function greeting(name) {
    return `Hello ${name}`;
}
console.log(greeting("John"));
// 6 - Função anonima tipada
setTimeout(function () {
    const sallary = 1000.0;
    //console.log(sallary);
});
