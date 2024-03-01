
// object made by hand


// OOP
// other languages they're always doing this
// classes = blueprints (stamp) for objects
class Email {
    constructor(text) {
        this.id = 0
        this.text = text // this is super common but looks weird
        this.read = false
    }

    markEmailRead() {
        this.read = true
    }
}

// OOP
const email1 = new Email("frdsfdsfsd") // calls the constructor of Email

// tends to be what we do in Javascript
const email2 = {
    id: 0,
    text: "frdsfdsfsd",
    read: false,
    markEmailRead() {
        this.read = true
    }
}

console.log("email1", email1)
console.log("email2", email2)