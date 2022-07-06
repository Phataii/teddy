import React, { useEffect, useState } from "react";
import AllTickets from "./customerTicketList";
import { requestClient } from "../../utils/request-client";
function CustomerTicket() {
  const [tickets, setTickets] = useState([]);
  async function getTickets() {
    const drugsRes = await requestClient.get("ticket/user");
    setTickets(drugsRes.data);
  }

  useEffect(() => {
    getTickets();
  }, []);

  return (
    <div>
      <AllTickets tickets={tickets} />
    </div>
  );
}

export default CustomerTicket;
