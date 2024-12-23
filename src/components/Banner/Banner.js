import React from "react";
import "./Banner.css";
import video from "../../accets/BannerVodeo/bannerVideo.mp4";

const Banner = () => {
  return (
    <div className="banner_parent_div">
      <div className="overlay"></div>
      <video className="video" src={video} autoPlay loop muted />
      <div className="banner_container">
        {/* <h1>Welcome</h1>
        <p>To my site.</p> */}
      </div>
    </div>
  );
};

export default Banner;
