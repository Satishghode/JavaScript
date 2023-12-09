// Singleton Object 
// Creates an object that has the specified prototype or that has null prototype.
// Object.create  (<anonymous>)Object


//create an Object 
let mySym = Symbol("key");

const myObject = {
    name: "satish",
    midName: "Bhakar",
    sirName: "Ghode",
    email: "satishghode9075@gmail.com",
    phoneNumber: 9075414838,
    location: "Sangamner",
    [mySym]:  "34r"
}   
console.log(myObject);
// using the (.)operator we can access the Symbol Values but DataType is 'String'.
console.log(`This is an first way to access the Object Values:  \n==> ${myObject.name}`);

console.log(`This is an second Way to access the Object   \n==> ${myObject["email"]}`);

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");


myObject.functionOne = function () {
    console.log(`wellCome JsUser ${this.name}`);
}


console.log(myObject.functionOne());