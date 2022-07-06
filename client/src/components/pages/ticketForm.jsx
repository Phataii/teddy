import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { message } from "antd";
import { useHistory } from "react-router-dom";

function makeid() {
  var text = "";
  var TAC = "CPS-";
  var n = "";
  var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (var i = 0; i < 5; i++)
    text += alpha.charAt(Math.floor(Math.random() * alpha.length));
  n = TAC + text;
  return n;
}


//console.log(makeid());
function TicketsForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState(" ");
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [nextOfKin, SetNextOfKin] = useState("");
  const [nextOfKinPhone, SetnextOfKinPhone] = useState(" ");
  const [price, setPrice] = useState();
  const [type, setType] = useState("");
  const [ticketNo] = useState(makeid());
  const history = useHistory();


  console.log(price)
  async function CreateTicket(e) {
    e.preventDefault();
    
    try {
      const Ticket = {
        name,
        location,
        destination,
        departureDate,
        nextOfKin,
        nextOfKinPhone,
        price,
        company,
        ticketNo,
        type
      };
      
      await axios.post("http://localhost:8000/ticket/", Ticket, {
        withCredentials: true,
      });
      message.success("Ticket created");
      history.push("/abc");
    } catch (err) {
      console.error(err);
      message.error("Something went wrong");
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
                <form onSubmit={CreateTicket}>
                  <h2 className="font-bold text-4xl text-center mb-5 mt-14">
                    Travel Details
                  </h2>
                  <select
                    className="w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
                    onChange={(e) => {
                      setCompany(e.target.value);
                    }}
                    value={company}
                    name="company"
                  >
                    <option>Company</option>
                    <option>ABC Transports</option>
                    <option>God Is Good Motors</option>
                    <option>Peace Mass Transit</option>
                    
                  </select>
                  <br />
                  <input
                    className="w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
                    type="text"
                    placeholder="Name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    value={name}
                  />
                  <br />

                  <select
                    className="w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
                    onChange={(e) => {
                      setLocation(e.target.value);
                    }}
                    value={location}
                    name="location"
                  >
                    <option>From</option>
                    <option>Abuja</option>
                    <option>Auchi</option>
                    <option>Lagos</option>
                    <option>Port Harcourt</option>
                    <option>Bayelsa</option>
                  </select>
                  <br />
                  <select
                    className="w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
                    onChange={(e) => {
                      setDestination(e.target.value);
                    }}
                    value={destination}
                    name="destination"
                  >
                    <option>To</option>
                    <option>Abuja</option>
                    <option>Auchi</option>
                    <option>Lagos</option>
                    <option>Port Harcourt</option>
                    <option>Bayelsa</option>
                  </select>
                  <br />
                  <select
                    className="w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                    value={type}
                    name="type"
                  >
                    <option>Type</option>
                    <option>Regular</option>
                    <option>Executive</option>
                    
                  </select>
                  <input
                    className="w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
                    type="date"
                    placeholder="Departure Date"
                    onChange={(e) => {
                      setDepartureDate(e.target.value);
                    }}
                    value={departureDate}
                  />
                  <br />
                  <input
                    className="w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
                    type="text"
                    placeholder="Next of kin"
                    onChange={(e) => {
                      SetNextOfKin(e.target.value);
                    }}
                    value={nextOfKin}
                  />
                  <br />
                  <input
                    className="w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
                    type="number"
                    placeholder="Next of kin phone number"
                    onChange={(e) => {
                      SetnextOfKinPhone(e.target.value);
                    }}
                    value={nextOfKinPhone}
                  />
                  <br />
                  {/* <select
            className="w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            onChange={(e) => {
              setseatNo(e.target.value);
            }}
            value={seatNo}
            name="status"
          >
            <option>SEAT 02</option>
            <option>SEAT 03</option>
            <option>SEAT 04</option>
            <option>SEAT 04</option>
            <option>SEAT 05</option>
            <option>SEAT 06</option>
            <option>SEAT 07</option>
            <option>SEAT 08</option>
            <option>SEAT 09</option>
            <option>SEAT 10</option>
          </select> */}
                  <br />
                  <button
                    type="submit"
                    className="bg-green-400 w-full h-10 rounded-md shadow-xl"
                  >
                    Proceed
                  </button>
                  <br />
                </form>
                <Link to="/abc">
                  <button className="bg-gray-900 h-10 text-white mt-10 w-full">
                    Go back
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketsForm;
