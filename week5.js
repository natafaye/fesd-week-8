
class RestrictedAnswerPrompt {
    constructor(acceptableAnswers) {
        this.acceptableAnswers = acceptableAnswers
    }

    getAcceptableAnswer(input) {
        return this.acceptableAnswers.find(answer => answer.toLowerCase() === input.toLowerCase())

        // for(let i = 0; i < this.acceptableAnswers.length; i++) {
        //     const answer = this.acceptableAnswers[i]
        //     if(answer.toLowerCase() === input.toLowerCase()) {
        //         return answer
        //     }
        // }

        // for (const answer of this.acceptableAnswers) {
        //     this.acceptableAnswers.push("fdsfds")
        //     if (answer.toLowerCase() === input.toLowerCase()) {
        //         return answer
        //     }
        // }

        //return undefined
    }

    prompt(question) {
        let answer = prompt(question)
        let acceptedAnswer = this.getAcceptableAnswer(answer)
        while (!acceptedAnswer) {
            answer = prompt(question + "\nPick one of these options: " + this.acceptableAnswers.join(", "))
            acceptedAnswer = this.getAcceptableAnswer(answer)
        }
        return acceptedAnswer
    }
}

// function promptRestricted(question, acceptableAnswers) {

//     function getAcceptableAnswer(input) {
//         return acceptableAnswers.find(answer => answer.toLowerCase() === input.toLowerCase())
//     }

//     let answer = prompt(question)
//     let acceptedAnswer = getAcceptableAnswer(answer)
//     while (!acceptedAnswer) {
//         answer = prompt(question + "\nPick one of these options: " + acceptableAnswers.join(", "))
//         acceptedAnswer = getAcceptableAnswer(answer)
//     }
//     return acceptedAnswer
// }


// const yesNoPrompt = new RestrictedAnswerPrompt(["Yes", "No"])
// const shouldDelete = yesNoPrompt.prompt("Are you sure you want to delete?")
// const toGo = yesNoPrompt.prompt("Do you want that to go?")
// if (shouldDelete === "Yes") {
//     alert("Deleted!")
// }

const toGo = promptRestricted("Are you sure you want to delete?", ["Yes", "No"])
const shouldDelete = promptRestricted("Are you sure you want to delete?", ["Yes", "No"])


const animalPrompt = new RestrictedAnswerPrompt(["DOG", "cat", "horse"])
const favoriteAnimal = animalPrompt.prompt("What's your favorite animal?")


const menuPrompt = new RestrictedAnswerPrompt(["1", "2", "3", "4"])






// try { 
//     // talk across the internet
// } catch (error) {
//     alert("We're having problems connecting. We'll try again in 3 seconds")
//     // try again in 3 seconds
// }

// // okay then do other things