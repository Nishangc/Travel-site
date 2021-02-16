import React from "react";
import "./CardItem.css";

const CardItem = ({ blog }) => {
  const { label, image, description } = blog.fields;
  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={image.fields.file.url} />
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
