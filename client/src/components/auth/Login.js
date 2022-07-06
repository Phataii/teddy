import React, { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { requestClient } from "../../utils/request-client";
import "antd/dist/antd.css";
import { message } from "antd";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
      };

      await requestClient.post("/auth/login", loginData);

      await getLoggedIn();
      history.push("/abc");
      message.success("Login successful");
    } catch (err) {
      console.error(err);
      message.error("Something went wrong!");
    }
  }

  return (
    <div className="">
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
              "url('https://cdn.pixabay.com/photo/2021/01/12/07/03/bus-5910571_960_720.jpg')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <form onSubmit={login} className="mt-56">
                  <h2 className="text-gray-200 text-2xl">
                    LOGIN TO YOUR TICKETING SYSTEM
                  </h2>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    className="border p-2 w-full mb-6"
                  />
                  <br />

                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    className="border p-2 w-full mb-3"
                  />
                  <br />

                  <input
                    type="submit"
                    value="Login"
                    className=" w-48 p-2 ml-20 rounded-sm cursor-pointer text-white bg-green-400 opacity-75"
                  />
                  <p className="p-2 text-gray-400 text-center">
                    Don't have an account?{" "}
                    <Link to="/register" className="font-bold">
                      Signup
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
