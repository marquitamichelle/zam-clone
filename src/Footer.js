import React from "react";
import "./Footer.css";

function Footer() {
  const scroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      <button onClick={scroll}>Back to top</button>

      <div className="footer__container">
        <div className="footer__stuff">
          <div className="footer__one">
            <div className="footer__title">
              <h2>Get to Know Us</h2>
            </div>
            <div className="footer__text">
              <h4>Careers</h4>
              <h4>Blog</h4>
              <h4>About Buy 'n' Sell</h4>
              <h4>Investor Relations</h4>
              <h4>Grass Shopper Devices</h4>
            </div>
          </div>

          <div className="footer__two">
            <div className="footer__title">
              <h2>Make Money with Us</h2>
            </div>
            <div className="footer__text">
              <h4>Sell products on Buy 'n' Sell</h4>
              <h4>Sell on Buy 'n' Sell Business</h4>
              <h4>Sell apps on Buy 'n' Sell</h4>
              <h4>Become an Affiliate</h4>
              <h4>Advertise Your Products</h4>
              <h4>Self-Publish with Us</h4>
              <h4>Host an Buy 'n' Sell Hub</h4>
              <h4>See More Make Money with Us</h4>
            </div>
          </div>

          <div className="footer__three">
            <div className="footer__title">
              <h2>Buy 'n' Sell Payment Products</h2>
            </div>
            <div className="footer__text">
              <h4>Buy 'n' Sell Business Card</h4>
              <h4>Shop with Points</h4>
              <h4>About Buy 'n' Sell</h4>
              <h4>Reload Your Balance</h4>
              <h4>Buy 'n' Sell Currency Converter</h4>
            </div>
          </div>

          <div className="footer__four">
            <div className="footer__title">
              <h2>Let Us Help You</h2>
            </div>
            <div className="footer__text">
              <h4>Buy 'n' Sell and COVID-19</h4>
              <h4>Your Account</h4>
              <h4>About Buy 'n' Sell</h4>
              <h4>Your Orders</h4>
              <h4>Shipping Rates&nbsp;Policies</h4>
              <h4>Returns &nbsp; Replacements</h4>
              <h4>Manage Your Content and Devices</h4>
              <h4>Buy 'n' Sell Assistant</h4>
              <h4>Help</h4>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;
