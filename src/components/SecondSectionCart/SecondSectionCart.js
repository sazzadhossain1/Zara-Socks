import React from "react";
import "./SecondSectionCart.css";
import { Link } from "react-router-dom";
const SecondSectionCart = ({ cart }) => {
  const { paragraph, image } = cart;
  return (
    <div className="secondSectionCart_main_parent_div">
      <div className="secondSectionCart_parent_div">
        <div>
          <img className="secondSectionCart_image" src={image} alt="" />
        </div>
        <h2 className="paragraph">{paragraph}</h2>
      </div>
      <Link>more</Link>
    </div>
  );
};

export default SecondSectionCart;
