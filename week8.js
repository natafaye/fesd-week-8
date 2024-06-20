// class constructor and how that works

// class = object stamp / blueprint
class User {
    // helps with the stamping / creating of the object
    constructor(id, username, amIAdmin) {
        // really common to set up the properties here
        this.id = id;
        this.username = username;
        this.isAdmin = amIAdmin;
    }
}

// use the stamp (class) to make an object
// calls the constructor
let myUser = new User(0, "hello", false)
console.log(myUser);

console.log(
    {
        id: 0,
        username: "hello",
        isAdmin: false,
    }
);
console.log(new User(1, "natalie", true));

// More common in Javascript
// Making by hand
let users = [
    {
        id: 0,
        username: "abby324",
        isAdmin: false,
    },
    {
        id: 1,
        username: "mcp23",
        isAdmin: true,
    },
    {
        id: 3,
        username: "derek55",
        isAdmin: false,
    },
];

// Use the class
let users2 = [
    new User(0, "abby324", false),
    new User(1, "mcp23", true),
    new User(3, "derek55", false),
];
