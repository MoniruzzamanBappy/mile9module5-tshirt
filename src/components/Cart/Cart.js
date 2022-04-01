import React from 'react';
import './Cart.css'
const Cart = ({cart, handleRemoveFromCart}) => {
    // conditional rendering
    // 1.Element variable
    let command;
    if(cart.length === 0){
        command = <p>Please Select any item</p>
    }
    else{
        command = <p>Thanks for Selected item</p>
    }
    // 2. ternary operator condition ? true : false

    return (
        <div>
            <h1>Selected Item: {cart.length}</h1>
            {
                cart.map(item=><p>{item.name}
            <button onClick={()=>handleRemoveFromCart(item)}>X</button>
            </p>)
            }
            {command}
            {
                cart.length !==4 ? <p>Keep adding</p> : <button>Remove All</button>
            }
            {/* 3. conditional// short hand // && operator  */}
            {cart.length === 3 && <p>thanks and operator</p>}
            {/* 3. conditional// short hand // || operator  */}
            {cart.length === 2 || <p>thanks or operator </p>}
        </div>
    );
};

export default Cart;