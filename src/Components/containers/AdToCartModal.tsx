import { Button } from "../ui/button";
import React from "react";

const AdToCart = () => {
  return (
    <React.Fragment>
      <div>
        <h1>hello world</h1>
      </div>
    </React.Fragment>
  );
};

export function CartFunction() {
  return (
    <div className="">
      <h1>Add to cart</h1>
      <div className="">
        <Button className="">Checkout</Button>
      </div>
    </div>
  );
}

export default AdToCart;
