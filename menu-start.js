// flights

class Flight {
    constructor(airline, toCity) {
        this.airline = airline
        this.toCity = toCity
    }
}

class FlightMenu {
    constructor() {
        // set up some overall data for the app
        this.flights = []
    }

    start() {
        while (true) { // I can do while true here because I have a return inside that will end the loop
            // some way to allow the user to choose what they want to do
            const selection = prompt("What do you want to do? 1 for create, 2 for delete, 3 for view, 4 for exit")
            if (selection === "1") {
                const airline = prompt("What's the airline?")
                const toCity = prompt("What city is it flying to?")
                const newFlight = new Flight(airline, toCity)
                this.flights.push(newFlight)
            } else if (selection === "2") {
                // delete
            } else if (selection === "3") {
                // view
            } else {
                // they probably want to exit
                alert("Goodbye!")
                return // this will exit the loop (and the whole function)
            }
        }
    }

    // createFlight() {
    //     const airline = prompt("What's the airline?")
    //     const toCity = prompt("What city is it flying to?")
    //     const newFlight = new Flight(airline, toCity)
    //     this.flights.push(newFlight)
    // }
}

const flightMenu = new FlightMenu()
flightMenu.start()