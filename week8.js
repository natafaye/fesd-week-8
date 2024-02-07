// OOP - other languages exclusively
class User {
    constructor(name) {
        this.name = name
    }

    greet() {
        alert("Hello " + this.name + "!")
    }
}

const abigail = new User("Abigail")


// Much more in common Front-End Javascript
const abigail2 = {
    name: "Abigail",
    greet: function() {
        alert("Hello " + this.name + "!")
    }
}