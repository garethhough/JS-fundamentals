//-----Notes-----


//console.log("Hello World");
//console.log("Hello World".toUpperCase());
//console.log(Math.random());
//console.log(Math.random() * 10);
//console.log(Math.floor(Math.random() * 10));

/*
Math.ceil()
… will always round a number 
UP to the next largest integer

Math.round()
… returns the value of a number 
rounded to the nearest integer

Math.floor()
…returns an integer less than or 
equal to the specified number
*/

//-----How to reverse a string-----
/*
function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    let splitString = str.split(""); // let splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    let reverseArray = splitString.reverse(); // let reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    let joinArray = reverseArray.join(""); // let joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    console.log(joinArray); // "olleh"
    return;
}
reverseString("abcdefg");
*/

//-----Activity-----

/*
for (let i = 0; i<3; i++){

    for(let j = 0; j<3; j++){
      console.log("    |    |    ")
    }
    if (i < 2){
      console.log("--------------")
    }
  }
  */