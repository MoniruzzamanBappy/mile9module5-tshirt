import React, { useContext } from 'react';
import { RingContext } from './../Grandpa/Grandpa';

const GirlFriend = ({ornament}) => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h1>Girl Friend</h1>
            <p><small>ornament: {ring}</small></p>
        </div>
    );
};

export default GirlFriend;