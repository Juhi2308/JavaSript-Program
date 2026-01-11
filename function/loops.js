//FOR lOOP

/*let student = "Juhi";
console.log(student);
for(let count=1; count<=10; count = count++);{
    console.log("student");
}

console.log("Juhi");
console.log("Juhi");
console.log("Juhi");
console.log("Juhi");
console.log("Juhi");*/


//print 1 to 5
/*for (let count = 1; count <= 5; count++) {
    console.log("Juhi Shah");
}

console.log("loop has ended");

//calculate sum of first n numbers(sum of 1 to 5)
let sum = 0;
let n = 100;
for (let i = 1; i <= n; i++) {
  sum = sum + i;//sum = 0+1
}
console.log("sum = ", sum);
console.log("loop has ended");

for (var i = 1; i <= 5; i++) {
    console.log("i = ", i);
}

console.log(i);

// WHILE LOOP
let i = 5;
while (i <= 100) {
    console.log("Priya");
    i++;
}*/

/*DO WHILE LOOP
let i = 1;
do {
    console.log("i=",i);
    i++;
} while (i <= 5);

//for-of loop
let str = "Priya";

let size = 0;
for (let i of str) {
    console.log("i=", i);
    size++;
}

console.log("string size = ", size); //10

//for-in loop

let student = {
    name: "Priya",
    age: 20,
    cgpa: 7.5,
    isPass: true
};

for (let key in student) {
    console.log("key=", key, " value=", student[key]);
}

// Ex:- print all even numbers from 0 to 100.

for (let num = 0; num <= 100; num++) {
    /*if (num % 2 === 0) {*/
        /*even number
        if (num % 2 !== 0){
           // odd number 
        console.log("num=", num);}
    }
    // console.log("num =", num);
} 

/* Ex:- create a game where you start with any random game number.
ask the user to keep guessing the game number until the user enters correct value.*/

let gameNum = 25;
let userNum = prompt("Guess the game number : ");

while (userNum != gameNum) { 
 userNum = prompt("you entered wrong number. Guess again :");
}

console.log("congratulations, you entered the right number");