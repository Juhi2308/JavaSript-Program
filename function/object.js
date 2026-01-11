/*const student = {
    fullName : "juhi priya",
    marks: 63.4,
    printMarks: function () {
        console.log("marks = ", this.marks); //student.marks
    },
};

const employee = {
    calcTax() {
      console.log("tax rate is 10%");
    }
};

const karanArjun1 = {
    salary: 5000,
    calcTax() {
        console.log("tax rate is 20%");
    }
};

const karanArjun2 = {
    salary: 5000,
};

const karanArjun3 = {
    salary: 5000,
};

const karanArjun4 = {
    salary: 5000,
};

karanArjun1._proto_ = employee;
karanArjun2._proto_ = employee;
karanArjun3._proto_ = employee;
karanArjun4._proto_ = employee; */

// singleton
// object.create

// object literals
const mySym = Symbol("key1")


const JsUser = {
    name: "Juhi",
    "full name": "Juhi Priya",
    [mySym]: "mykey1",
    age: 18,
    location: "Bangalore",
    email: "juhi2@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

//console.log(JsUser.email)
//console.log(JsUser["email"])
//onsole.log(JsUser["full name"])
//console.log(JsUser[mySym])

JsUser.email = "juhi@chatgpat.com"
//Object.freeze(JsUser)
JsUser.email = "juhi@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log('Hello JS user, ${this.name}');
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());