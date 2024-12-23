import React from "react";
import "./SixSection.css";
import photoOne from "../../accets/SixSectionPhoto/photoOne.png";
import { Link } from "react-router-dom";
const SixSection = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <div className="six_parent_div">
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
                <button className="six_DOWNLOAD">
                  DOWNLOAD PRODUCT CATALOG
                </button>
              </Link>
              <br />
              <Link className="Check_our">
                Check our showroom <span>→</span>
              </Link>
            </div>
          </div>
          <div className="six_section_text_div">
            <h2>The next generation is here. Explore our amazing models.</h2>
            <p>
              Get ready to embark on your journey towards a simpler, more
              sustainable lifestyle. Leave your email to download our product
              catalog or configure reserve in the store.
            </p>
            <div>
              <Link>
                <button className="six_DOWNLOAD">
                  DOWNLOAD PRODUCT CATALOG
                </button>
              </Link>
              <br />
              <Link className="Check_our">
                Check our showroom <span>→</span>
              </Link>
            </div>
          </div>
          <div className="six_section_text_div">
            <h2>The next generation is here. Explore our amazing models.</h2>
            <p>
              Get ready to embark on your journey towards a simpler, more
              sustainable lifestyle. Leave your email to download our product
              catalog or configure reserve in the store.
            </p>
            <div>
              <Link>
                <button className="six_DOWNLOAD">
                  DOWNLOAD PRODUCT CATALOG
                </button>
              </Link>
              <br />
              <Link className="Check_our">
                Check our showroom <span>→</span>
              </Link>
            </div>
          </div>
          {/* <div className="six_p_div">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              maiores quo iste ut animi, quam nobis, voluptates nam recusandae
              placeat provident voluptatum labore cum nesciunt nemo est
              doloremque possimus officiis!
            </p>
          </div>
          <div className="six_p_div">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              ipsum dignissimos repellat nulla accusamus minus dolore
              necessitatibus distinctio quae? Adipisci vero assumenda quo
              voluptatem quod praesentium incidunt rerum explicabo voluptate.
            </p>
          </div> */}
          {/* <img className="six_photoOne" src={photoOne} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default SixSection;
