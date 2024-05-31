// 1 - numbers
let x: number = 10;

console.log(x); // 10

x = 20;

console.log(typeof x); // 20

const y: number = 20.2333309873633637;

console.log(typeof y);

console.log(y);

console.log(x.toPrecision(3));

// 2 - strings
let firstName: string = "Flávio";

console.log(firstName.toUpperCase());

let fullName: string;

const lastName: string = "Félix";

fullName = firstName + " " + lastName;

console.log(fullName);

console.log(typeof fullName);

// 3 - boolean
let isTrue: boolean = true;

console.log(isTrue);

console.log(typeof isTrue);

// 4 - Indeference e annotations
const ann: string = "Flávio";

let inf = "Félix";

inf = "Nascimento";
