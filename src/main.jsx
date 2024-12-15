import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductForm from "./pages/ProductForm";
import LoginPage from "./pages/LoginForm.jsx";
import Register from "./pages/RegisterForm.jsx";
import Header from "./pages/Header.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/products/add" element={<ProductForm />} />
          <Route path="products/update/:id" element={<ProductForm />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
