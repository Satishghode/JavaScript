console.log(`+++++++++++++++++++++++++++ push()  ++++++++++++++++++++++++++++++++++++++++++++`);

let familyHero = ["Bhaskar","shambhaji","madhav"];
let familyHeroTwo = ["Bhanudas","somnatha","Dattu"];
// Appends new elements to the end of an array, and returns the new length of the array. 
familyHero.push(familyHeroTwo);
console.log(familyHero);

console.log(`++++++++++++++++++++++++++++  concat()  +++++++++++++++++++++++++++++++++++++++++++`);
// Combines two or more arrays. This method returns a new array without modifying any existing arrays.
let studentListOne = ["satish","mayur","vamshi","akasha"];
let studentListTwo = ["nilesh","Rahul","Akasha","vishal"];

let finalStudentList = studentListOne.concat(studentListTwo);
console.log(finalStudentList);

console.log(`++++++++++++++++++++++++++++  Flat()  +++++++++++++++++++++++++++++++++++++++++++`);
// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

let studentRollnumber = [1, 2, 3, [4 , 5, 6], 7, [8 ,9 ,[10,11],12],13];
let finalStudentRollNumber = studentRollnumber.flat(Infinity);
console.log(finalStudentRollNumber);





/*
  +++++++++++++++++++++++++++ push()  ++++++++++++++++++++++++++++++++++++++++++++
[
  'Bhaskar',
  'shambhaji',
  'madhav',
  [ 'Bhanudas', 'somnatha', 'Dattu' ]
]
++++++++++++++++++++++++++++  concat()  +++++++++++++++++++++++++++++++++++++++++++
[
  'satish', 'mayur',
  'vamshi', 'akasha',
  'nilesh', 'Rahul',
  'Akasha', 'vishal'
]
++++++++++++++++++++++++++++  Flat()  +++++++++++++++++++++++++++++++++++++++++++
[
   1, 2, 3,  4,  5,  6,
   7, 8, 9, 10, 11, 12,
  13
]




*/