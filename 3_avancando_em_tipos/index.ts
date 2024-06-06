// 1 - Arrays
let numbers: number[] = [1, 2, 3, 4, 5];

numbers.push(6);
console.log(numbers[2]);

const names: string[] = ["John", "Doe", "Jane"];

names.push("Mary");
names.push("Alice");
console.log(names[3]);

// 2 - outra sintaxe de arrays
let numbers2: Array<number> = [100, 200];

numbers2.push(300);
console.log(numbers2);

// 3 - Any
let arr: any[] = [1, "Hello", true, [], { name: "John" }];

console.log(arr);

arr.push({ age: 30 });

console.log(arr);

// 4 - Parâmetro tipados
function soma(a: number, b: number) {
  console.log(a + b);
}
soma(1, 2);

// 5 - Retornos de funções tipados
function greeting(name: string): string {
  return `Hello ${name}`;
}

console.log(greeting("John"));

// 6 - Função anonima tipada
setTimeout(function () {
  const sallary: number = 1000.0;
  //console.log(sallary);
});

// 7 - Tipos de objetos
function passCoordinates(coord: { x: number; y: number }) {
  console.log("As coordinates: ", coord.x);
  console.log("As coordinates: ", coord.y);
}

const objCoord = { x: 100, y: 200 };
//passCoordinates(objCoord);

const pessoaObj: { nome: string; sobrenome: string } = {
  nome: "Flávio",
  sobrenome: "Félix",
};

// 8 - Props opcionais
function showNumbers(a: number, b: number, c?: number) {
  console.log("A: ", a);
  console.log("B: ", b);
  if (c) {
    console.log("C: ", c);
  }
}

showNumbers(1, 2, 3);
showNumbers(4, 5);

// 9 - Validando argumentos opcionais
function greetingNames(name: string, lastName?: string) {
  if (lastName !== undefined) {
    return `Hello ${name} ${lastName}, welcome!`;
  }

  return `Hello ${name}, welcome!`;
}

console.log(greetingNames("Flávio", "Félix"));
console.log(greetingNames("Flávio"));

// 10 - Union Type
function showBalance(balance: number | string) {
  console.log(`Your balance is: ${balance}`);
}

showBalance(1000);
showBalance("1000");

const arr2: Array<number | string | boolean> = [
  1,
  2,
  3,
  "Hello",
  "World",
  true,
  false,
];

// 11 - Avançando com Union Types
function showUserRole(role: boolean | string) {
  if (typeof role === "boolean") {
    return "Usuário não aprovado";
  }
  return `Usuário aprovado com o papel ${role}`;
}

console.log(showUserRole(false));
console.log(showUserRole("Admin"));
