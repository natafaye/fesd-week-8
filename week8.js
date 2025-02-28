
// Class is like a stamp for an object
class Email {
    // constructor is a magic word, this has to be called that
    constructor(banana, text) { // let banana = "Natalie"; let text = "Hey there!"
        // inside the constructor we set up any properties
        // FYI: "this" is a little buggy in Javascript
        // "this" = whatever object I'm currently inside of
        // we can only use "this" inside a method
        this.author = banana
        this.text = text
        this.read = false
        // this.doSomething = function() {
        //     alert("Something!")
        // }
    }

    // This will just put this function in a property called doSomething (so it'll be a method)
    markAsRead() {
        this.read = true
    }
}

// method = a function that's in a property on an object

// the word new means we're going to call a constructor function
const email1 = new Email("Natalie", "Hey there!")
const email2 = { 
    author: "Natalie", 
    text: "Hey there!", 
    read: false, 
    markAsRead: function() {
        this.read = true
    }
}

console.log(email1)
console.log(email2)


// Simple Data Types
// boolean, string, number
// actually go in the variable
// passed around by copying them ("by value")
// picture on your phone "passed by value"

let number = 3
let specialNumber = number
number++
specialNumber += 5

console.log(number) // 4
console.log(specialNumber) // 8

// Complex Data Types
// object, array
// only pointed to by the variable
// passed around by giving the address or pointer to the thing ("by reference")
// restaurant "passed by reference"

let mom = { name: "Natalie", age: 33 } // sets mom to a pointer to that object I just made
let teacher = mom // sets teacher to point to the same object that mom is pointing to

teacher.age = 34

console.log(mom) // { name: "Natalie", age: 34 }
console.log(teacher) // { name: "Natalie", age: 34 }

// Be careful checking equality with objects and arrays
// { id: 0 } === { id: 0 } this is false
// [0, 1, 2] === [0, 1, 2] this is false

// CLASSES DON'T EXIST (generally speaking)
// you can't do something with the class
// classes don't have methods, they don't have properties (generally speaking)
// you can't eat the recipe, you have to use it to make food, then eat that



const menu = {
    teams: [
        {
            name: "Lakers",
            players: [
                {
                    name: "Mia",
                    position: "defense"
                }
            ]
        }
    ]
}

menu.teams[0].players[0].name // "Mia"