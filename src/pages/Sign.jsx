import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sign() {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  function handleAlert(event) {
    event.preventDefault();
    setEmail("");
    setp("");
    alert("malumotlar toliq emas");
  }
  return (
    <div>
      <div className="bg-white rounded-xl w-[380px] shadow-2xl mt-32 mx-auto items-center  p-5">
        <h2 className="text-center mb-6 font-bold text-3xl text-black text-opacity-70">
          Login
        </h2>
        <form>
          <label htmlFor="email" className="text-black text-opacity-60 ">
            Email
          </label>
          <br />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className="mt-2 w-full  p-3 rounded-xl border-solid border-2 focus:border-4 outline-none border-gray-300 mb-6 0"
            id="email"
          />
          <br />
          <label htmlFor="passwd" className="text-black text-opacity-60 ">
            Password
          </label>
          <br />
          <input
            onChange={(e) => {
              setPasswd(e.target.value);
            }}
            type="text"
            id="passwd"
            className="mt-2 w-full p-3 rounded-xl border-solid border-2 focus:border-4 outline-none border-gray-300 mb-6 "
          />
        </form>
        <div className="flex-col">
          <div className="mb-8">
            <Link className="w-full bg-blue-500 text-center hover:bg-blue-600 text-white rounded-xl p-3 block">
              LOGIN
            </Link>
          </div>
          <div className="mb-8">
            <Link
              to={"/"}
              className="w-full bg-violet-900 text-center hover:bg-violet-950 text-white rounded-xl mb-4 p-3 block"
            >
              GUEST USER
            </Link>
          </div>
        </div>

        <div className="text-center items-center justify-evenly flex ">
          <p>Not a member yet?</p>
          <Link to={"/register"} className="text-blue-600 hover:underline">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sign;
