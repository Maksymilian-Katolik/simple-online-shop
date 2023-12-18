import React from "react";

const Header = ({ cartCount }) => {
  return (
    <header>
      <h1>Simple Online Shop</h1>
      <p>Items in Cart: {cartCount}</p>
    </header>
  );
};

export default Header;
