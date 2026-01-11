/* Arithmetic Operators
let a = 5;
let b = 2;*/

//console.log("a = ", a, "& b = ", b);
//console.log("a + b = ", a + b);
/*console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b); // 5^2 = 25 */

//unary operator
//a = a + 1; 
//a++;
//console.log("a = ", a); //6 
//a = a - 1;
//a--;
//console.log("a = ", a);
//++a;
//console.log("++a = ", ++a);
//--a;
//console.log("--a = ", --a);
//Assignment operarators

/*let a = 5;
let b = 2;

//a += 4; // a = a + 4
//console.log("a = ", a);

a -= 4; // a = a - 4
console.log("a = ", a);

a *= 4; // a = a * 4
console.log("a = ", a); //20

a /= 4; // a = a / 4
console.log("a = ", a); //1.25

a *= 4; // a = a * 4
console.log("a = ", a); //20

a %= 4; // a = a % 4
console.log("a = ", a); //1

a **= 4; // a = a ** 4
console.log("a = ", a); //625 */

/*comparison Operators
let a = 5;
let b = 2;
console.log("a == b", a == b); //false 

let a = 5;
let b = 5;
console.log("a == b", a == b); //true

let a = 5;
let b = 2;
console.log("a != b", a != b); //false

let a = 5;
let b = "5";
console.log("a === b", a === b); 

let a = 5;
let b = 3;
console.log("a > b", a > b); 

let a = 5;
let b = 3;
console.log("a >= b", a >= b); */

// LOGICAL OPERATORS

/*let a = 6;
let b = 5;

/*let cond1 = a > b; //true
let cond2 = a=== 6; //true
console.log("cond1 && cond2 = ", cond1 && cond2); 

let cond1 = a > b; //true
let cond2 = a=== 5; //false
console.log("cond1 && cond2 = ", cond1 && cond2);

console.log("cond1 && cond2 = ", a < b && a === 6); 

console.log("cond1 || cond2 = ", a < b || a === 6); 

console.log("cond1 || cond2 = ", a < b ); 

console.log("!(a<b) = ", !(a < b) ); //false */

// Conditional Statements

/*let age = 16;

if(age >= 18) {
    console.log("you can vote");
}

if(age < 18) {
    console.log("you cannot vote");
}


let mode = "dark";
let color;

if(mode === "dark") {
    color = "black";
}

if(mode === "light") {
    color = "white";
}

console.log(color);

let mode = "dark";
let color;

if(mode === "dark") {
    color = "black";
} else {
    color = "white";
}

console.log(color);

let mode = "dark";
let color;

if(mode === "dark") {
    color = "black";
} else {
    color = "white";
}

console.log(color);

let age = 16;

if (age >= 18) {
    console.log("vote");
} else {
    console.log("not vote");
}

let num = 10;

if (num % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}

let num = 11;

if (num % 2 === 0) {
    console.log(num, "is even");
} else {
    console.log(num, "is odd");
}

let age = 18;

if(age < 18) {
    console.log("junior");
} else if (age > 60) {
    console.log("senior");
} else {
    console.log("middle");
}

let mode = "orange";
let color;

if(mode === "dark") {
    color = "black";
} else if (mode === "blue") {
    color = "blue";
} else if (mode === "pink") {
    color = "pink";
} else {
    color = "white";
}

console.log(color);

if(mode === "dark") console.log(mode);//this statement doesn't give any error*/

// TERNARY OPERATORS

let age = 25;

//let result = age >= 18 ? "adult" : "not adult";
//console.log(result);

age >= 18 ? console.log("adult") : console.log("not adult");
let result = age >= 18 ? "adult" : "not adult";
console.log(result);



