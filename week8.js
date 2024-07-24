

// Stamp for an object
// super class
class User {
    constructor(name, roleValue) {
        this.name = name
        this.role = roleValue

        // whatever code you want in here
        // whatever you need to do to get the object set up
    }
}

// another blueprint/stamp
class Teacher extends User { // subclass of user -> more specialized version
    constructor(name) {
        super(name, "teacher") // call the constructor of your extending class
        // super() -> the constructor of the extends class is being called

        // whatever you want here
        this.subject = "programming"
    }
}

// stamp it out
const user1 = new Teacher("Natalie")
const user3 = new User("David", "student")

// new SomeName() that equals constructor

// make it by hand
const user2 = {
    name: "Natalie",
    role: "teacher"
}
const user4 = {
    name: "Robert",
    role: "student"
}

console.log(user1)
console.log(user2)