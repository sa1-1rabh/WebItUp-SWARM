import React, { useEffect, useState } from "react";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";

const CheckoutPage = () => {
  const [subTotal, setSubTotal] = useState(1);
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const [taxes, setTaxes] = useState(0);
  async function calculateAmount() {
    const response = await fetch(
      "http://localhost:8000/cart/get-all-cart-products",
      { method: "GET", credentials: "include" }
    );
    const cartProducts = await response.json();
    if (cartProducts.success) {
      // setCartItems(cartProducts.data);
      let subT = 0;
      cartProducts.data.forEach((element) => {
        // console.log("cartItems->", element);
        subT += element.unitPrice * element.quantity;
      });
      setSubTotal(subT);
      if (subT > 5) {
        setDeliveryPrice(10);
      } else {
        setDeliveryPrice(0);
      }
      setTaxes(subT * 0.18);
      // console.log("subTotal->", subTotal);
    }
  }
  useEffect(() => {
    calculateAmount();
  }, [subTotal]);
  return (
    <div className="px-16 flex">
      <div className="w-4/6 h-full p-4">
        <div>
          <p className="text-5xl font-bold py-2">Your Cart</p>
        </div>

        <CartItems renderBill={calculateAmount} />
      </div>
      <CartTotal
        subTotal={subTotal}
        deliveryPrice={deliveryPrice}
        taxes={taxes}
      />
    </div>
  );
};

export default CheckoutPage;
