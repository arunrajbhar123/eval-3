import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [status, setStatus] = useState(false);
  let navigate = useNavigate();
  const handleAuth = (newvalue) => {
    setStatus(newvalue);
    console.log(newvalue);
    if(newvalue){
      navigate("/products") ;
    }else{
      navigate("/login") ;
    }
  };
  return (
    <AuthContext.Provider value={{ status, setStatus, handleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
