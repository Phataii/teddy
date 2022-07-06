import React from "react";
import { Link } from "react-router-dom";
export default function Index() {
  return (
    <div className="text-justify text-gray-600">
      <div className="text-center"></div>

      <p className="p-2 text-gray-700 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="font-bold">
          Signup
        </Link>
      </p>
    </div>
  );
}
