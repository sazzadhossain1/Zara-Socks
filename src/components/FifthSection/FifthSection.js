import React from "react";
import "./FifthSection.css";
import logoOne from "../../accets/FifthSectionPhoto/logoOne.png";
import logoTwo from "../../accets/FifthSectionPhoto/logoTwo.png";
import logoThree from "../../accets/FifthSectionPhoto/logoThree.png";
import logoFour from "../../accets/FifthSectionPhoto/logoFour.png";

const FifthSection = () => {
  return (
    <div>
      <h1 className="our_valued">Our Valued Customers</h1>
      <div className="fifthSection_logo_div">
        <img src={logoOne} alt="" />
        <img src={logoTwo} alt="" />

        <img src={logoThree} alt="" />
        <img src={logoFour} alt="" />
      </div>
    </div>
  );
};

export default FifthSection;
