import React from "react";
import "./Navigation.css";

function Navigation() {
  return (
    <header>
      <nav>
        <div className="logo">
          <a>
            <span>Daniomat</span>
          </a>
        </div>
        <div className="menuList">
          <ul>
            <li>
              <a>DODAJ DANIE</a>
            </li>
            <li>
              <a>WYŚWIETL DANIA</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Navigation;
