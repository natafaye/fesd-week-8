
// Class is a blueprint/recipe for making objects
// Method is a function attached to an object
// Method is a function that's in a property

class Something {

    // constructor is a function for putting properties on a new object
    constructor() {
        this.color = "blue"
    }

    sayHi() {
        alert("hi!")
    }
}

// "new" says to stamp out a new object using that class as the blueprint
const myObject1 = new Something()

const myObject2 = {
    color: "blue",

    // this is a method
    sayHi: function() {
        alert("hi!")
    }
}

// Same object made 2 different ways
console.log(myObject1)
console.log(myObject2)

// Object Oriented Programming: MAKE IT ALL METHODS!!!!


// Why objects? 
// Convenient to group information (and possibly functions)


// Why classes?
// In Javascript there's not a strong reason to use them, but it can make sense
// In modern React-y (we'll learn React at the end of the course) Javascript we don't use classes


// Passed by Reference
// Arrays and objects passed by reference
// Does NOT make a copy if you set a new variable to it

const myFavoriteColors = ["green", "red", "blue"] // myFavoriteColors points to this array I just made
const daughterFavoriteColors = myFavoriteColors // daughterFavoriteColors points to the same array from line 47

myFavoriteColors.push("purple")

console.log(myFavoriteColors) // "green", "red", "blue", "purple"
console.log(daughterFavoriteColors) // "green", "red", "blue", "purple"

// Strings, booleans, numbers passed by value
// Sent to new variables as a copy

const myAge = 30
const myHusbandsAge = myAge // copies the number 30 into myHusbandsAge

myAge++

console.log(myAge) // 31
console.log(myHusbandsAge) // 30



// "this" in programming means wherever you are right now
// the object you are currently inside of or connected to

// the word "new" means constructor
// the constructor returns the newly created object


// Generally speaking classes don't "exist"