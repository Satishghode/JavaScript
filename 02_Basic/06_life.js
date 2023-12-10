// IIFE (Immediately Invoked Function Expression) is a function that runs the moment it is invoked or called in the JavaScript event loop

// Normal function in 

(function callName(name){
    console.log(`WellCome ${name} Normal LIFE Function `);
})("satish");

// Variable decelartion Function 

// ( function () {
    
// })();

// arrowFunction is an ES6 Concept .

( (name)=>{
    console.log(`WellCome ${name} Arrow LIFE Function `);
})("satish")
