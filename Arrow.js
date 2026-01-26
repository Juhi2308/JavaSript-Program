const user = {
    username: "Juhi",
    price: 999,

    welcomeMessage: function() {
       console.log('${this.username}, welcome to website');
       com 
    }

}

/*user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()*/

//console.log(this);

//function sudhir(){
//    let username = "Juhi"
 //   console.log(this.username);
//}
//sudhir()

const sudhir =  () => {
    let username = "Juhi"
   // console.log(this);
}

//sudhir()

//const addTwo = (num1, num2) => {
 //   return num1 + num2
//}
//const addTwo = (num1, num2) => return num1 + num2

//const addTwo = (num1, num2) => ( num1 + num2)

//const addTwo = (num1, num2) => ({username: "Priya"})


//console.log(addTwo(3, 4))

//const myArray = [2, 5, 3, 7, 8]

//myArray.forEach(function () {})
//myArray.forEach(() => {}) 
//myArray.forEach(() => ())

 /*   (function Priya(){
        //named IIFE
        console.log('DB CONNECTED');
    })();

    ( () => {
        console.log('DB CONNECTED TWO');
    })();

    ( (name) => {
        console.log('DB CONNECTED TWO ${name}');
    } )('Juhi')*/

    // Execution Context
    let val1 = 10
    let val2 = 20
    function addNum(num1, num2){
        let total = num1 +num2
        return total
    }
    let result1 = addNum(val1, val2)
    let result2 = addNum(10, 2)
