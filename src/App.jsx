import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import ProductsInfo from "./pages/ProductsInfo";

function App() {
  return (
    <div>
      <Routes>
        <Route
          index
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />

        <Route
          path="/products"
          element={
            <MainLayout>
              <Products />
            </MainLayout>
          }
        />

        <Route
          path="/cart"
          element={
            <MainLayout>
              <Cart />
            </MainLayout>
          }
        />
        <Route
          path="/products/:id"
          element={
            <MainLayout>
              <ProductsInfo />
            </MainLayout>
          }
        />
        <Route
          path="*"
          element={
            <MainLayout>
              <ErrorPage />
            </MainLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
