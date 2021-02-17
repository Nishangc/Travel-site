import React from "react";
import CardItem from "../CardItem/CardItem";
import "./Photos.css";

const Photos = ({ cards }) => {
  return (
    <div className="cards">
      <h1>SOME OF OUR GOOD WORKS </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {cards.map((photo, index) => (
              <CardItem photo={photo} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Photos;
