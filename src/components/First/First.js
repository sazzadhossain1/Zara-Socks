import React from "react";
import "./First.css";
import { Link } from "react-router-dom";

const First = ({ product }) => {
  const { name, image } = product;

  return (
    <div className="first_cart_div">
      <p>{name}</p>
      <div>
        <img className="first_photo" src={image} alt="" />
      </div>
      <div className="first_more_btn_div">
        <Link className="first_more_btn">
          More <span>→</span>
        </Link>
      </div>
    </div>
  );
};

export default First;
