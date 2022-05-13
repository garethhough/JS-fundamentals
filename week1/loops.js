//-----Activity 1-----
/*
Create an array that lists your favourite films, up to 
5 elements.
Add 2 more using a method. 
Use a loop to cycle through the array
*/

/*
let favFilms = ["LOTR", "Matrix", "Snatch"];
favFilms.push("Fight Club", "Saving Private Ryan");

for (let i = 0; i < favFilms.length; i++) {
    console.log(favFilms[i]);
}
*/

//-----Activity 2-----

/*
Generate 6 random numbers between 
1-50 and log them to the console. 
*/

/*let ranNum = [];
while(ranNum.length < 6){
    let i = Math.floor(Math.random() * 50) + 1;
    if(ranNum.indexOf(i) === -1) ranNum.push(i);
}
console.log(ranNum); 
*/

//-----Activity 3-----

/*
If we can create a loop to put 0-9 on the screen, how 
can we count from 9-0? Create a program that does 
this.
*/

/*
let numList = [];

for(let i = 9; i >= 0; i--){
    numList.push(i);
    }
console.log(numList); 
*/

//-----Activity 4-----

/*
Displays 4 films stored in an array. JS
Use a for loop to show each film in the array.
Use an if statement to check if the 3rd film in the array is 
Ghostbusters. 
If it is, return “Yay it’s Ghostbusters”. If it isn’t return “Boo! 
we want Ghostbusters!
*/

/*
let films = ["LOTR", "Matrix", "Ghostbusters", "Fight Club"];

for (let i = 0; i < films.length; i++) {
    console.log(films[i]);
}
if(films[2] == "Ghostbusters") {
    console.log("Yay it’s Ghostbusters;")
}
else {
    console.log("Boo! We want ghostbusters!");
}
*/

//-----Activity 5-----

/*
Generate a random number between 1 and 30 
six times.
For each random number generated, check if 
this number of divisible by 7 or not.
Log out a message to the console if it is divisible 
by 7 or not.
*/

/*
for(let i = 0; i < 6; i++){
    let genNum = Math.floor((Math.random() * 30) + 1); 
    if(genNum % 7 == 0){
        console.log(`${genNum} is Divisible.`);
    } else{ 
        console.log(`${genNum} is not divisible.`)
    }
}
*/

//-----Activity 6-----

/*
> Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers. 
In these arrays place 4 names as strings. Make sure there are 2 names 
that are in BOTH arrays.
> Using a nested loop iterate over both arrays and console.log out the 
matching follower.
*/

/*
let bobsFollowers =[
    "Fred",
    "Bob",
    "James",
    "Lauren",
];
let hannahsFollowers =[
    "James",
    "Lauren",
    "Ben",
    "John",
];
for(i=0;i<bobsFollowers.length;i++){
    for(let j=0;j<hannahsFollowers.length;j++){
        if(bobsFollowers[i] == hannahsFollowers[j]){
            console.log(`${bobsFollowers[i]} are friends with Hannah and Bob`);
            continue;
        }
    }
}
*/

//-----Activity 7------
/*
Research on do...while loop, find 
out about the difference between 
for loop, while loop and do...while 
loop. Give an example of each. 
What are the pros and cons?
*/

//while Loops loops through a block of code as long as the condition specified evaluates to true.

/*
let text = "";
let i = 0;
while (i < 5) {
  text += i;
  i++;
} 
console.log(text);
*/


/*
do...while Loops loops through a block of code once; then the condition is evaluated. If the condition is true,
the statement is repeated as long as the specified condition is true. */

/*
let text = "";
let i = 0;
do {
  text += i;
  i++;
}
while (i < 5);
console.log(text);
*/

//for Loops a code block while a condition is true for / until the counter reaches a specified number

/*
for (let i = 0; i < 5; i++) {
    console.log(i);
  };
*/