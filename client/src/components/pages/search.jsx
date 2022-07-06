import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { message } from "antd";
export default function Search() {
  const [tickets, setTickets] = useState([]);
  const [ticketId, setTicketId] = useState("");

  async function searchTicket(e) {
    e.preventDefault();
    try {
      const res = await axios.get(`http://localhost:8000/ticket/${ticketId}`);
      message.success("Valid Ticket");
      setTickets(res.data);
    } catch (err) {
      console.error(err);
      message.error("Ticket cannot be found.");
    }
  }

  return (
    <div className="">
      <form onSubmit={searchTicket} className="mt-56 md:ml-96 ml-3">
        <input
          onChange={(e) => setTicketId(e.target.value)}
          type="text"
          className="md:w-2/5 h-10 shadow-xl border-2 border-gray-700 p-2 mb-3 text-gray-900"
          placeholder="Search For Ticket"
        />
        <input
          type="submit"
          value="Search"
          className="bg-green-500 w-20 h-10 mt-3"
        />
      </form>
      <div className="">
        <h1 className="text-3xl font-bold text-center">MY TICKETS</h1>
        <div className="px-56">
          <section className="">
            <div className="p-5 shadow-2xl border-2 mb-3 border-green-500 bg-gray-100 md:grid grid-cols-3 gap-10">
              <h1 className="text-center text-2xl border border-gray-900">
                E-TICKETING
              </h1>
              <h2>ID: {tickets.ticketNo}</h2>
              <h2 className="font-bold">COMPANY: {tickets.company}</h2>
              <h2 className="font-bold">Name: {tickets.name}</h2>
              <h2 className="font-bold">From: {tickets.location}</h2>
              <h2 className="font-bold">To: {tickets.destination}</h2>
              <h2 className="font-bold">Type: {tickets.type}</h2>
              <h2 className="font-bold">Date: {tickets.departureDate}</h2>
              <h2 className="font-bold">Next of Kin: {tickets.nextOfKin}</h2>
              <h2 className="font-bold">Phone: {tickets.nextOfKinPhone}</h2>
              {/* <h2 className="font-bold">Price: {item.price}</h2> */}
            </div>
            <button className="bg-green-300 p-2 w-full">Print</button>
          </section>
          <hr />
        </div>
        <Link to="/abc">
          <button className="bg-gray-900 text-white ml-96 h-14 w-48 my-10">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
}
