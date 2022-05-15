//-----Notes-----
/*
console.log("Hello World");
console.log("Hello World".toUpperCase());
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10));
*/

//-----Notes-----
/*
console.log("All Around the world".charAt(7));

let i = 10;
i =  i + 2;
i += 2;
console.log(i);
*/

//-----Notes-----
/*
let favouriteDrink = "Coffee";
let name = "Gareth";
let age = 30;

console.log(favouriteDrink);
console.log("My favourite drink is " + favouriteDrink);

name = "Gareth Hough";
age = 30.5;
favouriteDrink = "Tea";

console.log(`My name is ${name}, I am ${age} years old and my favourite drink is ${favouriteDrink}`);
*/

//-----Notes-----

/*
let coffeeOrder = [
"Alex - Cortado", "Ben - Cortado", "Charlie - Whatever New"
]
coffeeOrder[1] = "Anne - Vanille Latte";

coffeeOrder.push("Donna - Espresso"); //.push adds to end of an array .pop will replace 

console.log(coffeeOrder);

console.log(coffeeOrder.length);
*/

//-----Notes-----

/* let weather = "sunny";
if (weather == "sunny") {
    console.log("well, I better wear sun cream")
} else if (weather == "rainy") {
    "wear whatever you want"
};  
*/

//---------NOTES---------

/*
if (1 ==="1") {
    console.log("true");
}
else {
    console.log("False");
}
*/

/*
if (1 != "1") {
    console.log("true");
}
else {
    console.log("False");
}
*/

//---------NOTES---------

/*
let place = "Manc";
let weather ="Cloudy";

if (place == "Manc" && weather =="Sunny") {
    console.log("Check again");
}
else if (place == "Manc" && weather == "Rain") {
    console.log("obv");
}
else console.log("What?! It isnt raining?");
*/

//---------NOTES---------

/*
let car = "Peugeot";

switch(car) {
    case "Ford":
    case "GM":
        console.log("You've got an American car!");
        break;
    case "Peugeot":
    case "Citroen":
        console.log("You've got a french car");
        break;
    case "Honda":
    case "Toyota":
    case "Suzuki":
        console.log("You have a japanese car");
        break;
    case "Mercedes":
        console.log("You are posh");
    case "volkswagen":
        console.log("german isn't bad");
        break;   
    case "Hyundai":
    case "Kia":
         console.log("South korean cars are getting popular"); 
    default: 
    console.log("Your car isn't in the top ten companies");
}
*/

//-----Notes-----
/*
let favouriteDrinks = [ "Coke", "Fanta", "Sprite" ]
console.log(favouriteDrinks[0]);
console.log(favouriteDrinks[1]);
console.log(favouriteDrinks[2]);
*/

//-----Notes-----
//For Loop

/*
let favouriteDrinks = [ "Coke", "Fanta", "Sprite" ]
for( let i = 0; i < favouriteDrinks.length; i++) {
    console.log(favouriteDrinks[i]);
}
*/

//-----Notes-----

/*
let multiplesTwo = [];
for(let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
        multiplesTwo.push(i);
    }
}

console.log(`numbers divisible by 2 between 0 and 20 are ${multiplesTwo}.`);
*/

//-----Notes-----
/*
let age = 15;

while (age < 17) {
    console.log("you're a child");
    age++;
}
*/

/*
let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Club";

while (currentCard != "Spade") {
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)];

}
console.log(currentCard);
*/

//-----Notes----- 
/*
let coffeeOrder = [
    "Alex - Cortado", "Ben - Cortado", "Charlie - Whatever New"
    ]
    coffeeOrder[1] = "Anne - Vanille Latte";
    
    coffeeOrder.push("Donna - Espresso"); //.push adds to end of an array .pop will replace 
    
    console.log(coffeeOrder);
    
    console.log(coffeeOrder.length);
    */

    /*
    //Take items in a string and seperate them into an array

let drinks = "tea, coffee, lemoande, water";
console.log(drinks);
//Prints - tea, coffee, lemoande, water

let splitDrinks = drinks.split(",");
console.log(splitDrinks);
//Prints - [ 'tea', ' coffee', ' lemoande', ' water' ]
*/

/*
//Declaring variables
const coffeeShop = {
  branch: "Manchester",

  drinks: {
    americano: 2,
    latte: 2.5,
    espresso: 1.5,
    capuccino: 3,
  },

  food: {
    cookie: 1.5,
    muffin: 2,
    sandwich: 3,
  },

  //Function which creates a new array, using the ... spread operator, and functionality to connect the drinks order and cost.
  drinksOrdered(...drinks) {
    let cost = 0;
    const drinksStr = drinks.join(" & ");
    drinks.forEach((drink) => (cost += this.drinks[drink]));
    cost = cost.toString().split(".");
    cost[1] = cost[1].padEnd(2, "0");
    cost = cost.join(".");

    return this.displayOrder(drinksStr, cost);
  },
 //function which again creates a new array and functionality to connect the order and cost.
  foodOrdered(...food) {
    let cost = 0;
    const foodStr = food.join(" & ");

    food.forEach((item) => (cost += this.food[item]));

    cost = cost.toString().split(".");
    cost[1] = cost[1].padEnd(2, "0");
    cost = cost.join(".");

    return this.displayOrder(foodStr, cost);
  },

  //function to create a string to inject the variables using template literals. 
  displayOrder(order, cost) {
    return console.log(
      `Your ${order} will be with you shortly, the total is £${cost}.`
    );
  },
};

coffeeShop.drinksOrdered("capuccino", "espresso");
coffeeShop.foodOrdered("cookie", "muffin");
*/
