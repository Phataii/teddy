import React from "react";

import { Link } from "react-router-dom";
function AllTickets({ tickets }) {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center">MY TICKETS</h1>
      <div className="px-56">
        {tickets.map((item, i) => (
          <>
            <section className="">
              <div className="p-5 shadow-2xl border-2 mb-3 border-green-500 bg-gray-100 md:grid grid-cols-3 gap-10">
                <h1 className="text-center text-2xl border border-gray-900">
                  E-TICKETING
                </h1>
                <h2>ID: {item.ticketNo}</h2>
                <h2 className="font-bold">COMPANY: {item.company}</h2>
                <h2 className="font-bold">Name: {item.name}</h2>
                <h2 className="font-bold">From: {item.location}</h2>
                <h2 className="font-bold">To: {item.destination}</h2>
                <h2 className="font-bold">Type: {item.type}</h2>
                <h2 className="font-bold">Date: {item.departureDate}</h2>
                <h2 className="font-bold">Next of Kin: {item.nextOfKin}</h2>
                <h2 className="font-bold">Phone: {item.nextOfKinPhone}</h2>
                {/* <h2 className="font-bold">Price: {item.price}</h2> */}
              </div>
              <button className="bg-green-300 p-2 w-full">Print</button>
            </section>
            <hr />
          </>
        ))}
      </div>
      <Link to="/abc">
        <button className="bg-gray-900 text-white ml-96 h-14 w-48 my-10">
          Go Back
        </button>
      </Link>
    </div>
  );
}

export default AllTickets;
