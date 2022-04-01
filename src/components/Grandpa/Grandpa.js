import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunt from "./../Aunt/Aunt";
import "./Grandpa.css";

export const RingContext = createContext("Diamond Ring");

const Grandpa = () => {
  const [house, setHouse] = useState(13);
  const ornament = "Diamond Ring";
  const handleAddtoBuy = () => {
    const newHouse = house + 1;
    setHouse(newHouse);
  };
  return (
    <RingContext.Provider value={ornament}>
      <article className="grandpa">
        <h1>hello grand pa</h1>
        <button onClick={handleAddtoBuy}>Add A House</button>
        <p>House: {house}</p>
        <article style={{ display: "flex" }}>
          <Father  house={house}></Father>
          <Uncle house={house}></Uncle>
          <Aunt house={house}></Aunt>
        </article>
      </article>
    </RingContext.Provider>
  );
};

export default Grandpa;
