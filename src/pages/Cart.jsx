import React, { useState } from "react";
import homeImg from "../images/homeImg.png";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div>
      <div className="w-[1050px] mx-auto border-b border-gray-200 mt-20 ">
        <h2 className="text-cyan-950 opacity-80 mb-5 text-4xl font-medium">
          Shopping Cart
        </h2>
      </div>
      <div className="mt-6 w-[1050px] mx-auto flex gap-[100px]">
        <div>
          <img src={homeImg} width="140px" alt=" img" />
        </div>
        <div>
          <h4 className="font-medium text-black text-opacity-60 mb-2">
            {" "}
            contemporary sofa
          </h4>
          <p className="text-black text-opacity-30 mb-3">Comfora</p>
          <span className="text-black text-opacity-60">color :</span>
        </div>
        <div>
          <label htmlFor="amount" className="text-black text-opacity-70 ">
            Amount
          </label>
          <br />
          <select
            id="amount"
            className="border-2 rounded-xl w-[60px] px-1  mt-2 pr-1 mb-2"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </select>
          <br />
          <a href="#" className="text-blue-500 hover:underline">
            remove
          </a>
        </div>
        <div>
          <p className="font-medium text-black text-opacity-60">$94.99 </p>
        </div>
        <div className="w-[350px]   ">
          <div className="bg-blue-50  p-8 rounded-xl mb-8">
            <div className="flex justify-between border-b-2 mb-2">
              <p className="mb-2 text-black text-opacity-60 text-xs">
                Subtotal{" "}
              </p>
              <p className="text-xs font-medium">$94.99</p>
            </div>
            <div className="flex justify-between border-b-2 mb-2">
              <p className="mb-2 text-black text-opacity-60 text-xs">
                Shipping{" "}
              </p>
              <p className="text-xs font-medium">$5.00</p>
            </div>
            <div className="flex justify-between border-b-2 mb-4">
              <p className="mb-2 text-black text-opacity-60 text-xs">Tax </p>
              <p className="text-xs font-medium">$9.50</p>
            </div>
            <div className="flex justify-between ">
              <p className="mb-2 text-black text-opacity-60 ">Order Total</p>
              <p>$109.49</p>
            </div>
          </div>
          <div className="w-full">
            <Link
              to="/sign"
              className="block  hover:bg-blue-700 rounded-xl text-center text-white text-opacity-90 bg-blue-600 mt-5 p-3"
            >
              PLEASE LOGIN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
