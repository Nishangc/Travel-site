import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./CardItem.css";

const CardItem = ({ photo }) => {
  const history = useHistory();

  const { label, image, description } = photo.fields;
  console.log(image);
  const submitHandler = () => {
    history.push("/services");
  };

  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={image.fields.file.url} onClick={submitHandler} />
        </div>
        <div className="card-text">
          <h2>{label}</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default CardItem;
