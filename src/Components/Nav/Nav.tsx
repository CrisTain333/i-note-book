import React from "react";
const { HighlightIcon } = require("@material-ui/icons");

function Header() {
  return (
    <header>
      <h1>
        <HighlightIcon />
        Keeper
      </h1>
    </header>
  );
}

export default Header;
