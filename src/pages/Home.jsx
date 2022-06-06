import React from "react";
import { Link } from "react-router-dom";
import Products from "../components/Products/Products";
import { AuthProvider } from "../context/AuthContext";

// import {RequiredAuth} from "../hoc/RequiredAuth.jsx";
const Home = () => {
  return (
    <div>
      <AuthProvider>
        <Link to="/products" element={<Products />} />
      </AuthProvider>
  
    </div>
  );
};

export default Home;
