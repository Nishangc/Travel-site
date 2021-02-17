import React from "react";
import { matchPath } from "react-router-dom";
import CardItem from "../CardItem/CardItem";
import "./Cards.css";

const Cards = ({ cards }) => {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations! </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {cards.map(
              (photo, index) =>
                index < 3 && <CardItem photo={photo} key={index} />
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
