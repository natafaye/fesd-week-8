
class Animal {
    constructor(type, name) { // type = "dog"; name = "Spot"
        this.type = type;
        this.name = name;
    }

    pet() {
        alert("petting!")
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super("cat", "Floofy")
        this.color = color;
    }

    takeAPicture() {
        alert("Here's my cat!")
    }
}

const ourCat = new Cat("Floofy", "black")


// CONSTRUCTING
// {
//     type: "dog",
//     name: "Spot"
//     pet() {
//        alert("petting!")
//     }
// }

const animalList = [
    {
        type: "cat",
        name: "Floofy",
        pet: function() {
            alert("petting!")
        }
    },
    {
        type: "horse",
        name: "Horsey",
        pet: function() {
            alert("petting!")
        }
    },
    new Animal("cat", "Floofy"),
    new Animal("horse", "Horsey")
]

console.log(animalList[0])

console.log(animalList[1])




class AcceptedAnswerPrompt {
    constructor(acceptableAnswers) {
        this.acceptableAnswers = acceptableAnswers;
    }

    // Note: Added at the end of class in an after-class question
    isAcceptableAnswer(potentialAnswer) {
        // maybe check case insensitively
        return this.acceptableAnswers.includes(potentialAnswer)
    }

    prompt(question) {
        // keep prompting with the question until they give an answer in the list of acceptable answers
        let answer = prompt(question)

        // check if their answers is acceptable, and keep asking them until it is acceptable
        while(!this.isAcceptableAnswer(answer)) {
            answer = prompt(question + "\nYOUR ANSWER WAS NOT ACCEPTABLE")
        }

        return answer;
    }
}


const yesNoPrompt = new AcceptedAnswerPrompt(["yes", "no"])
console.log(yesNoPrompt)
const shouldDelete = yesNoPrompt.prompt("Are you sure you want to delete?")


const animalPrompt = new AcceptedAnswerPrompt([ "cat", "dog", "fish" ])
const favoriteAnimal = animalPrompt.prompt("What's your favorite animal?")