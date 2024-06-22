import React, { useState } from "react";
import "./navbar.scss";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>CarBuy</span>
        </a>
        <a href="/">Shop</a>
        <a href="/">Sell</a>
        <a href="/">Contact</a>
        <a href="/">About</a>
      </div>
      <div className="right">
        <a href="/">Sign in</a>
        <a href="/" className="register">
          Sign up
        </a>
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="menu"
            onClick={() => {
              setOpen(!open);
            }}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Shop</a>
          <a href="/">Sell</a>
          <a href="/">Contact</a>
          <a href="/">About</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}
