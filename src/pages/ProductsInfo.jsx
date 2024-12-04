import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ProductsInfo() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://strapi-store-server.onrender.com/api/products/${id}`)
      .then((response) => {
        if (response.status == 200) {
          setProduct(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.status == 404) {
          navigate("/products");
        }
        if (error.status == 500) {
          navigate("/block");
        }
      });
  }, [id]);

  return (
    product.id && (
      <>
        <div className="w-[1040px] mx-auto mt-32 mb-16">
          <div className="flex gap-2 items-center">
            <Link to="/">Home</Link>
            <i className="fa-solid fa-arrow-right"></i>
            <Link to="/products">Products</Link>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <img
                src={product.attributes.image}
                className="w-[500px] h-[400px] mt-8 rounded-xl"
                alt="home img"
              />
            </div>
            <div className="w-[490px] h-auto mt-6">
              <h3 className="font-bold text-cyan-950 mb-3 text-4xl">
                {product.attributes.title}
              </h3>
              <span className="text-2xl font-medium text-black text-opacity-30">
                {product.attributes.company}
              </span>
              <h5 className="mt-3 mb-8 text-2xl text-black text-opacity-60 ">
                {product.attributes.price}$
              </h5>
              <p className="space-x-4 tracking-loose mb-8 text-black text-opacity-80 leading-[30px]">
                {product.attributes.description}
              </p>
              <p className="font-medium">Colors</p>
              <div className="flex mt-5 mb-5 gap-4">
                <div className="h-6 w-6 rounded-full bg-red-500 cursor-pointer border-2 border-red-700 hover:ring-4 hover:ring-red-500"></div>
                <div className="h-6 w-6 rounded-full bg-green-500 cursor-pointer border-2 border-green-700 hover:ring-4 hover:ring-green-500"></div>
                <div className="h-6 w-6 rounded-full bg-blue-500 cursor-pointer border-2 border-blue-700 hover:ring-4 hover:ring-blue-500"></div>
              </div>

              <form>
                <label htmlFor="number" className="font-medium ">
                  Amount
                </label>
                <br />
                <select
                  id="number"
                  className="mb-8 mt-3 w-[300px] p-4 rounded-xl border-2 shadow-slate-900 border-blue-600"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                </select>
              </form>
              <button className="bg-blue-800 text-white text-opacity-70 p-4 rounded-xl">
                ADD TO BAG
              </button>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default ProductsInfo;
