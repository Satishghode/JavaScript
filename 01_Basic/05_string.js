// vaild syntax to decelar a String that decelartion call string object creation 
const name = new String("satish");
// a vaild syntax to decelar a string 
let lastName = " Ghode";
let degree ="CS"

// string concatenation there are two way to concat a String
// that an Old Syntax to Concat a string.
 console.log(name+lastName);
// the Syntax from ES6 javaSCript. 
console.log(`I am ${name} ${lastName} i am complated  My ${degree} from Sangamner college Sagamner `);

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
let userName = "satish";
userName += " Bhaskar"
userName += " Ghode";
console.log(userName);


// let do some operation on string Using BulidInMethod 
// Convet the String lower to upper case 
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
let userOne = "The way to get started is to quit talking and begin doing.";
console.log(`${userOne}  is an String, to perform the operation `);

console.log(` 1]. toUpperCase() Method is used to convet all String in UpperCase EX : \n ==> ${userOne.toUpperCase()}`);
console.log(` 2]. toLowerCase() Method is used to convet all String in LowerCase EX : \n ==> ${userOne.toLowerCase()}`);
console.log(` 3]. charAt() Method is used to find the character in string Passing the Index Number EX : \n ==> ${userOne.charAt(4)}`)
console.log(` 4]. indexOf() Method is used to find the index of the character passing the character EX : \n ==> ${userOne.indexOf('q')}`);
console.log(` 5]. length is used to find the length of the String EX : \n ==> ${userOne.length} `);

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
let removeSpace = new String("       our time is limited, so don't waste it living someone else's life.                     ");
console.log(` 6]. trim() Method is used to remove the starting and ending space in string  \n ==>${userOne.trim(" ","_")}`);

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log(` 7]. replace() Method is used to replace character/Word with another character/ word in the string EX : \n ==> ${userOne.replace("quit","keep")} `);


console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log(` 8]. substring() Method is used to take small string from the big string EX ==> \n Original String : ${userOne} \n subString :  ${userOne.substring(4,28)}`);

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

console.log( userOne.split(" "));