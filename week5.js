

// const email = {
//     id: 0,
//     author: "Antalie",
//     message: "Hi!",
//     read: false,
//     markRead() {
//         this.read = true
//     }
// }
const email = makeEmailObject("Antalie", "Hi!")

const anotherEmail = {
    id: 27,
    athor: "Antalie",
    text: "Goobye!",
    read: false,
    markRead() {
        this.read = true
    }
}

const emailFromSue = new Email("Sue", "I'm ")


// Basically a constructor
function makeEmailObject(authorParam, messageParam) {
    return {
        id: 12,
        author: authorParam,
        message: messageParam
    }
}

class Email {
    constructor(authorParam, messageParam) {
        this.id = 12
        this.author = authorParam
        this.message = messageParam
        this.read = false
    }

    markRead() {
        this.read = true
    }
}


// CONSTRUCTING
// {
//     id: 12,
//     author: whatever is in author param
//     message: whatever is in the message param
    // markRead() {
    //     this.read = true
    // }
// }


class VendingMachine {
    constructor(items) {
        this.items = items;
        this.startingMoney = 0;
        this.inventory = 20
    }
}





class Animal {
    constructor(type, name) {
        this.type = type
        this.name = name
    }

    feed() {

    }
}

class Cat extends Animal {
    constructor(name) {
        super("cat", name)
    }

    playWithLaser() {

    }
}


const fluffy = new Cat("Fluffy")






class Button {
    constructor() {

    }

    onClick() {

    }
}

// CONSTRUCTING
// {
//     onClick() {

//     }
// }

const myButton = {
    onClick() {

    }
}

// const pets = [
//     new Animal("cat", "Floofy"),
//     new Animal("horse", "Horsey")
// ]

const pets = [
    {
        type: "cat",
        name: "Floofy"
    },
    {
        type: "horse",
        name: "Horsey"
    },
]