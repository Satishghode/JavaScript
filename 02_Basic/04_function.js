// function syntax

function Numcal(...num) {

    return num; 
}

console.log(Numcal(10 ,23,43,45,56,34,32,43,432));

//  TO Pass of An to the method 


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