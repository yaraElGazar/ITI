class Ticket {
  constructor(id, seatNum, flightNum, depAirport, arrAirport, travelDate) {
    this.id = id;
    this.seatNum = seatNum;
    this.flightNum = flightNum;
    this.depAirport = depAirport;
    this.arrAirport = arrAirport;
    this.travelDate = travelDate;
  }
}

class FlightTickets {
  tickets = [];

  add(ticket) {
    this.tickets.push(ticket);
  }

  display() {
    for (let i = 0; i < this.tickets.length; i++) {
      console.log(this.tickets[i]);
    }
  }

  get(id) {
    for (let i = 0; i < this.tickets.length; i++) {
      if (this.tickets[i].id === id) {
        console.log(this.tickets[i]);
      }
    }
  }

  update(id, prop, value) {
    for (let i = 0; i < this.tickets.length; i++) {
      if (this.tickets[i].id === id) {
        this.tickets[i][prop] = value;
        console.log(`Ticket after update: `);
        console.log(this.tickets[i]);
      }
    }
  }
}

module.exports = {
  Ticket,
  FlightTickets,
};
