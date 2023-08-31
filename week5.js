
class Animal {
    constructor(name, type) { // name = "Floofy", type = "cat"
        this.name = name,
        this.type = type
    }

    petAnimal() { 
        alert("I've been petted")
    }
}

console.log("With a class")
console.log(new Animal("Floofy", "cat")) // { name: "Floofy", type: "cat", petAnimal() { alert("I've been petted")} } }
console.log(new Animal("Spot", "dog")) // { name: "Floofy", type: "cat", petAnimal() { alert("I've been petted")} } }
console.log("Without a class")
console.log({ name: "Floofy", type: "cat", petAnimal() { alert("I've been petted")} })
console.log({ name: "Spot", type: "dog", petAnimal() { alert("I've been petted")} })

// Commenting/uncommenting out multiple lines at once: Ctrl + /



// Looping over an array of objects

const animals = [
    {
        id: 0,
        name: "Floofy",
        type: "cat",
        age: 3
    },
    {
        id: 1,
        name: "Spot",
        type: "dog",
        age: 6
    },
    {
        id: 2,
        name: "Lulu",
        type: "bird",
        age: 10
    }
]

// Calculate the total age of all the animals
let totalAge = 0

for(let i = 0; i < animals.length; i++) { // i = 3, totalAge = 19
    totalAge += animals[i].age // RIGHT
}

console.log("Total age is " + totalAge)



const lulu = {
    id: 2,
    name: "Lulu",
    type: "bird",
    age: 10
}

for(let i = 0; i < lulu.length; i++) {
    // never going to run
}


// Looping over an array of objects that's in a property players that's in a Team object that's in a property selectedTeam that's in a Menu object


// Inside the viewTeam method
// These all do the exact same thing

// this.selectedTeam.players.forEach((player, i) => {
//     description += i + ') ' + player.describe() + '\n';
// })

// for(let i = 0; i < this.selectedTeam.players.length; i++) {
//     description += i + ') ' + this.selectedTeam.players[i].describe() + '\n';
// }

// for(let i = 0; i < this.selectedTeam.players.length; i++) {
//     const player = this.selectedTeam.players[i]
//     description += i + ') ' + player.describe() + '\n';
// }

// for(const player of this.selectedTeam.players) {
//     description += i + ') ' + player.describe() + '\n';
// }