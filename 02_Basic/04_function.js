// function syntax

function Numcal(...num) {

    return num; 
}

console.log(Numcal(10 ,23,43,45,56,34,32,43,432));
//  TO Pass of An to the method 
// Object creation 
const student = {
    name: "satish",
    midName: "Bhakar",
    sirName: "Ghode",
    email: "satishghode9075@gmail.com",
    phoneNumber: 9075414838,
    location: "Sangamner",
}

function handalObject(getObject) {
    console.log(`Username${getObject.name} midName ${getObject.midName} `);  
}
handalObject(student);
// there are two way to decelar a Funcation.
// this function is access before and afte the function decelaration.

function sum(num1 , num2) {
    return num1 + num2;
}
console.log(sum(23,34));


//this function is only accessible after function declaration

const sub = function(num3 , num4){
    return num3 - num4;

}

console.log(sub(5,5));;

console.log("++++++++++++++++++++++++++   arrow Function   +++++++++++++++++++++");



const arrowFunction =(val1,val2)=> {
    return val1+val2
}

console.log(arrowFunction(2,3));