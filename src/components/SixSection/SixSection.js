import React from "react";
import "./SixSection.css";
import photoOne from "../../accets/SixSectionPhoto/photoOne.png";
import { Link } from "react-router-dom";
const SixSection = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <div className="six_flex_div">
        <div className="six_section_text_div">
          <h2>The next generation is here. Explore our amazing models.</h2>
          <p>
            Get ready to embark on your journey towards a simpler, more
            sustainable lifestyle. Leave your email to download our product
            catalog or configure reserve in the store.
          </p>
          <div>
            <Link>
              <button className="six_DOWNLOAD">DOWNLOAD PRODUCT CATALOG</button>
            </Link>
            <Link className="Check_our">
              Check our showroom <span>→</span>
            </Link>
          </div>
        </div>
        <img className="six_photoOne" src={photoOne} alt="" />
      </div>
    </div>
  );
};

export default SixSection;
