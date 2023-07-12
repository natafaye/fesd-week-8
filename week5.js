

class User {
    
    constructor(name, id) {
        this.id = id
        this.name = name
    }

    greet() { console.log(this.name) }
}

const user = new User("fdsfds", )

const user2 = { id: 0, name: "Natalie "}


// pretend we're in a war class somewhere

class Player {
    constructor(name) {
        this.name = name
        this.score = 0
    }
}

class Game {
    constructor() {

    }

    start() {
        // makes the deck
        let name1 = prompt('Enter name for the first player:');
        const player1 = new Player(name1) // { name: name1, score: 0 }
        let name2 = prompt('Enter name for the second player:');
        const player2 = new Player(name2)


        
        console.log( player1.name + " won!")
    }
}




// this.totalRunTime.seconds = 63
// this.totalRunTime.minutes = 6

if(this.totalRunTime.seconds >= 60) {
    this.totalRunTime.minutes += Math.floor(this.totalRunTime.seconds / 60)
    this.totalRunTime.second %= 60 
}

// this.totalRunTime.seconds = 3
// this.totalRunTime.minutes = 7