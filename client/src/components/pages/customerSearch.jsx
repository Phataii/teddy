import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { message } from "antd";
export default function UserSearch() {
  const [tickets, setTickets] = useState([]);
  const [ticketNo, setTicketNo] = useState("");

  async function searchTicket(e) {
    e.preventDefault();
    try {
      const t = {
        ticketNo,
      };
      const res = await axios.post("http://localhost:8000/ticket/ticket", t);
      message.success("Ticket available");
      setTickets(res.data);
    } catch (err) {
      console.error(err);
      message.error("No Ticket Found");
    }
  }

  return (
    
    <div
    className="relative pt-16 pb-32 flex content-center items-center justify-center"
    style={{
      minHeight: "100vh",
    }}
  >
    <div
      className="absolute top-0 w-full h-full bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2017/07/30/14/44/bus-2554514_960_720.jpg')",
      }}
    >
      <span
        id="blackOverlay"
        className="w-full h-full absolute opacity-25 bg-black"
      ></span>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-12">
            <form onSubmit={searchTicket} className="mt-56 md:ml-96 ml-3">
        
        <input
          onChange={(e) => setTicketNo(e.target.value)}
          type="text"
          className="md:w-fit h-10 shadow-xl border-2 border-gray-700 p-2 mb-3 text-gray-900"
          placeholder="Search For Ticket"
        />
        <input
          type="submit"
          value="Search"
          className="bg-green-500 w-20 h-10 mt-3"
        />
      </form>
      <div className="flex justify-around">
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
        {/* <h2 className="font-bold">Price: {tickets.price}</h2> */}
      </div>  
      </div>
              {/* <Link to="/admin">
                <button className="bg-gray-900 h-10 text-white mt-10 w-full">
                  Go back
                </button>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
