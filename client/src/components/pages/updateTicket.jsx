import { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { requestClient } from "../../utils/request-client";
import "antd/dist/antd.css";
import { message } from "antd";

export const UpdateCustomerTicket = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const [ticket, setTicket] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const ticketId = match.params.id;

  useEffect(() => {
    async function fetchTicket() {
      setIsLoading(true);
      const res = await requestClient.get(`ticket/${ticketId}`);

      setTicket(res.data);
    }

    fetchTicket()
      .catch(() => {})
      .finally(() => setIsLoading(false));
  }, [ticketId]);

  async function onFormSubmit(e) {
    e.preventDefault();
    console.log(ticket);

    try {
      const res = await requestClient.put(`/ticket/${ticketId}`, ticket);
      console.log(res);
      history.push("/ticket");
      message.success("Succesful!");
    } catch (err) {
      console.log(err);
      message.error("Something went wrong!");
    }
  }

  const onInputChange = (e) => {
    const { name, value } = e.target;

    setTicket((old) => ({ ...old, [name]: value }));
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading....</p>
      ) : ticket ? (
        <form onSubmit={onFormSubmit} className="mt-10 p-40 ml-32">
          <h2 className="font-bold text-4xl  mb-5">
            <span style={{ color: "orange" }}>Tickets</span>
          </h2>
          <input
            className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            name="name"
            placeholder="Name"
            onChange={onInputChange}
            value={ticket.name}
          />
          <input
            className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            placeholder="Type"
            name="type"
            onChange={onInputChange}
            value={ticket.type}
          />
          <input
            className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="date"
            placeholder="Production Date"
            name="prDate"
            onChange={onInputChange}
            value={ticket.prDate}
          />
          <input
            className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="date"
            name="exDate"
            placeholder="Expiry Date"
            onChange={onInputChange}
            value={ticket.exDate}
          />
          <input
            className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            placeholder="Auth Number"
            name="authnumber"
            onChange={onInputChange}
            value={ticket.authnumber}
          />
          {/* <input
            className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            placeholder="Status"
            name="status"
            onChange={onInputChange}
            value={ticket.status}
          /> */}
          <select
            className="md:w-2/5 w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            onChange={onInputChange}
            value={ticket.status}
            name="status"
          >
            <option>Pending</option>
            <option>Approved</option>
            <option>Declined</option>
          </select>
          <button
            type="submit"
            className="bg-orange-400 w-2/5 h-10 rounded-md shadow-xl ml-64"
          >
            Save Changes
          </button>
        </form>
      ) : (
        <p>Ticket Invalid</p>
      )}
    </div>
  );
};
