import React from "react";
import "./ThirdSection.css";
import photoOne from "../../accets/ThirdSectionPhoto/photoOne.jpg";
import photoTwo from "../../accets/ThirdSectionPhoto/photoTwo.jpg";
import photoThree from "../../accets/ThirdSectionPhoto/photoThree.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ThirdSection = () => {
  return (
    <div className="thirdSection_div">
      <h1>Production Process</h1>
      <div className="thirt_section_grid_div">
        <div className="thirdSection_first_cart_div">
          <div className="thirdSection_first_cart_text_div">
            <span>31 Oct 2024</span>
            <p className="third_section_p">
              How to host a fall dinner party in a tiny home
            </p>
            <FontAwesomeIcon className="faArrowRight" icon={faArrowRight} />
          </div>
        </div>
        <div className="thirdSection_second_cart_div">
          <div className="thirdSection_first_cart_text_div">
            <span>31 Oct 2024</span>
            <p className="third_section_p">
              How to host a fall dinner party in a tiny home
            </p>
            <FontAwesomeIcon className="faArrowRight" icon={faArrowRight} />
          </div>
        </div>
        <div className="thirdSection_third_cart_div">
          <div className="thirdSection_first_cart_text_div">
            <span>31 Oct 2024</span>
            <p className="third_section_p">
              How to host a fall dinner party in a tiny home
            </p>
            <FontAwesomeIcon className="faArrowRight" icon={faArrowRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
