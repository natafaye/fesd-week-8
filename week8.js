// shape (or structure) = the property names and types and methods on an object

// class allows us to stamp out objects with the same shape
// In Javascript, classes do not constrain the object after the object is made
class Email {
    constructor(authorName) { // let authorName = "Natalie"
        // You can do whatever you want in here
        // It's just a function
        // What we pretty much always do is set up some properties
        this.author = authorName
        this.read = false

        // "this" means the object we are currently working with (one we're constructing)
    }
}

// {
//     author: "Natalie",
//     read: false
// }

// OOP = what if we put all the functions in an object somewhere
// let's make every function a method

// if you see "new" it's calling a constructor

const specialEmail = new Email("Natalie")
// does the same thing:
// const specialEmail = {
//     author: "Natalie",
//     read: false
// }


const favoriteRestaurant = {
    id: 0,
    name: "Del Taco"
}

const recommendedRestaurant = favoriteRestaurant


// Passed by value = can't be in two variables at once, just copied into another variable
// Strings, booleans, numbers

// 1 IS EQUAL 1

// Passed by reference = not really "in" the variable, it's just pointed to by the variable, so multiple variables can point to the same object or array
// Arrays, objects

// [1, 3] NOT EQUAL [1, 3] if they were made separately


// const listOfTeams = ""
// for (let i = 0; i < this.teams.length; i++) {
//     listOfTeams += this.teams[i].describe() + "\n"
// }
// alert(listOfTeams)