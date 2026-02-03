const books = [
    {
        id: 0,
        title: "Jane Eyre",
        genre: "Classic"
    },
    {
        id: 1,
        title: "Ancillary Justice",
        genre: "Science Fiction"
    },
    {
        id: 2,
        title: "Atomic Habits",
        genre: "Nonfiction"
    },
    {
        id: 3,
        title: "Dune",
        genre: "Science Fiction"
    },
]

// Practice Ideas:
// Map - map each book in this style: "Jane Eyre (Classic)"
// Filter - filter for all Science Fiction books (Ancillary Justice, Dune)
// Find - find the book with the id of 2 (Atomic Habits)

const products = [
    {
        id: 0,
        name: "Doritos",
        row: 1,
        price: 1
    },
    {
        id: 1,
        name: "Fruit Snacks",
        row: 1,
        price: 2
    },
    {
        id: 2,
        name: "Water Bottle",
        row: 2,
        price: 1
    },
    {
        id: 3,
        name: "Power Bar",
        row: 2,
        price: 3
    },
    {
        id: 4,
        name: "Sprite",
        row: 3,
        price: 1
    },
    {
        id: 5,
        name: "Poptart",
        row: 3,
        price: 2
    },
]

// Practice Ideas:
// Map - map each product in this style: "Row 1 - $1 Doritos"
// Filter - filter for all products in row 3 (Sprite, Poptart)
// Filter - filter for all products that are cheaper than $2 (Doritos, Water Bottle, Sprite)
// Find - find the product with the id of 2 (Water Bottle)
// Find - find the product in row 2 with a price of 3 (Power Bar)

const appointments = [
    {
        id: 0,
        startTime: "12 PM",
        endTime: "1 PM",
        date: "Feb 3rd",
        name: "Lunch",
        important: false
    },
    {
        id: 1,
        startTime: "1 PM",
        endTime: "3 PM",
        date: "Feb 3rd",
        name: "Meeting with Boss",
        important: true
    },
    {
        id: 2,
        startTime: "7 PM",
        endTime: "9 PM",
        date: "Feb 4th",
        name: "Date",
        important: true
    },
]

// Practice Ideas:
// Map - map each appointment in this style: "Feb 3rd, 12 PM - 1 PM -- Lunch"
// Filter - filter for all important appointments (Meeting with Boss, Date)
// Filter - filter for all appointments on Feb 3rd (Lunch, Meeting with Boss)
// Find - find the appointment with the id of 2 (Date)
// Find - find the appointment on Feb 3rd that starts at 1 PM (Meeting with Boss)





