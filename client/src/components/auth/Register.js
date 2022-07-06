import React, { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { requestClient } from "../../utils/request-client";
import "antd/dist/antd.css";
import { message } from "antd";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        email,
        password,
        passwordVerify,
      };

      await requestClient.post("/auth", registerData);

      await getLoggedIn();
      history.push("/");
      message.success("User registered successfully");
    } catch (err) {
      console.error(err);
      message.error("Something went wrong");
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
                <h1 className="font-bold text-3xl text-gray-200">WELCOME</h1>
                <h2 className="text-gray-400 text-2xl">Sign Up</h2>
                <form onSubmit={register} className="md:ml-10 ml-5 w-full mt-5">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    className="border-gray-700 w-4/5 shadow-md p-2 mt-1 mb-3"
                  />
                  <br />

                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    className="border-gray-700 w-4/5 shadow-md p-2 mt-1 mb-3"
                  />
                  <br />

                  <input
                    value={passwordVerify}
                    onChange={(e) => setPasswordVerify(e.target.value)}
                    type="password"
                    placeholder="Confirm Password"
                    className="border-gray-700 w-4/5  shadow-md p-2 mt-1 mb-3"
                  />
                  <br />
                  <input
                    type="submit"
                    value="Signup"
                    className="p-2 mt-4 rounded-sm w-2/5 cursor-pointer text-white bg-green-400 opacity-75"
                  />
                </form>
                <p className="p-2 text-gray-300 text-center">
                  Already have an account?{" "}
                  <Link to="/" className="font-bold">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
