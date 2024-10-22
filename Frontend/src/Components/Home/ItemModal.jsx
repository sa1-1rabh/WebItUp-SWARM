import React from "react";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import { TiStarFullOutline, TiTick } from "react-icons/ti";
import { FaMinus, FaRegHeart } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { GoArrowSwitch } from "react-icons/go";
import ItemSlidingWindow from "./ItemSlidingWindow/ItemSlidingWindow";
import { toast } from "react-toastify";

const ItemModal = (props) => {
  const [itemCount, setItemCount] = useState(
    props.data.productQuantity > 0 ? props.data.productQuantity : 1
  );
  const [enableAddToCart, setEnableAddToCart] = useState(
    props.data.productQuantity > 0 ? false : true
  );

  function incrementItem() {
    if (itemCount < 10) {
      setItemCount((curr) => curr + 1);
    }
  }

  function decrementItem() {
    if (itemCount > 1) {
      setItemCount((curr) => curr - 1);
    }
  }
  const updateQuantity = async () => {
    if (itemCount < 10) {
      await fetch("http://localhost:8000/cart/update-cart-item", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: props.data._id,
          quantity: itemCount,
        }),
      });
      // console.log("increment");
      // setProductQuantity((item) => item + 1);
    }
  };

  async function handleAddToCart() {
    const response = await fetch(
      "http://localhost:8000/cart/add-cart-product",
      {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productName: props.data.productName,
          productId: props.data._id,
          stars: 4,
          unitPrice: props.data.productDiscountedPrice,
          quantity: itemCount,
          productImage: props.data.productImages[0],
          productCategory: props.data.productCategory,
        }),
      }
    );

    const res = await response.json();
    updateQuantity();
    if (res.success) {
      toast.success(res.msg);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  }

  return (
    <div>
      <Dialog
        open={true}
        onClose={() => {
          props.closeModal();
        }}
        className="modal relative"
      >
        <button
          className="border bg-red-500 absolute right-0 px-3 py-2 font-bold mt-[-50px]"
          onClick={() => {
            props.closeModal();
          }}
        >
          X
        </button>

        <div className="border-b">
          <h4 className="text-2xl">{props.data.productName}</h4>
          <div className="flex text-sm pb-8">
            <div className="flex items-center">
              <span className="text-slate-400">Brands: </span>{" "}
              <span className="border-r pr-3">{props.data.productBrands}</span>
            </div>
            <div className="p-1 flex items-center px-3">
              <TiStarFullOutline color="orange" />
              <TiStarFullOutline color="orange" />
              <TiStarFullOutline color="orange" />
              <TiStarFullOutline color="orange" />
              <TiStarFullOutline color="orange" />
              <span className="text-slate-500 pl-1">1 Review</span>
            </div>
            <div className="flex items-center ">
              <span className="text-slate-400 border-l pl-3">SKU: </span>
              <span>BE4CURT</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 mt-8">
          <div className="">
            <ItemSlidingWindow prodImages={props.data.productImages} />
          </div>
          <div className=" p-4 pt-0">
            <div className="flex pb-2 items-end gap-2 font-sans ">
              <div className="text-slate-300 line-through font-bold text-2xl">
                ${props.data.productOriginalPrice}
              </div>
              <div className="text-red-500 font-bold text-3xl">
                ${props.data.productDiscountedPrice}
              </div>
            </div>
            <div className="flex py-2 text-green-500 text-xs ">
              <p className="bg-green-200 p-1 px-2 rounded-full">IN STOCK</p>
            </div>
            <p className="py-2 text-sm">{props.data.productDescription}</p>
            <div>
              <div className="flex items-center space-x-4 py-2">
                <button
                  className="flex w-12 h-12 justify-center items-center border rounded-full bg-slate-200 hover:bg-yellow-300"
                  onClick={decrementItem}
                >
                  <FaMinus />
                </button>
                <p>{itemCount}</p>
                <button
                  className="flex w-12 h-12 justify-center items-center border rounded-full bg-slate-200 hover:bg-yellow-300"
                  onClick={incrementItem}
                >
                  <FaPlus />
                </button>
                <button
                  className="rounded-full bg-blue-800 hover:bg-blue-600 disabled:bg-slate-400 text-white px-12 py-2"
                  onClick={handleAddToCart}
                  disabled={!enableAddToCart}
                >
                  Add To Cart
                </button>
              </div>
              <div className="flex items-center text-sm space-x-2 py-4 text-slate-500">
                <button className="flex items-center border rounded-full p-2 px-3 space-x-1">
                  <FaRegHeart />
                  <p>ADD TO WISHLIST</p>
                </button>
                <button className="flex items-center space-x-1">
                  <GoArrowSwitch className=" rotate-90" />
                  <p>COMPARE</p>
                </button>
              </div>
              <div className="text-sm py-4 border-b">
                <div className="flex items-center">
                  <TiTick color="green" />
                  <p>Type : {props.data.productCategory}</p>
                </div>
                <div className="flex items-center">
                  <TiTick color="green" />
                  <p>MFG : Aug 21,2024</p>
                </div>
                <div className="flex items-center">
                  <TiTick color="green" />
                  <p>LIFE : 70 days</p>
                </div>
              </div>
              <div className="flex items-center text-sm py-6">
                <p className="text-slate-400">Category :</p>
                <p className="text-slate-600">{props.data.productCategory}</p>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ItemModal;
