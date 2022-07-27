import React from "react";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const history = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
          <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;