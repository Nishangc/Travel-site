import React from "react";
import CardItem from "../CardItem/CardItem";
import "./Cards.css";
import amazon from "../../images/img-9.jpg";
import sahara from "../../images/sahara.jpeg";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations! </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={amazon}
              text="Explore the hidden waterfall deep inside the Amazon jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={sahara}
              text="Explore the sahara desert with your crew"
              label="Adventure"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={amazon}
              text="Explore the hidden waterfall deep inside the Amazon jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={sahara}
              text="Explore the sahara desert with your crew"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={sahara}
              text="Explore the sahara desert with your crew"
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
