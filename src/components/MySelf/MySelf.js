import React from 'react';
import GirlFriend from './../GirlFriend/GirlFriend';

const MySelf = ({house, ornament}) => {
    return (
        <div>
            
            <h4>MYSELF</h4>
            <p>House: {house}</p>
            <GirlFriend ornament={ornament}></GirlFriend>
        </div>
    );
};

export default MySelf;