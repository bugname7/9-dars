import axios from "axios";
import React, { useEffect } from "react";
import homeImg from "../images/homeImg.png";

function Products() {
  useEffect(() => {
    axios(`https://strapi-store-server.onrender.com/api/products`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="bg-blue-50 mt-16 w-[1050px] rounded mx-auto p-6">
        <div className="flex justify-between mb-[30px]">
          <div>
            <label htmlFor="name">Search Products</label>
            <br />
            <input
              type="text"
              className="w-[220px] border-solid		 p-2 rounded-xl focus:outline-none mt-[8px]"
              id="name"
            />
          </div>
          <div>
            <label htmlFor="category">Select Category</label>
            <br />
            <select
              id="category"
              className="w-[220px] border-solid	 focus:outline-none p-2 rounded-xl mt-[8px]"
            >
              <option>All</option>
              <option>Tables</option>
              <option>Chairs</option>
              <option>Kids</option>
              <option>Sofas</option>
              <option>Beds</option>
            </select>
          </div>
          <div>
            <label htmlFor="company">Select Company</label>
            <br />
            <select
              id="company"
              className="w-[220px] focus:outline-none p-2 rounded-xl mt-[8px]"
            >
              <option>All</option>
              <option>Modenza</option>
              <option>Luxora</option>
              <option>Artifex</option>
              <option>Comfora</option>
              <option>Homestead</option>
            </select>
          </div>
          <div>
            <label htmlFor="sort">Sort By</label>
            <br />
            <select
              id="sort"
              className="w-[220px] focus:outline-none p-2 rounded-xl mt-[8px]"
            >
              <option>a-z</option>
              <option>z-a</option>
              <option>high</option>
              <option>low</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <div className="flex gap-[80px]">
              <label htmlFor="price">Select Price</label> <p>$1,000.00</p>
            </div>

            <input
              type="range"
              id="price"
              class="w-[220px] h-5 mt-2  bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex gap-[130px]">
              <span>0</span>
              <span>Max:1,000.00</span>
            </div>
          </div>
          <div className="text-center items-center ">
            <label htmlFor="checkbox" className="text-lg  text-gray-700">
              Free Shipping
            </label>
            <br />
            <input
              type="checkbox"
              id="checkbox"
              className="form-checkbox w-[230px] h-5 mt-1 rounded-2xl text-blue-500 border-blue-500"
            />
          </div>
          <div>
            <button className="text-white w-[220px] rounded-lg hover:bg-blue-700 text-opacity-80 py-1 px-5 bg-blue-500">
              SEARCH
            </button>
          </div>
          <div>
            <button className="text-white w-[220px] rounded-lg text-opacity-80 py-1 px-1 hover:bg-pink-700 bg-pink-600">
              SEARCH
            </button>
          </div>
        </div>
      </div>
      <div className="w-[1000px] rounded mx-auto mt-9 flex justify-between border-b pb-4">
        <div>
          <h4>22 products</h4>
        </div>
        <div class="flex gap-4 ">
          <i class="fa-solid fa-layer-group cursor-pointer   "></i>

          <i class="fa-sharp fa-solid fa-bars cursor-pointer "></i>
        </div>
      </div>
      <div className="w-[1100px] rounded mx-auto p-6 mt-16">
        <div className="flex justify-between cursor-pointer">
          <div className="text-center shadow-md hover:shadow-xl p-4 h-[280px] rounded-lg">
            <img
              src={homeImg}
              className="w-[280px] h-[150px] rounded-xl object-cover mb-9"
              alt=""
            />
            <h3 className="text-2xl tracking-[1px] font-semibold text-teal-900 text-opacity-90 ">
              hello world
            </h3>
            <span className="tracking-[2px] text-sky-800">12345$</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
