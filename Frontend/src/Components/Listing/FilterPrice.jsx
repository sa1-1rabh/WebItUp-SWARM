import React, { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const FilterPrice = () => {
  const [val, setVal] = useState([100, 6000]);

  return (
    <div className="mt-10">
      <p className="pb-4">FILTER BY PRICE</p>
      <RangeSlider
        min={100}
        max={6000}
        onInput={setVal}
        step={5}
        defaultValue={[100, 6000]}
      />
      <div className="flex justify-between pt-2">
        <span className="flex">
          <p className="text-slate-500">Low: </p>
          <p className="font-bold text-green-600"> {val[0]}</p>
        </span>
        <span className="flex">
          <p className="text-slate-500">High: </p>
          <p className="font-bold text-green-600">{val[1]}</p>
        </span>
      </div>
    </div>
  );
};

export default FilterPrice;
