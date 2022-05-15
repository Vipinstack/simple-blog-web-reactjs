import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="headerTiles">
          <span className="headerTitleSm">React & Node</span>
          <span className="headerTitleLg">Blog</span>
        </div>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/2419865/pexels-photo-2419865.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
    </div>
  );
};

export default Header;
