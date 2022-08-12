import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://spartacus-demo.eastus.cloudapp.azure.com:8443/medias/Elec-1400x140-Category10-EN-01-1400W.jpg?context=bWFzdGVyfGltYWdlc3wyMDIxOXxpbWFnZS9qcGVnfGltYWdlcy9oYmQvaDYwLzg3OTczMjkzMjYxMTAuanBnfDM5ZWUzNDIyOGMzZGE3MGFhNzIzY2NkYmFjYjIxMzFlMzYxMGQyNzcyOTI1ZmVkM2NlYzQzM2UxMTlhZTU5OGY"
          alt=""
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
