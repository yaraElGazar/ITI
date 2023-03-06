// Require modules
const { Ticket, FlightTickets } = require("./tickets");

let ticket1 = new Ticket(1, 120, 300, "cairo", "dubai", "5/3/2023");
let ticket2 = new Ticket(2, 110, 300, "alex", "paris", "5/3/2023");
let ticket3 = new Ticket(3, 100, 300, "cairo", "london", "5/3/2023");

let flightTickets = new FlightTickets();

// Add tickets to the tickets array
flightTickets.add(ticket1);
flightTickets.add(ticket2);
flightTickets.add(ticket3);

// Disolay tickets
console.log("~~~~~~ Display ~~~~~~");
flightTickets.display();

// Get ticket with id = 3
console.log("~~~~~~ Get ticket with id = 3 ~~~~~~");
flightTickets.get(3);

// Update ticket with id = 2, date -> 6/3/2023
console.log("~~~~~~ Update ticket with id = 2, date -> 6/3/2023 ~~~~~~");
flightTickets.update(2, "travelDate", "6/3/2023");
