

class Book {
    constructor(title) {
        this.title = title
    }

}

class Menu {
    constructor() {
        this.bookList = []
    }

    start() {
        // keep asking the user what they want to do and then doing that thing until they say to stop
        let selection = null
        while(selection !== "QUIT") {
            // ask the user what to do
            selection = prompt("What do you want to do?\n\nOptions: ADD, DELETE, VIEW, QUIT")
            // do it
            if(selection === "ADD") {
                const title = prompt("What's the title")
                const newBook = new Book(title)
                this.bookList.push(newBook)
            }
            else if(selection === "DELETE") {
                const titleToDelete = prompt("Which one do you want to delete?")
                const indexToDelete = this.bookList.findIndex(book => book.title === titleToDelete) // find and returns the index of where it found it
                this.bookList.splice(indexToDelete, 1) // remove 1 thing from the indexToDelete spot in the array
            }
            else if(selection === "VIEW") {
                const bookListString = this.bookList.map(book => book.title).join("\n")
                alert("BOOKS\n\n" + bookListString)
            }
        }
        alert("Good riddance!")
    }
}

const menu = new Menu()
menu.start()