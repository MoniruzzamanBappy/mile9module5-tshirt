import React from "react";
import Cart from "../Cart/Cart";
import "./Home.css";
import useTshirts from "./../../hooks/useTshirts";
import Tshirt from "../Tshirt/Tshirt";
import { useState } from "react";

const Home = () => {
  const [tshirts, setTshirts] = useTshirts();
  const [cart, setCart] = useState([]);

  const handleAddtoCart = (selectedItem) => {
    const exists = cart.find((item) => item._id === selectedItem._id);
    if (!exists) {
      const newCart = [...cart, selectedItem];
      setCart(newCart); 
    }
    else{
        alert('Alreadey Added')
    }
  };
  const handleRemoveFromCart = (selectedItem) => {
    const newCart = cart.filter((tshirt) => tshirt._id !== selectedItem._id);
    setCart(newCart);
  };
  return (
    <div className="home-container">
      <div className="tshirt-Container">
        {tshirts.map((tshirt) => (
          <Tshirt
            key={tshirt._id}
            tshirt={tshirt}
            handleAddtoCart={handleAddtoCart}
          ></Tshirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Home;
