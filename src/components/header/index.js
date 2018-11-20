import React from "react";
import Search from "../search";
import Ham from "../button/Ham";
import IconBtn from "../button/IconBtn";
import { ReactComponent as Placeholder } from "../../images/icons/placeholder.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header__start">
            <Ham />
          </div>
          <div className="header__middle">
            <Search />
          </div>
          <div className="header__end">
            <IconBtn title="change location">
              <Placeholder />
            </IconBtn>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
