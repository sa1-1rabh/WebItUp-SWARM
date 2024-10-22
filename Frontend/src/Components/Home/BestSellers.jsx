import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import ItemsSlider from "./ItemsSlider";

const BestSellers = () => {
  return (
    <div className="p-4 w-full ">
      <div className="flex w-full justify-between items-center ">
        <div className="">
          <p className="text-lg">BEST SELLERS</p>
          <p className="text-sm text-slate-400">
            Do not miss current offers till end of season.
          </p>
        </div>
        <div>
          <button className="rounded-xl border px-4 py-2 text-sm text-slate-500 flex items-center gap-2 hover:text-slate-600">
            View All <HiArrowLongRight />
          </button>
        </div>
      </div>
      <ItemsSlider />
    </div>
  );
};

export default BestSellers;
