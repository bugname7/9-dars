import React, { useState, useEffect } from "react";
import axios from "axios";
import homeImg from "../images/homeImg.png";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://strapi-store-server.onrender.com/api/products`)
      .then((response) => {
        if (response.status === 200) {
          const info = response.data.data.slice(0, 3);
          setProducts(info);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleSearch(id) {
    if (id) {
      navigate(`/products/${id}`);
    }
  }

  const priceHalf = (price) => price / 100;

  return (
    <div>
      <aside className="w-[1050px] mb-60 items-start mx-auto flex justify-between gap-9 mt-16">
        <div className="">
          <h3 className="w-[500px] mt-5 mb-8 font-bold text-6xl text-blue-950 opacity-80">
            We are changing the way people shop
          </h3>
          <p className="w-[500px] text-lg text-cyan-900 font-normal leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repellat explicabo enim soluta temporibus asperiores aut obcaecati
            perferendis porro nobis.
          </p>
          <div className="flex mt-9">
            <Link
              to="/products"
              className="bg-blue-500 text-white text-opacity-90 rounded-lg py-3 px-5 hover:bg-blue-700"
            >
              Our Products
            </Link>
          </div>
        </div>
        <div className="img">
          <img src={homeImg} alt="home img" width="460px" />
        </div>
      </aside>
      <article className="w-[1050px] mb-60 items-start mx-auto mt-16">
        <div className="border-b-2 w-full mb-16 border-gray-200">
          <h2 className="mb-6 text-3xl font-medium text-teal-950 text-opacity-80">
            Featured Products
          </h2>
        </div>
        <div className="flex justify-between">
          {products.map((product) => (
            <div
              onClick={() => {
                handleSearch(product.id);
              }}
              key={product.id}
              className="text-center shadow-md cursor-pointer hover:shadow-xl p-4 h-[280px] rounded-lg"
            >
              <img
                src={product.attributes.image}
                className="w-[280px] h-[150px] rounded-xl object-cover mb-9"
                alt={product.attributes.title}
              />
              <h3 className="text-2xl tracking-[1px] font-semibold text-teal-900 text-opacity-90 ">
                {product.attributes.title}
              </h3>
              <span className="tracking-[2px] text-sky-800">
                {priceHalf(product.attributes.price)}$
              </span>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}

export default Home;
