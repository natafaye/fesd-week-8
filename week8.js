// Variables
// Data Types

// Basic Data Types
// string, number boolean
// + - && ||

// Complex Data Types
// objects, array, function
// arrays of objects

// Direct the computer
// if (side quest)
// loops (over and over again)

// Functions
// little machinse (reusable chunks)
// input = parameters
// output = return
// functions calling other functions

// Callback Functions
// array methods = array.map(), array.filter(), array.find()

// Classes
// OOP = paradigm for structuring software


const natalie = {
    id: 12,
    name: "Natalie Childs",
    age: 33,
    favoriteColor: "green",
    jobs: ["coding instructor", "eating things my husband makes"]
}

natalie.jobs[0] // "coding instructor"

const phillip = {
    id: 40,
    name: "Phillip Something",
    age: 40,
    favoriteColor: "red",
    jobs: ["software developer", "playing tennis"]
}

phillip.age // 40

const users = []

users.push(natalie)
users.push(phillip)

users[0].jobs[1] // "eating things my husband makes"




// Class = blueprint/recipe for an object 📃
class Message {
    // a little function for building the object
    constructor(receiverAnswer, textAnswer) { // 2 parameters
        // typically you set up properties in here
        // Take the parameters and put them in properties on "this" object
        // that we're making right now
        this.receiver = receiverAnswer
        this.text = textAnswer
    }
}


// Using a recipe to make a message object
// "new ClassName" think "constructor of ClassName"
const myMessage = new Message("nat", "go away")



// Make the message object by hand
const secondMessage = {
    receiver: "nat",
    text: "go away"
}

console.log("Made with recipe:", myMessage)
console.log("Made by hand:", secondMessage)




const messages = []

for(let i = 0; i < 2; i++) {
    const receiverAnswer = prompt("Who do you want to send it to?")
    const textAnswer = prompt("What is the text of the message?")

    // const = making a new variable
    // newMessage is the name of the variable
    // {} make a new object
    // receiver is a property on that object set to whatever they typed in the prompt
    // text is a property on that object set to whatever they typed in the prompt
    // const newMessage = {
    //     receiver: receiverAnswer,
    //     text: textAnswer
    // }

    messages.push(new Message(receiverAnswer, textAnswer))
}

// Build a string with info about each message
// "nat: go away, phillip: come here, paulette: lovely to have you"

// Looping through an array is most common thing in programming


let allMessagesString = ""

// Basic For Loop
// Loop through messages array and add the text of the message to the allMessagesString
for(let i = 0; i < messages.length; i++) {
    // This kind of array means that "i" will give us an index into each item in the array
    // \n is like an enter
    allMessagesString += messages[i].receiver + ": " + messages[i].text + "\n\n"

    // messages[i] is an object inside the messages array
    // Something like this:
    // messages[i] = {
    //     receiver: receiverAnswer,
    //     text: textAnswer
    // }
}

alert("Here are all the messages: \n\n" + allMessagesString)
console.log(messages)


// MOST IMPORTANT JOB OF THE FRONT END: User see their data


// Make array of colors
let colors = ["red", "blue", "green"]
// Loop through with i being an index into the array
for(let i = 0; i < colors.length; i++) {
    // Log out each item in the array
    console.log(colors[i])
}


// Simple data types
let myAge = 33
let husbandsAge = myAge // copy 33 into husbandsAge
myAge++ // it will only increase my age NOT my husbandsAge

console.log(myAge) // 34
console.log(husbandsAge) // 33


// Complex data types
const myHouse = { color: "red" }
const husbandsHouse = myHouse // points husbandsHouse to the SAME object

myHouse.color = "blue"
console.log("natalie paints her house blue")
console.log(myHouse)
console.log(husbandsHouse)
console.log("mitchell paints the house pink")
husbandsHouse.color = "pink"
console.log(myHouse)
console.log(husbandsHouse)



const myFriends = []
myFriends.push("New friend!") // ALL GOOD


const myPicture = "here's a picture"
const friendPicture = myPicture // make a COPY of the string and put it in this variable

const favoriteRestaurant = { name: "Costa Vida", type: "mexican kind of"}
const friendsRestaurant = favoriteRestaurant // point friendsRestaurant to the SAME object