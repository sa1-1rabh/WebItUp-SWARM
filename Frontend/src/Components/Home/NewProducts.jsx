import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import ItemsGrid from "./ItemsGrid";

const NewProducts = () => {
  return (
    <div className="p-4 w-full ">
      <div className="flex w-full justify-between items-center ">
        <div className="">
          <p className="text-lg">NEW PRODUCTS</p>
          <p className="text-sm text-slate-400">
            New products with updated stocks.
          </p>
        </div>
        <div>
          <button className="rounded-xl border px-4 py-2 text-sm text-slate-500 flex items-center gap-2 hover:text-slate-600">
            View All <HiArrowLongRight />
          </button>
        </div>
      </div>
      <ItemsGrid />
    </div>
  );
};

export default NewProducts;
