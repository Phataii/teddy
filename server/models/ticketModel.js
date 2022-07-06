const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  userId: { type: String },
  company: {
    type: String,
  },
  name: {
    type: String,
  },
  location: {
    type: String,
  },
  destination: {
    type: String,
  },
  departureDate: {
    type: String,
  },
  nextOfKin: {
    type: String,
  },
  nextOfKinPhone: {
    type: String,
  },
  price: {
    type: String,
  },
  type: {
    type: String,
  },
  ticketNo: {
    type: String,
  },
});

const Ticket = mongoose.model("ticket", ticketSchema);

module.exports = Ticket;
