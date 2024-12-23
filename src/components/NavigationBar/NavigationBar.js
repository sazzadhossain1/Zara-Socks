import React from "react";
import "./NavigationBar.css";
import facebookLogo from "../../accets/MediaLogo/facebook.png";
import instagramLogo from "../../accets/MediaLogo/instagram.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <div className="nav_media_div_parent_div">
        <div className="nav_media_div">
          <div className="media_logo_div">
            <img className="mediaLogo_one" src={facebookLogo} alt="" />
            <img className="mediaLogo_two" src={instagramLogo} alt="" />
          </div>
          <div className="language_div">
            {/* <p>
              Bangladesh (BDT <span className="taka">৳</span>) &nbsp;
              <FontAwesomeIcon icon={faAngleDown} />
            </p>
            <p>
              English <FontAwesomeIcon icon={faAngleDown} />
            </p> */}
          </div>
        </div>
      </div>
      <header>
        <div className="container">
          <input type="checkbox" name="" id="check" />

          <div className="logo-container">
            <h3 className="logo">
              Zara <span>Socks</span>
            </h3>
          </div>

          <div className="nav-btn">
            <div className="nav-links">
              <ul>
                <li className="nav-link" style={{ "--i": ".6s" }}>
                  <Link href="#">Home</Link>
                </li>
                <li className="nav-link" style={{ "--i": ".85s" }}>
                  <Link href="#">
                    About Us &nbsp;
                    <FontAwesomeIcon icon={faAngleDown} />
                  </Link>
                  <div className="dropdown">
                    <ul>
                      <li className="dropdown-link">
                        <Link href="#">Mission and Vision</Link>
                      </li>
                      <li className="dropdown-link">
                        <Link href="#">Team</Link>
                      </li>
                      {/* <li className="dropdown-link">
                        <a href="#">
                          Link 3<i className="fas fa-caret-down"></i>
                        </a>
                        <div className="dropdown second">
                          <ul>
                            <li className="dropdown-link">
                              <a href="#">Link 1</a>
                            </li>
                            <li className="dropdown-link">
                              <a href="#">Link 2</a>
                            </li>
                            <li className="dropdown-link">
                              <a href="#">Link 3</a>
                            </li>
                            <li className="dropdown-link">
                              <a href="#">
                                More<i className="fas fa-caret-down"></i>
                              </a>
                              <div className="dropdown second">
                                <ul>
                                  <li className="dropdown-link">
                                    <a href="#">Link 1</a>
                                  </li>
                                  <li className="dropdown-link">
                                    <a href="#">Link 2</a>
                                  </li>
                                  <li className="dropdown-link">
                                    <a href="#">Link 3</a>
                                  </li>
                                  <div className="arrow"></div>
                                </ul>
                              </div>
                            </li>
                            <div className="arrow"></div>
                          </ul>
                        </div>
                      </li> */}
                      <li className="dropdown-link">
                        <Link href="#">Factory</Link>
                      </li>
                      {/* <div className="arrow"></div> */}
                    </ul>
                  </div>
                </li>
                <li className="nav-link" style={{ "--i": "1.1s" }}>
                  <a href="#">
                    Products &nbsp;
                    <FontAwesomeIcon icon={faAngleDown} />
                  </a>
                  <div className="dropdown">
                    <ul>
                      <li className="dropdown-link">
                        <Link to="#">Men</Link>
                      </li>
                      <li className="dropdown-link">
                        <Link to="#">Women</Link>
                      </li>
                      {/* <li className="dropdown-link">
                        <a href="#">
                          Link 3<i className="fas fa-caret-down"></i>
                        </a>
                        <div className="dropdown second">
                          <ul>
                            <li className="dropdown-link">
                              <a href="#">Link 1</a>
                            </li>
                            <li className="dropdown-link">
                              <a href="#">Link 2</a>
                            </li>
                            <li className="dropdown-link">
                              <a href="#">Link 3</a>
                            </li>
                            <li className="dropdown-link">
                              <a href="#">
                                More<i className="fas fa-caret-down"></i>
                              </a>
                              <div className="dropdown second">
                                <ul>
                                  <li className="dropdown-link">
                                    <a href="#">Link 1</a>
                                  </li>
                                  <li className="dropdown-link">
                                    <a href="#">Link 2</a>
                                  </li>
                                  <li className="dropdown-link">
                                    <a href="#">Link 3</a>
                                  </li>
                                  <div className="arrow"></div>
                                </ul>
                              </div>
                            </li>
                            <div className="arrow"></div>
                          </ul>
                        </div>
                      </li> */}
                      <li className="dropdown-link">
                        <Link to="#">Kids</Link>
                      </li>
                      <li className="dropdown-link">
                        <Link to="#">Sports</Link>
                      </li>
                      <li className="dropdown-link">
                        <Link to="#">Specialty Socks</Link>
                      </li>
                      {/* <div className="arrow"></div> */}
                    </ul>
                  </div>
                </li>
                <li className="nav-link" style={{ "--i": ".85s" }}>
                  <Link href="#">
                    News & Events &nbsp;
                    {/* <FontAwesomeIcon icon={faAngleDown} /> */}
                  </Link>
                  {/* <div className="dropdown">
                    <ul>
                      <li className="dropdown-link">
                        <Link href="#">Our Mission and Vision</Link>
                      </li>
                    </ul>
                  </div> */}
                </li>
                <li className="nav-link" style={{ "--i": ".85s" }}>
                  <Link href="#">
                    Contact Us &nbsp;
                    {/* <FontAwesomeIcon icon={faAngleDown} /> */}
                  </Link>
                </li>
              </ul>
            </div>

            {/* <div className="log-sign" style={{ "--i": "1.8s" }}>
              <a href="#" className="btn transparent">
                Log in
              </a>
              <a href="#" className="btn solid">
                Sign up
              </a>
            </div> */}
          </div>

          <div className="hamburger-menu-container">
            <div className="hamburger-menu">
              <div></div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavigationBar;
