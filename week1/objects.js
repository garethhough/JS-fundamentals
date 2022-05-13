//----- Notes-----

/*
let offer = "none";
let time = 1200;

const cafe = {
    name: "White sheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: ["Cappucino",
"Latte",
"Filter cofee",
"Tea",
"Hot chocolate"],
breakfastOffer: "Free croissant with coffee",
lunchOffer: "Free drink with surprisingly priced sandwhich",
noOffer: "sorry no offer",

openCafe () {
    if(this.hasSpecialOffers) {
        return "Time for a special offer!";
    }
},
closeCafe () {
    return "We are closed, come back tomorrow"
}
};

if (time<1100) {
    offer = cafe.breakfastOffer;
    console.log(cafe.breakfastOffer);
} else if (time < 1500) {
        offer =cafe.lunchOffer;
        console.log(cafe.lunchOffer);
    };
*/


//-----Notes-----

/*
let day = "saturday";
let alarm ="";

const alarms = {
    weekendAlarm: "no alarm needed",
    weekdayAlarm: "Get up at 7am" 
};

if(day == "saturday" || "sunday") {
    alarm = alarms.weekendAlarm;
    console.log(alarm);
} else {
    alarm == alarms.weekdayAlarm;
    console.log(alarm);
};
*/

// Methods are actions that can be performed on objects.



//-----Activity 1-----

/*
Let’s edit our person object to include…
A function called sayHi and when it’s called, it 
should return “Hello my name is ${this.name}”
*/

/*
const person = {
    name: "Gareth",
    age: 30,
    favouriteSongs: ["Nirvana: Lithium",
"Oasis: Stand by me"],
sayHi(){
    return `Hello, my name is ${this.name}`
}
};

console.log(person.sayHi());



//-----Activity 2-----

/*
Create an object called pet with the key values of:
name, typeOfPet, age, colour
And methods called eat and drink. They should return a 
string saying [Your Pet Name] is eating/drinking.
*/

/*
const pet = {
    name: "George",
    typeOfPet: "Dog",
    age: 3,
    colour: "Black",
    eating(){
        return `${this.name} is eating`},
        drinking(){
            return `${this.name} is drinking`
        }
};

console.log(pet.eating());
console.log(pet.drinking());
*/

//-----Activity 3-----

/*
Create an object called coffeeShop with key values of: 
branch, drinks with prices, food with prices
And methods called drinksOrdered and foodOrdered.
They should return a string saying [Your order] is … with all 
items chosen with costs and total costs.
*/

/*
let order = [];
const coffeeShop = {
        branch: "manchester",
        drinksWithPrices: {
            "tea": 1.00,
            "coffee": 2.00,
            "chocolate": 3.00},
            foodWithPrices: {
                "chips": 1.50,
                "pie": 3.00,
                "fish": 3.00,
                "sausage": 2.50
            },
            drinksOrdered(drink1, drink2) {
                let drinks = Object.keys(this.drinksWithPrices);
                let drinkValues = Object.values(this.drinksWithPrices);
                order.push(drinkValues[drinks.indexOf(drink1)]);
                order.push(drinkValues[drinks.indexOf(drink2)]);
                return `For drinks you've ordered a ${drink1} and a ${drink2}`;
            },
            foodOrdered(food1, food2) {
                let foods = Object.keys(this.foodWithPrices);
                let foodValues = Object.values(this.foodWithPrices);
                order.push(foodValues[foods.indexOf(food1)]);
                order.push(foodValues[foods.indexOf(food2)]);
                return `For food you've ordered  ${food1} and ${food2}`;
            }
        }
        console.log(coffeeShop.drinksOrdered("tea", "chocolate"));
        console.log(coffeeShop.foodOrdered("pie", "chips"));
        let total = 0;
        for (i = 0; i < order.length; i++) {
            total += order[i];
        }


        console.log(`Your total comes to £${total}.`);
*/