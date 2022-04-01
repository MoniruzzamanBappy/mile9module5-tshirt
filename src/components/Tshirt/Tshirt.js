import React from 'react';
import './Tshirt.css'

const Tshirt = (props) => {
    const{name, picture, price, gender} =props.tshirt;
    return (
        <div className='tshirt-item'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p><small>Catagory: {gender}</small></p>
            <button onClick={()=>props.handleAddtoCart(props.tshirt)}>Add to Cart</button>
        </div>
    );
};

export default Tshirt;