import React,{ createContext ,useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [total, setTotal] = useState(0);
 
const handleTotal=(values)=>{
  setTotal(total+Number(values))
}
console.log(total);
  return <CartContext.Provider value={{total,handleTotal}}>{children}</CartContext.Provider>;
};
