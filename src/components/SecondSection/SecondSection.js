import React from "react";
import "./SecondSection.css";
import photoOne from "../../accets/SecondSectionPhoto/photoOne.png";
import photoTwo from "../../accets/SecondSectionPhoto/photoTwo.png";
import photothree from "../../accets/SecondSectionPhoto/photoThree.png";
import SecondSectionCart from "../SecondSectionCart/SecondSectionCart";
const SecondSection = () => {
  const cartInfo = [
    {
      id: 1,
      paragraph: "Bedroom",
      image: photoOne,
    },
    {
      id: 2,
      paragraph: "Fully Furnished With Central Air Conditioner",
      image: photoTwo,
    },
    {
      id: 3,
      paragraph: "Kitchen",
      image: photothree,
    },
  ];
  return (
    <div className="secondSection_parent_div">
      <h1>Our Factory</h1>
      <div className="secondSection_grid_div">
        {cartInfo.map((cart) => (
          <SecondSectionCart key={cart.id} cart={cart}></SecondSectionCart>
        ))}
      </div>
    </div>
  );
};

export default SecondSection;
