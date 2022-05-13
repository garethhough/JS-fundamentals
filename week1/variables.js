//*-----Activity 1-----

/*
Create a program that stores someone’s name, 
age and favourite colour and log it to the console 
in a complete sentence using Template Literals.

Update all of your variables and write out a 
new sentence underneath your original.
*/

/*
let name = "Gareth Hough";
let age = 30;
let favouriteColour = "Black";

console.log(`My name is ${name}, I am ${age} years old and my favourite colour is ${favouriteColour}`);

name = "Gareth";
age = 23;
favouriteColour = "red";

console.log(`Hi, My name is ${name}, my favorite colour is ${favouriteColour} and I am ${age} years old. ` );
*/

//-----Activity 2-----

/*
Create a program that stores what you eat today 
for breakfast, lunch and dinner. Log these to the 
console. 
Update each of these variables to what you 
will eat tomorrow. Log these to the console. 
*/

/*
let breakfast = "Cheerios";
let lunch = "Toast";
let dinner = "Pasta";

console.log(`For breakfast I had a bowl of ${breakfast}. For lunch I will have ${lunch} and for dinner I will have ${dinner}`);

breakfast = "Toast";
lunch = "Yoghurt";
dinner = "Curry";

console.log(`For breakfast tomorrow, I will have ${breakfast}. For lunch I will have ${lunch} and for dinner I will have ${dinner}`);
*/

//-----Activity 3-----

/*
Create a program that calculates the number 
of days from today to your birth date.
*/

/*
let today = new Date;
let todayDate = today.getDate();
let todayMonth = today.getMonth() +1;


let birthday = new Date(1991, 11, 20);
let birthdayDate = birthday.getDate();
let birthdayMonth = birthday.getMonth() +1;


let remainingMonths = birthdayMonth - todayMonth;
let remainingDays = birthdayDate - todayDate;

console.log(`I was born on ${birthday}`)
console.log(`There are ${remainingMonths} months and ${remainingDays} days remaining until it is my birthday`);
*/

//-----Activity 4-----

/*
> Create 9 variables: space1, space2… space9. 
> Assign either the value ‘x’,’o’,’ ‘, to each of 
these variables.
> Insert the variables into your board using the 
${varName} syntax and make it look like the displayed
board.
*/

/*
let space1 = " X";
let space2 = " o";
let space3 = "  ";
let space4 = "  ";
let space5 = " X";
let space6 = "  ";
let space7 = " o";
let space8 = "  ";
let space9 = " X";
let space0 = "  ";
let i = " |";
let j = "-----------";

console.log (`${space0}${i}${space0}${i}`);
console.log (`${space1}${i}${space2}${i}${space3}`);
console.log (`${space0}${i}${space0}${i}`);
console.log(`${j}`);
console.log (`${space0}${i}${space0}${i}`);
console.log (`${space4}${i}${space5}${i}${space6}`);
console.log (`${space0}${i}${space0}${i}`);
console.log(`${j}`);
console.log (`${space0}${i}${space0}${i}`);
console.log (`${space7}${i}${space8}${i}${space9}`);
console.log (`${space0}${i}${space0}${i}`);
*/