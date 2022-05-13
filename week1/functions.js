//-----Activity 1-----

/*
Take this code and turn it into arrow function 
syntax:
*/

/*
const factorial = (n) => {
    if ((n === 0 ) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}

console.log(factorial(33));
*/

//-----Activity 2-----

/*
Edit the below snippet to include two parameters and a 
running order count updated when the function is called:
*/

/*
let orderCount = 0;

const takeOrder = (topping1, topping2) => {
    console.log(`Pizza with ${topping1} and ${topping2}`);
    return orderCount++;
}

takeOrder("Pineapple", "Ham");
takeOrder("Cheese", "Tomatoe");
takeOrder("Chicken", "Bacon");
console.log(orderCount);
*/

//-----Activity 3-----

/*
Cash machine time!
Let’s create one that:
> Dispenses cash if your pin number is correct and your 
balance is equal to, or more than, the amount you’re 
trying to withdraw!
*/


/*
let pin = 1234;
let balance = 100;


let getMoney = (enteredPin, amount) => {
    if(enteredPin == pin && balance >= 5 && amount <= balance) {
        console.log("Here have some pennies");
    } else if (enteredPin != pin) {
        console.log("Pin is inccorect");
    } else if (balance < amount) {
        console.log("No can do, you're broke");
    }
}

getMoney(1234, 1);
*/