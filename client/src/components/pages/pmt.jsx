import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

import { FcReadingEbook } from "react-icons/fc";
import { FcProcess } from "react-icons/fc";
import { FcTodoList } from "react-icons/fc";
import { FcEditImage } from "react-icons/fc";

export default function Dashboard() {
  //   const [nav, setNav] = useState(true);
  const { loggedIn } = useContext(AuthContext);
  console.log("This", loggedIn);
  return (
    <div class="bg-secondary-100 text-gray-800 h-full md:h-full">
      <div className="">
        <main class="">
          {/* <div className="card2 h-fit w-full p-2 shadow-2xl"> 
            <h4 class="font-bold text-3xl mt-2 text-red-500">Hi,{loggedIn.email}</h4>
          </div> */}

          <div className="grid grid-cols-4">
          
            <div class="col-span-1 bg-gray-900 h-full">
              {/* Cards go here */}
              
              <div class="hover:shadow-xl bg-gray-500 rounded overflow-hidden shadow-3xl relative mt-14 mb-10 w-48 h-56 mx-auto">
              <FcProcess className="text-4xl mx-auto mt-3" />
                <div className="mt-4">
                  <Link
                    to="/abc"
                    className="text-gray-900 font-bold mr-10"
                  >
                    <button className="bg-gray-700 rounded overflow-hidden shadow-3xl w-32 h-10 ml-8">
                      ABC
                    </button>
                  </Link>
                  <Link
                    to="/gigm"
                    className="text-gray-900 font-bold mr-10"
                  >
                  <button className="bg-gray-700 rounded overflow-hidden shadow-3xl relative w-32 h-10  ml-8 mt-2">
                    GIGM
                  </button>
                  </Link>
                  <Link
                    to="/pmt"
                    className="text-gray-900 font-bold mr-10"
                  >
                  <button className="bg-gray-700 rounded overflow-hidden shadow-3xl relative w-32 h-10  ml-8 mt-2">
                    PMT
                  </button>
                  </Link>
                </div>
              </div>
              {/* <div class="hover:shadow-xl bg-gray-500 rounded overflow-hidden shadow-3xl relative mt-14 w-48 h-24 mx-auto">
                <FcProcess className="text-4xl mx-auto mt-3" />
                <div class="p-4 text-center">Routes</div>
              </div> */}

              <Link to="/ticket/reg" className="text-gray-900 font-bold mr-10">
                <div class="hover:shadow-xl bg-gray-500 rounded overflow-hidden shadow-3xl relative w-48 h-24 mx-auto">
                  <FcReadingEbook className="text-4xl mx-auto mt-3" />
                  <div class="p-4 text-center">Book Ticket</div>
                </div>
              </Link>
              <Link to="/mytickets" className="text-gray-900 font-bold mr-10">
                <div class="hover:shadow-xl bg-gray-500 rounded overflow-hidden shadow-3xl relative w-48 h-24 mx-auto">
                  <FcTodoList className="text-4xl mx-auto mt-3" />
                  <div class="p-4 text-center">View Tickets</div>
                </div>
              </Link>
              {/* <Link to="/allticket" className="text-gray-900 font-bold mr-10">
                <div class="hover:shadow-xl bg-gray-500 rounded overflow-hidden shadow-3xl relative w-48 h-24 mx-auto">
                  <FcEditImage className="text-4xl mx-auto mt-3" />

                  <div class="p-4 text-center">Update Reservation</div>
                </div>
              </Link> */}
            </div>
            <div className="col-span-3">
              <div className="">
              <img
                      src={require("../../images/Pmt.jpg").default}
                      alt="BTC"
                      className=" md:mx-auto"
                    />
                <div>
                  <h2 className="text-center font-bold text-3xl">
                    Peace Mass Transports
                  </h2>
                  <table className="border-separate border border-gray-900 text-center mx-auto  p-5">
                    <thead>
                      <tr>
                        <th className="border border-gray-700">Route(s)</th>
                        <th className="border border-gray-700">
                          Boarding Time(s)
                        </th>
                        <th className="border border-gray-700">
                          Departure Time(s)
                        </th>
                        <th className="border border-gray-700">Type</th>
                        <th className="border border-gray-700">Price</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td className="border border-gray-700">
                          Auchi - Abuja
                        </td>
                        <td className="border border-gray-700">
                          5:30
                          <br /> 6:30
                          <br />
                          7:30
                        </td>
                        <td className="border border-gray-700">
                          6:00
                          <br />
                          7:00
                          <br />
                          8:00
                        </td>
                        <td className="border border-gray-700">
                          Regular
                          <br />
                          Executive
                        </td>
                        <td className="border border-gray-700">
                          N7,000
                          <br /> N9,000
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-700">
                          Abuja - Auchi
                        </td>
                        <td className="border border-gray-700">
                          5:30
                          <br /> 6:30
                          <br />
                          7:30
                        </td>
                        <td className="border border-gray-700">
                          6:00
                          <br />
                          7:00
                          <br />
                          8:00
                        </td>
                        <td className="border border-gray-700">
                          Regular
                          <br />
                          Executive
                        </td>
                        <td className="border border-gray-700">
                          N7,000
                          <br /> N9,000
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-700">
                          Abuja - Lagos
                        </td>
                        <td className="border border-gray-700">
                          5:30
                          <br /> 6:30
                          <br />
                          7:30
                        </td>
                        <td className="border border-gray-700">
                          6:00
                          <br />
                          7:00
                          <br />
                          8:00
                        </td>
                        <td className="border border-gray-700">
                          Regular
                          <br />
                          Executive
                        </td>
                        <td className="border border-gray-700">
                          N13,000
                          <br /> N16,000
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-700">
                          Lagos - Auchi
                        </td>
                        <td className="border border-gray-700">
                          5:30
                          <br /> 6:30
                          <br />
                          7:30
                        </td>
                        <td className="border border-gray-700">
                          6:00
                          <br />
                          7:00
                          <br />
                          8:00
                        </td>
                        <td className="border border-gray-700">
                          Regular
                          <br />
                          Executive
                        </td>
                        <td className="border border-gray-700">
                          N13,000
                          <br /> N15,000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h1 className="text-red-500 text-center">Note: Luggage must not exceede 20kg</h1>
                
                <h1 className="text-red-500 text-center">-Passengers must come with their tickets</h1>
                <h1 className="text-red-500 text-center">-Seats will be allocated upon boarding</h1>
                <h1 className="text-red-500 text-center">-Passengers must be around for ticket confirmation at least 30mins before boarding time</h1>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
