import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="model">
          <Link to={`/${item.id}`}>{item.model}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="pin" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <i class="fa-solid fa-gauge"></i>
              <span>{item.mileage}</span>
            </div>
            <div className="feature">
              <i class="fa-solid fa-gear"></i>
              <span>{item.transmission}</span>
            </div>
            <div className="icons">
              <div className="icon">
                <img src="/save.png" alt="save" />
              </div>
              <div className="icon">
                <img src="/chat.png" alt="chat" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
