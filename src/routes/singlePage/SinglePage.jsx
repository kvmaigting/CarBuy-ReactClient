import React from "react";
import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import { singlePostData, userData } from "../../lib/dummydata";
import Map from "../../components/map/Map";

function SinglePage() {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.model}</h1>
                <div className="address">
                  <img src="/pin.png" alt="address" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="user picture" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">Key Details</p>
          <div className="listVertical">
            <div className="feature">
              <i class="fa-solid fa-car-side"></i>
              <div className="featureText">
                <span>Make</span>
                <p>{singlePostData.make}</p>
              </div>
            </div>
            <div className="feature">
              <i class="fa-regular fa-calendar"></i>
              <div className="featureText">
                <span>Year</span>
                <p>{singlePostData.year}</p>
              </div>
            </div>
            <div className="feature">
              <i class="fa-solid fa-gear"></i>
              <div className="featureText">
                <span>Transmission</span>
                <p>{singlePostData.transmission}</p>
              </div>
            </div>
            <div className="feature">
              <i class="fa-solid fa-gas-pump"></i>
              <div className="featureText">
                <span>Fuel</span>
                <p>{singlePostData.fuel}</p>
              </div>
            </div>
            <div className="feature">
              <i class="fa-solid fa-gauge"></i>
              <div className="featureText">
                <span>Mileage</span>
                <p>{singlePostData.mileage}</p>
              </div>
            </div>
            <div className="feature">
              <i class="fa-solid fa-palette"></i>
              <div className="featureText">
                <span>Color</span>
                <p>{singlePostData.color}</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="send a message" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="send a message" />
              Save the Car
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
