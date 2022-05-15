//---------Activity 1---------

/*
Create a variable called age. Write an if statement
that logs “Yes I can serve you” if the age is greater 
than 17 and else logs “You aren’t old enough”.
Take your if statement and add a variable 
called country in.
Eg. if age > 17 and country == “UK”
*/

/*
let age = 30;

if (age > 17) {
console.log("Yes, I can serve you");
} 
else {
    console.log("You aren't old enough");
}
*/

/*
let age = 30;
let country = "uk";

if (age > 17 && country == "uk") {
console.log("Yes, I can serve you");
} 
else {
    console.log("You aren't old enough");
}

*/

//---------Activity 2---------

/*
Create a variable for any pizza topping. 
Create a switch statement, if the topping is one of your 
favourite ingredients, log to the console “These are 
important ingredients for my pizza.” If you don’t mind 
having Pepperoni for example log to the console “I don’t 
mind having ${topping} on my pizza. 
Finally, for any topping you don’t like log “${topping} 
should not be on a pizza.”
*/

/*
let topping = "Cheese";

switch(topping) {
    case "Cheese":
    case "Bacon":
    case "Chicken":
        console.log(`This is an important ingredient for my pizza.`);
        break;
    case "Pepperoni":
    case "Ham":
        console.log(`I don't mind having ${topping} on my pizza.`);
        break;
    default: 
    console.log(`${topping} should not be on a pizza.`);
}
*/

//---------Activity 3---------

/*
Create a variable called password. 
Check how many letters are in the password, if there are 
less than 8, log to the console that the password is too 
short. Otherwise log the password to the console.
*/

/*
let password ="superSafePassword";
let length = password.length;

if (length < 8) {
    console.log("Password is too short");
} 
else {console.log(password);
}
*/

//---------Activity 4---------

/*
Create a variable called num. 
Check if the variable is divisible by 3 or 5. If it 
is, log “This number is divisible by 3 or 5”. 
Otherwise log something else.
*/

/*
let num = 9;

if (num % 3 === 0 || num % 5 === 0) {
console.log("This number is divisible by 3 or 5");
}
else{
    console.log("This number is not divisible by 3 or 5");
} 
*/

//---------Activity 5---------

/*
Create a variable called num.
If num is divisible by 3 log “fizz” to the console, if it’s divisible by 
5 log “buzz” to the console, if it’s divisible by both 3 and 5 log 
“fizz buzz” to the console. Otherwise log num to the console.
*/

/*
let num = 3;

if(num % 3 === 0 && num % 5 === 0) {
    console.log("Fizz Buzz");
}
else if (num % 5 === 0) {
    console.log("Buzz");
} 
else if  (num % 3 === 0) {
    console.log("Fizz");
}
else {
    console.log(num)}
*/

//---------Activity 6---------

/*
Create a variable called num.
Check if the number is a palindrome (looks the 
same forward as it does backwards e.g. 1001 or 
20202).
*/

/*
let num = 6446;
let numString = num.toString(); 
let reverseNumString = numString.split('').reverse().join('');

if (num == reverseNumString){
    console.log(`Yes ${num} is a palindrome`)
} else {
    console.log(`No ${num} is not a palindrome`)
}
*/

//---------Activity 7---------

/*
Create a variable called time, a variable called placeOfWork 
and a variable called townOfHome. Create an if statement that 
logs to the console where someone is at times of the day. E.g. if 
the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.
*/

/*
let time = 9;
let placeOfWork ="Railway";
let townOfHome ="Winsford";

if (time == 7) {
    console.log(`I’m at home in ${townOfHome}`);
}
else if (time == 8) {
    console.log(`I'm commuting`);
} 
else if (time == 9) {
    console.log(`I'm at work, I work at ${placeOfWork}`);
}
else {
    console.log("I am elsewhere");
}
*/

//---------Activity 8---------

/*
Take the string 
“jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh 
gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the 
index of a last vowel in the string.
*/

/*
let string = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
let vowelArray = ['a', 'e', 'i', 'o', 'u'];
let lastIndex = 0;
for (let i = 0; i < vowelArray.length; i++){
    index = string.lastIndexOf(vowelArray[i]);
if (index >= lastIndex ){
    lastIndex = index;
    lastVowel = vowelArray[i];
}
}

console.log(lastVowel); 
console.log(lastIndex);
*/

//---------Activity 9---------
/*
Create a variable called word that takes a string. Create 
an if statement that checks if the last letter is the same as 
the first. If it is return true, otherwise return false.
*/

/*
let word = "laptopl";
let firstLetter = word.charAt(0);
let lastLetter = word.slice(-1);

if (firstLetter === lastLetter) {
    console.log("True");
}
else {
    console.log("False");
}
*/

//---------Activity 10---------

/*
Create two variables called num1 and num2.
Create an if statement that checks if the result of the 
sum is even. If it is return the number, otherwise return 
the numbers multiplied together.
*/

/*
let num1 = 2;
let num2 = 2;
let sum = num1 + num2;
let multi = num1 * num2;

if ((sum % 2) == 0){
    console.log(sum);
  }
else {
    console.log(multi);
  }
*/

//-----Practice-----
//Eight ball

/*
// Ternary expression used to replace if else
// If user name isn't entered, print Hello!
let userName = "Gareth";
userName ? console.log(`Hello ${userName}!`) : console.log("Hello!");

// Ask the eight ball a question
console.log("Ask the Eight ball a question")
const userQuestion = "Will I win the lottery?"
console.log(userQuestion);

//Math.random() returns a value between 0 and 1
//In order to make this set of numbers range from 0 to 8 we can multiply the returned value by 8.
//To ensure we only have whole numbers from 0 to 7 we round down using Math.floor().
randomNumber = Math.floor(Math.random() * 8);

// Set eight ball to empty string
let eightBall = "";

// Assign strings to numbers 0-7 and pass them to the eight ball 
switch(randomNumber) {
  case 0: 
  eightBall = "It is certain";
  break;
  case 1:
  eightBall = "It is decidedly so";
  break;
  case 2: 
  eightBall = "Reply hazy try again";
  break;
  case 3:
  eightBall = "Cannot predict now";
  break;
  case 4:
  eightBall = "Do not count on it";
  break;
  case 5:
  eightBall = "My sources say no";
  break;
  case 6:
  eightBall = "Outlook not so good";
  break;
  case 7:
  eightBall = "Signs point to yes";
  break;
}
 console.log(eightBall);
*/
