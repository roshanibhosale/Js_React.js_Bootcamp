import React from "react";

function Footer() {
  var current_year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright @ {current_year}</p>
    </footer>
  );
}

export default Footer;
