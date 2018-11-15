import React from "react";
import Search from "../search";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header__start">Menu</div>
          <div className="header__middle">
            <Search />
          </div>
          <div className="header__end">Change location</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
