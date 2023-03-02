

class Animal {
    constructor(name, type) { // name = "Fluffy"; type = "cat"
        this.name = name;
        this.type = type;
    }

    pet() {
        alert("petting the animal!")
    }

    feed() {
        alert("feeding the animal!")
    }
}

// in progress object

// make an object with a stamp (class)
const fluffy = new Animal("Fluffy", "cat")
const spot = new Animal("spot", "dog")

// make an object by hand
// const fluffy = {
//     name: "Fluffy",
//     type: "cat",
//     pet() {
//         alert("petting the animal!")
//     },
//     feed() {
//         alert("feeding the animal!")
//     }
// }

// const spot = {
//     name: "Spot",
//     type: "dog",
//     pet() {
//         alert("petting the animal!")
//     },
//     feed() {
//         alert("feeding the animal!")
//     }
// }


// Much more common to make pure property objects by hand
[
    {
        name: "spot",
        type: "dog"
    },
    {
        name: "fluffy",
        type: "cat"
    }
]