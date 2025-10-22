
// OOP says every function should be connected to an object (meaning a method)
// In order to do that, we have to put every function on a class, 
// so it will then be connected to an object

// Alternative is: Functional Programmming - stay tuned to Week 13


// Classes are a blueprint or recipe for object(s)

// The class is this -> 📃
class FrenchOnionSoup {
    constructor() {
        console.log("Adding onions")
        console.log("Waiting forever")
    }

    // Method - a function attached to an object
    // (technically right here it's the recipe for that method to be on the objects)
    // From here it CANNOT be called on its own
    takeABite() {
        console.log("Taking a bite of soup")
    }
}

// If a function is on a class (meaning it's a method)
// then the ONLY WAY to use it is to make an object with that class, then use .theFunctionName()

// NO GOOD if it's a method
//takeABite() // ERROR

// The object is this -> 🍲
const myBowl = new FrenchOnionSoup()
myBowl.takeABite()
const myFriendsBowl = new FrenchOnionSoup()
myFriendsBowl.takeABite()




// Why isn't Javascript part of the OOP Cult (this is a joke)
// Javascript allows you to make "free" objects
// Object literals

// We can cook from scratch
const mySoup = {
    ingredients: ["tomato", "onion", "broth"],
    name: "Tomato Soup"
}

// A free function, attached to nothing
// exists on its own
function takeABite(soup) {
    console.log("Taking a bite of " + soup.name)
}


// OOP way
// Pro: standardize making the object
class Email {
    // constructor is the steps to build the object
    // parameters to constructor are what it needs to know to make the object
    constructor(authorParameter, message) { // let authorParameter = "Natalie"; let message = "Hello!"
        // Pretty much always it sets up all the properties
        this.author = authorParameter
        this.message = message
        // Two buckets (variables) with the same name
        // One is a parameter to the constructor
        // One is a property on the under construction object (can only be accessed using something.propertName)

        // this = the object I'm currently inside of
        // What object am I inside of right now? That's what we're talking about
        // this can (generally speaking) NEVER mean the class, only an object made with the class
    }
}

// When you see "new" think "constructor"
const firstEmail = new Email("Natalie", "Hello!")
const anotherEmail = new Email("Corinne", "Hey!")

// More normal Javascript way
// Pro: Easier, and easier to read
const secondEmail = {
    author: "Natalie",
    message: "Hello!"
}
const thirdEmail = {
    autor: "Someone Else", // Javascript doesn't care
    message: "Bye!"
}

// these are the same
console.log(firstEmail)
console.log(secondEmail)



// Basic Data Types
// boolean, string, number
// Passed by Value = they are copied into a new variable

// Complex Data Types
// array, object
// Passed by Reference = the variable is pointed to the object or array

let myFavoriteColor = "green"
let myDaughtersFavoriteColor = myFavoriteColor // copies "green" into the new variable

myDaughtersFavoriteColor = "red"

console.log(myFavoriteColor) // "green"
console.log(myDaughtersFavoriteColor) // "red"

myFavoriteColor = "purple"

console.log(myFavoriteColor) // "purple"
console.log(myDaughtersFavoriteColor) // "red"


let myHouse = { outsideColor: "blue" }
let myHusbandsHouse = myHouse // points the variable to the same "house" (object)

myHouse.outsideColor = "pink"

console.log(myHusbandsHouse) // { outsideColor: "pink" }

myHusbandsHouse.outsideColor = "light purple"

console.log(myHouse) // { outsideColor: "light purple" }


// In OOP we connect our objects together with properties pointed to each other



// menu = {
//     selectedTeam: null / the Lakers team
//     teams: [
//         {
//             name: "Lakers",
//             players: [
//                 {
//                     name: "Mia",
//                     position: "defense"
//                 }
//             ]
//         }
//     ]
// }