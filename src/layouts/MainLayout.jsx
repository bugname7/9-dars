import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <div>
      <div className="bg-slate-900 py-1 px-1 text-white text-opacity-70 flex gap-5 pl-[1065px]">
        <Link to={"/sign"} className="text-[14px]">
          Sign in / Guest
        </Link>
        <Link to={"/register  "} className="text-[14px]">
          {" "}
          Create Account
        </Link>
      </div>

      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
