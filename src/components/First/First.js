import React from "react";
import "./First.css";
import { Link } from "react-router-dom";

const First = ({ product }) => {
  const { name, image } = product;

  return (
    <div className="first_cart_div">
      <p>{name}</p>
      <img className="first_photo" src={image} alt="" />
      <Link>More</Link>
    </div>
  );
};

export default First;
