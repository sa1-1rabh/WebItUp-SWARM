import React, { useEffect, useState } from "react";
import CartItemCard from "./CartItemCard";
import { useSelector } from "react-redux";

const CartItems = (props) => {
  // console.log("props->", props);
  const [cartItems, setCartItems] = useState([]);
  async function fetchAllCartProducts() {
    const response = await fetch(
      "http://localhost:8000/cart/get-all-cart-products",
      { method: "GET", credentials: "include" }
    );
    const cartProducts = await response.json();
    if (cartProducts.success) {
      setCartItems(cartProducts.data);
    }
  }
  useEffect(() => {
    fetchAllCartProducts();
  }, []);

  async function handleDeleteAllCartItems() {
    await fetch("http://localhost:8000/cart/delete-all-cart-items", {
      method: "DELETE",
    });
    fetchAllCartProducts();
    props.renderBill();
  }

  // console.log("cartItems->", cartItems);

  return (
    <div>
      <div className="flex justify-between mb-8">
        <p className="text-slate-600 font-bold">
          There are {cartItems?.length} products in your cart
        </p>
        <button
          className="text-slate-400"
          onClick={() => handleDeleteAllCartItems()}
        >
          Clear Cart
        </button>
      </div>
      <div className="flex justify-between bg-slate-300 p-4 font-bold pl-8">
        <div>PRODUCTS</div>
        <div className="flex ">
          <p className="w-28">Unit Price</p>
          <p className="w-28">Quantity</p>
          <p className="w-20">Subtotal</p>
          <p className="w-16">Remove</p>
        </div>
      </div>
      {cartItems?.length > 0 ? (
        cartItems?.map((item, idx) => {
          return (
            <div key={idx}>
              <CartItemCard
                idx={idx}
                data={item}
                render={fetchAllCartProducts}
                renderBill={props.renderBill}
              />
            </div>
          );
        })
      ) : (
        <div className="flex justify-between items-center px-60 py-10">
          <p className="text-2xl">No Products in Cart!</p>
        </div>
      )}
    </div>
  );
};

export default CartItems;
