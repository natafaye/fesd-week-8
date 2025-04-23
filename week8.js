// Blueprint for an object
class User {
    constructor(name, isAdmin) {
        // sets up the properties on the newly made object
        this.id = Math.floor(Math.random() * 1000) // get a random number for the id
        this.name = name // set the property to whatever the parameter was set to
        this.isAdmin = isAdmin
    }
}


// We can make an object by hand
const natalie1 = {
    id: 0,
    name: "Natalie",
    isAdmin: true
}
const natalie3 = {
    id: 1,
    name: "Michele",
    isAdmin: true
}

// We can stamp it out with a constructor
// new ClassName = constructor
const natalie2 = new User("Natalie", true)
const natalie4 = new User("Michele", true)

console.log(natalie1, natalie2)


// method = a property set to a function


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