function sayMyName() {
    console.log("J");
    console.log("U");
    console.log("H");
    console.log("I");  
}

//sayMyName()

//function addTwoNumbers(number1, number2){
//    console.log(number1 + number2);
//}
function addTwoNumbers(number1, number2){
    
    //let result = number1 + number2
    //console.log("Juhi");
    //return result
    //console.log("Juhi");
    return number1 + number2
}

const result = addTwoNumbers(3,5)

//console.log("Result: ", result);
function loginUserMessage(username = "Sam"){
    //if(username === undefined){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return '${username} just logged in'
}

//console.log(loginUserMessage("Priya"))
//console.log(loginUserMessage())

//function calculateCartPrice(...num1)
function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

//console.log(calculateCartPrice(200, 400, 500,300))
const user = {
    username: "Priya",
    prices: 199
}

function handleObject(anyobject){
    console.log('Username is ${anyobject.username} and price is ${anyobject.price}');
}

//handleObject(user)
handleObject({
    username: "Sumit",
    price: "498"
})

const myNewArray = [300, 3000, 30000, 300000]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));