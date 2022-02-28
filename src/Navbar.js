import React from "react";
import "./styles/Navbar.css";
import { useEffect } from "react";
function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  function handleScroll(bool) {
    setScrolled(bool);
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        handleScroll(true);
      } else handleScroll(false);
    });
  }, []);

  console.log(scrolled);

  return (
    <div className="navbar__main">
      <div className={`navbar ${scrolled && "nav__black"}`}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="logo"
          className="navbar__logo"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="user"
          className="user__logo"
        />
      </div>
    </div>
  );
}

export default Navbar;
