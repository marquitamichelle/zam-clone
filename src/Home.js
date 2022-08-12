import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://www.4sightassociates.com/wp-content/uploads/2021/06/ecommerce-image-e1623179968395.jpeg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Waterpik Aquarius Water Flosser Professional For Teeth, Gums, Braces, Dental Care, Electric Power With 10 Settings, 7 Tips For Multiple Users And Needs, ADA Accepted, White WP-660
            "
            price={59.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/719pUQCxnmL._SL1500_.jpg"
          />
          <Product
            id="49538094"
            title="Colgate Optic White Overnight Teeth Whitening Pen, Teeth Stain Remover to Whiten Teeth, 35 Nightly Treatments, 0.08 Fl Oz"
            price={23.72}
            rating={4}
            image="https://m.media-amazon.com/images/I/71H2qSWwxqL._SX679_.jpg"
          />
        </div>

        <div className="home__row">

        <Product
            id="4903850"
            title="2022 Apple iPhone SE (64 GB, Midnight) [Locked] + Carrier Subscription"
            price={429.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61TOWf11+jL._FMwebp__.jpg"
            />
    
        <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />

          <Product
            id="23445930"
            title="2021 Apple MacBook Pro (14-inch, Apple M1 Pro chip with 8‑core CPU and 14‑core GPU, 16GB RAM, 512GB SSD) - Space Gray"
            price={1799.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61vFO3R5UNL._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Sony 65 Inch 4K Ultra HD TV A80K Series: BRAVIA XR OLED Smart Google TV with Dolby Vision HDR and Exclusive Features for The Playstation® 5 XR65A80K- 2022 Model"            
            price={1998.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81JoZeM2V2L._AC_SX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;