// find the type of operator 


let num = 12;
let name= "satish";
let bigInt = 89443345543n;
let score = null;
let boolean = true
let call ;
// Symbols are new primitive type introduced in ES6. Symbols are completely unique identifiers.
// Just like their primitive counterparts (Number, String, Boolean), they can be created using the factory function Symbol() which returns a Symbol.
const id = Symbol("1232f");

const myFun = function(){
    console.log("Hello Word");
}

console.log(typeof(num)); 
console.log(typeof(name));
console.log(typeof(bigInt));
console.log(typeof(score));
console.log(typeof(boolean));
console.log(typeof(call));
console.log(typeof(id));
console.log(typeof(myFun));

