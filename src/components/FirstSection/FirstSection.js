import React from "react";
import "./FirstSection.css";
import First from "../First/First";

import photoOne from "../../accets/FirstSectionPhoto/photoOne.png";
import photoTwo from "../../accets/FirstSectionPhoto/photoTwo.jpg";
import photoThree from "../../accets/FirstSectionPhoto/photoThree.jpg";
import photoFour from "../../accets/FirstSectionPhoto/photoFour.jpg";

const FirstSection = () => {
  const products = [
    {
      id: 1,
      name: "Menue",
      image: photoOne,
    },
    {
      id: 2,
      name: "Womens",
      image: photoTwo,
    },
    {
      id: 3,
      name: "Kids",
      image: photoThree,
    },
    {
      id: 4,
      name: "Sports",
      image: photoFour,
    },
  ];
  return (
    <div className="firstSection_parent_div">
      <h1>
        Tailored Solutions for Every Need <br />
        Empower Your Journey with Nestron
      </h1>
      <div className="firstSection_grid_div">
        {products.map((product) => (
          <First key={product.id} product={product}></First>
        ))}
      </div>
    </div>
  );
};

export default FirstSection;
