import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <div class="flex justify-center items-center h-screen bg-gray-100">
        <div class="text-center">
          <h1 class="text-6xl font-bold text-red-600">404</h1>
          <p class="text-xl text-gray-700 mt-4"> Sahifa topilmadi.</p>
          <p class="text-lg text-gray-500">
            Iltimos, manzilni tekshirib ko'ring yoki bosh sahifaga qaytib
            o'ting.
          </p>
          <Link
            to="/"
            class="mt-8 inline-block bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
          >
            Bosh Sahifa
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
