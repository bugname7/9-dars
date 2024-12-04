import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sign() {
  return (
    <div>
      <div className="bg-white rounded-xl w-[380px] shadow-2xl mt-32 mx-auto items-center  p-5">
        <h2 className="text-center mb-6 font-bold text-3xl text-black text-opacity-70">
          Register
        </h2>
        <form>
          <label htmlFor="name" className="text-black text-opacity-60 ">
            Username
          </label>
          <br />

          <input
            type="text"
            className="mt-2 w-full  p-3 rounded-xl border-solid border-2 focus:border-4 outline-none border-gray-300 mb-6 0"
            id="name"
          />
          <br />
          <label htmlFor="email" className="text-black text-opacity-60 ">
            Email
          </label>
          <br />
          <input
            className="mt-2 w-full p-3 rounded-xl border-solid border-2 focus:border-4 outline-none border-gray-300 mb-6 "
            type="email"
            id="email"
          />
          <br />
          <label htmlFor="passwd" className="text-black text-opacity-60 ">
            Password
          </label>
          <br />
          <input
            type="text"
            id="passwd"
            className="mt-2 w-full p-3 rounded-xl border-solid border-2 focus:border-4 outline-none border-gray-300 mb-6 "
          />
        </form>
        <Link className="w-full bg-blue-500 text-center text-white mb-4 hover:bg-blue-600 rounded-xl p-3 block">
          REGISTER
        </Link>

        <div className="text-center items-center justify-evenly flex ">
          <p>Already a member?</p>
          <Link to={"/sign"} className="text-blue-600 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sign;
