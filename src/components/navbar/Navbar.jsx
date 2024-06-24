import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;

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
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="user image"
            />
            <span>John Doe</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Sign in</a>
            <a href="/" className="register">
              Sign up
            </a>
          </>
        )}
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
