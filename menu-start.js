
class Menu {
    constructor() {
        this.books = []
    }

    start() {
        let selection = null
        while(selection !== "EXIT") {
            selection = prompt("What do you want to do? EXIT or ADD or VIEW")
            if(selection === "ADD") {
                // Add a book
                const bookName = prompt("What's the name of the book?")
                const books = { name: bookName }
                this.books.push(books)
            } else if(selection === "VIEW") {
                // view all the books
                alert("Here are all the books: " + this.books.map(book => book.name))
            }
        }
        alert("Goodbye!")
    }
}

const menu = new Menu()
menu.start()