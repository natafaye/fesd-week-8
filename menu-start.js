
class Menu {
    start() {
        let selection = null
        while(selection !== "quit") {
            selection = prompt("What?")
            if(selection === "make") {
                // make something
            } else if(selection === "delete") {
                // delete something
            }
        }
    }
}

const menu = new Menu()
menu.start()
console.log(menu) // see what's in your properties