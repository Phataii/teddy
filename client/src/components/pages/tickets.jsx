import React, { useEffect, useState } from "react";
import Tickets from "./ticketsList";
import { Link } from "react-router-dom";
import { requestClient } from "../../utils/request-client";
function Ticket() {
  const [tickets, setTickets] = useState([]);
  async function getTickets() {
    const ticketsRes = await requestClient.get("ticket/");
    setTickets(ticketsRes.data);
  }

  useEffect(() => {
    getTickets();
  }, []);

  return (
    <div>
      <Link to="/abc">
        <button className="bg-gray-900 text-white h-full p-2 text-xl">
          Exit
        </button>
      </Link>

      <Tickets ticket={tickets} />
    </div>
  );
}

export default Ticket;
