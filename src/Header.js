import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
// import LocationOnIcon from "@material-ui/icons/LocationOn";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  // eslint-disable-next-line
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">
              {" "}
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
