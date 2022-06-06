import React,{useEffect,useState,useContext} from "react";
import axios from "axios";
// import {CartContext} from "../../../context/CartContext";
import {CartContext} from "../../../context/CartContext";
const Product = () => {
  // Note: this id should come from api
  // const product = { id: 1 };
  const {handleTotal} = useContext(CartContext);
  const [counter, setCounter] = useState(1);
  const [product, setProduct] = useState([]);
  const [cartStatus, setCartStatus] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:8080/products").then((res) => {
      setProduct(res.data);
      
      // handleTotal(res.data.length);
    });
  }, []);

const handleCartData=(el)=>{
  setCartStatus(true);
  // "productId": 1,
  // "count": 1,
  // "id": 2
// let item={
//   "productId":el.
// }

  axios.post("http://localhost:8080/cartItems",el).then((res)=>{
    console.log(res);
  })
}

useEffect(() => {
  axios.get("http://localhost:8080/cartItems").then((res)=>{
    handleTotal(res.data.length);
  })
}, [])

let obj={
  "count": counter,
}
  return (
    <div>
{product.map((el,i)=>(
  <div key={i}>
    <div data-cy={`product-${el.id}`}>
      <h3 data-cy="product-name">{el.name}</h3>
      <h6 data-cy="product-description">{el.description}</h6>
      <button data-cy="product-add-item-to-cart-button" onClick={()=>handleCartData(obj)}>Add To Cart</button>
    
      {/* {!cartStatus ? <button data-cy="product-add-item-to-cart-button" onClick={()=>handleCartData(obj)}>Add To Cart</button> :  <button data-cy="product-remove-cart-item-button">Remove From Cart</button>} */}
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={()=>setCounter(counter+1)}>+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
            counter
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={()=>{if(counter>1){
          setCounter(counter-1)
        }}}>-</button>
        <button data-cy="product-remove-cart-item-button">Remove From Cart</button>
      </div>
    </div>
  </div>
))}




    </div>
  );
};

export default Product;
