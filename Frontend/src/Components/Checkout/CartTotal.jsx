import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CartTotal = (props) => {
  return (
    <div className="w-2/6 h-full px-16">
      <div className="h-32"></div>
      <div className="border p-4 space-y-2">
        <p className="border-b text-center text-xl font-bold text-red-600 pb-4">
          CART TOTAL
        </p>
        <div className="space-y-2 p-2">
          <div className="flex justify-between font-bold">
            <span className="text-slate-500">SubTotal</span>
            <span className="text-green-600 ">
              ${props.subTotal.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between font-bold">
            <span className="text-slate-500">Estimated For</span>
            <span>United Kingdom</span>
          </div>
          <div className="flex justify-between font-bold">
            <span className="text-slate-500">Shipping</span>
            <span className="font-bold text-orange-500">
              ${props.deliveryPrice.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between font-bold">
            <span className="text-slate-500">TAX</span>
            <span className="text-red-500 font-bold">
              ${props.taxes.toFixed(2)}{" "}
            </span>
          </div>
          <hr />
          <div className="flex justify-between font-bold">
            <span className="text-slate-500">Total</span>
            <span className="text-green-600 font-bold">
              ${(props.subTotal + props.deliveryPrice + props.taxes).toFixed(2)}
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="py-2 bg-red-700 text-white font-bold w-full h-full rounded-md hover:bg-red-600">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
