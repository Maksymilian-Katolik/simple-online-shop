import React from "react";

const Header = ({ cartCount }) => {
  return (
    <header>
      <div class="header-wrap">
        <img src="treasure-chest.png" alt="shop icon" />
        <h1>RANDOM ITEM MARKET</h1>
      </div>
      <p>Items in Cart: {cartCount}</p>
      <p class="vsmall">
        By Maksymilian Katolik & Mikolaj Nietupski {"// "}
        <a href="https://www.flaticon.com/free-icons/loot" title="loot icons">
          Icons by Freepik - Flaticon
        </a>
      </p>
    </header>
  );
};

export default Header;
