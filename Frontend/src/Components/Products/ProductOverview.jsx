import React, { useState } from "react";
import ItemSlidingWindow from "../Home/ItemSlidingWindow/ItemSlidingWindow";
import { FaMinus, FaPlus, FaRegHeart } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { TiStarFullOutline, TiTick } from "react-icons/ti";

const ProductOverview = () => {
  const [itemCount, setItemCount] = useState(1);

  function incrementItem() {
    setItemCount((curr) => curr + 1);
  }

  function decrementItem() {
    if (itemCount > 1) {
      setItemCount((curr) => curr - 1);
    }
  }

  const [weightSelected, setWeightSelected] = useState(1);
  return (
    <div className="grid grid-cols-2 py-8 bg-white rounded-md">
      <div className="">
        <ItemSlidingWindow />
      </div>
      <div className=" p-4 pt-8">
        <h4 className="text-2xl">
          Angie’s Boomchickapop Sweet & Salty Kettle Corn
        </h4>
        <div className="flex text-sm pb-8">
          <div className="flex items-center">
            <span className="text-slate-400">Brands: </span>{" "}
            <span className="border-r pr-3">Frito Lays,Oreo,Walch's</span>
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
        <div className="flex pb-2 items-end gap-2 font-sans ">
          <div className="text-slate-300 line-through font-bold text-2xl">
            $4.20
          </div>
          <div className="text-red-500 font-bold text-3xl">$3.29</div>
        </div>
        <div className="flex py-2 text-green-500 text-xs ">
          <p className="bg-green-200 p-1 px-2 rounded-full">IN STOCK</p>
        </div>
        <p className="py-2 ">
          Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
          malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent
        </p>
        <div className=" py-4 flex space-x-4 items-center text-slate-500">
          <p>Size/Weight :</p>
          <button
            className={
              "border px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-all ease-in-out " +
              (weightSelected == 1 ? " bg-blue-600 text-white" : null)
            }
            onClick={() => setWeightSelected(1)}
          >
            50g
          </button>
          <button
            className={
              "border  px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-all ease-in-out" +
              (weightSelected == 2 ? " bg-blue-600 text-white" : null)
            }
            onClick={() => setWeightSelected(2)}
          >
            100g
          </button>
          <button
            className={
              "border  px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-all ease-in-out " +
              (weightSelected == 3 ? " bg-blue-600 text-white" : null)
            }
            onClick={() => setWeightSelected(3)}
          >
            200g
          </button>
          <button
            className={
              "border  px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-all ease-in-out " +
              (weightSelected == 4 ? " bg-blue-600 text-white" : null)
            }
            onClick={() => setWeightSelected(4)}
          >
            300g
          </button>
          <button
            className={
              "border  px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-all ease-in-out" +
              (weightSelected == 5 ? " bg-blue-600 text-white" : null)
            }
            onClick={() => setWeightSelected(5)}
          >
            500g
          </button>
        </div>
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
            <button className="rounded-full bg-blue-800 hover:bg-blue-600 text-white px-12 py-2">
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

          <div className="flex items-center text-sm py-6">
            <p className="text-slate-400">Category :</p>
            <p className="text-slate-600">Biscuits & Snacks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
