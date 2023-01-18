
class Book {

}

class Menu {
    constructor() {
        // SET UP YOUR INITIAL DATA
        this.bookList = []
    }

    start() {
        let userPick = null
        // Loop until they don't want to keep doing things
        while(userPick !== "LET ME OUT") {
            // Ask them what to do
            userPick = prompt("What do you want to do? Options: MAKE NEW BOOK, DELETE A BOOK, LET ME OUT")
            // Do the thing that matches what they picked
            if(userPick === "MAKE NEW BOOK") {
                this.createBook()
            }
            else if(userPick === "DELETE A BOOK") {
                const index = prompt("What index in the array of books do you want to delete?")
                // TODO: check and make sure they didn't pick -2000 or something
                this.bookList.splice(index, 1)
            }
        }
    }

    createBook() {
        const name = prompt("What's the book's name?")
        const newBook = { name: name } // TODO: use class constructor instead
        this.bookList.push(newBook)
    }
}

const menu = new Menu()
menu.start()