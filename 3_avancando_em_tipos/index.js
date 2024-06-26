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
// 7 - Tipos de objetos
function passCoordinates(coord) {
    console.log("As coordinates: ", coord.x);
    console.log("As coordinates: ", coord.y);
}
const objCoord = { x: 100, y: 200 };
//passCoordinates(objCoord);
const pessoaObj = {
    nome: "Flávio",
    sobrenome: "Félix",
};
// 8 - Props opcionais
function showNumbers(a, b, c) {
    console.log("A: ", a);
    console.log("B: ", b);
    if (c) {
        console.log("C: ", c);
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
// 9 - Validando argumentos opcionais
function greetingNames(name, lastName) {
    if (lastName !== undefined) {
        return `Hello ${name} ${lastName}, welcome!`;
    }
    return `Hello ${name}, welcome!`;
}
console.log(greetingNames("Flávio", "Félix"));
console.log(greetingNames("Flávio"));
// 10 - Union Type
function showBalance(balance) {
    console.log(`Your balance is: ${balance}`);
}
showBalance(1000);
showBalance("1000");
const arr2 = [
    1,
    2,
    3,
    "Hello",
    "World",
    true,
    false,
];
// 11 - Avançando com Union Types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado";
    }
    return `Usuário aprovado com o papel ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(`Your id is: ${id}`);
}
showId(12);
showId("123");
showId(123);
function showCoords(obj) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
const coordObjs = { x: 100, y: 200, z: 300 };
showCoords(coordObjs);
const somePerson = { name: "Flávio", age: 30 };
console.log(somePerson);
// 15 - Literal Types
let test;
test = "testando";
//console.log(test);
function showDirections(direction) {
    console.log(`Moving ${direction}`);
}
showDirections("left");
showDirections("right");
// 16 - Non-null assertion operator
const p = document.getElementById("some-p");
console.log(p.innerText);
// 17 - BigInt
let n;
//n = 1;
n = 1000n;
console.log(n);
console.log(n + 1000n);
// 18 - Symbol
const symbol1A = Symbol("Hello");
const symbol1B = Symbol("Hello");
