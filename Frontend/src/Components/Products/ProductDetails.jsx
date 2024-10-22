import React, { useState } from "react";
import Description from "./ProductDetails/Description";
import AdditionalInfo from "./ProductDetails/AdditionalInfo";
import Vendor from "./ProductDetails/Vendor";
import Review from "./ProductDetails/Review";

const ProductDetails = () => {
  const [selected, setSelected] = useState(1);
  return (
    <div className=" mt-10 border rounded-xl p-12 bg-white">
      <div className="text-slate-500 space-x-4 font-bold text-lg">
        <button
          className={
            "border px-5 py-2 rounded-full hover:text-green-500 hover:-translate-y-1 hover:shadow-md transition-all" +
            (selected == 1 ? " text-green-500" : "")
          }
          onClick={() => {
            setSelected(1);
          }}
        >
          Description
        </button>
        <button
          className={
            "border px-5 py-2 rounded-full hover:text-green-500 hover:-translate-y-1 hover:shadow-md transition-all" +
            (selected == 2 ? " text-green-500" : "")
          }
          onClick={() => {
            setSelected(2);
          }}
        >
          Additional Info
        </button>
        <button
          className={
            "border px-5 py-2 rounded-full hover:text-green-500 hover:-translate-y-1 hover:shadow-md transition-all" +
            (selected == 3 ? " text-green-500" : "")
          }
          onClick={() => {
            setSelected(3);
          }}
        >
          Vendor
        </button>
        <button
          className={
            "border px-5 py-2 rounded-full hover:text-green-500 hover:-translate-y-1 hover:shadow-md transition-all" +
            (selected == 4 ? " text-green-500" : "")
          }
          onClick={() => {
            setSelected(4);
          }}
        >
          Reviews
        </button>
      </div>
      <div className={selected == 1 ? "visible" : "hidden"}>
        <Description />
      </div>
      <div className={selected == 2 ? "visible" : "hidden"}>
        <AdditionalInfo />
      </div>
      <div className={selected == 3 ? "visible" : "hidden"}>
        <Vendor />
      </div>
      <div className={selected == 4 ? "visible" : "hidden"}>
        <Review />
      </div>
    </div>
  );
};

export default ProductDetails;
