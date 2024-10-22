import React, { useState } from "react";
import itemSlide1 from "./itemSlide1.jpg";
import itemSlide2 from "./itemSlide2.jpg";
import itemSlide3 from "./itemSlide3.jpg";

const ItemSlidingWindow = (props) => {
  const SLIDE = props.prodImages;
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <div>
      <div className="flex overflow-hidden rounded-lg relative">
        {SLIDE.map((slide) => {
          return (
            <img
              style={{ translate: `${-100 * slideIndex}%` }}
              src={slide}
              className=" w-full object-cover flex-shrink-0 flex-grow-0 transition-all ease-in-out duration-500"
            />
          );
        })}
        <div className="absolute top-2 left-2 bg-blue-500 border text-white font-bold px-3 py-1 text-sm rounded-md">
          24%
        </div>
      </div>
      <div className="flex  justify-center space-x-4">
        {SLIDE.map((slide, idx) => {
          return (
            <button
              onClick={() => setSlideIndex(idx)}
              className={
                "w-16 h-16 border p-1 rounded-md " +
                (idx === slideIndex ? "border-black" : null)
              }
            >
              <img src={slide} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ItemSlidingWindow;
