import "./App.css";

import Navbar from "./components/Navbar/Navbar.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import {Routes,Route} from "react-router-dom";
import Products from "./components/Products/Products.jsx";
function App() {
  return (
    <div className="App">
        <Navbar/>
          <Routes>
           <Route path="" element={<Home/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/products" element={<Products/>}/>>
          </Routes>
    </div>
  );
}

export default App;
