import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import Slide1 from "./Slide-01.png";
import Slide2 from "./Slide-02.png";
import Slide3 from "./Slide-03.png";
import { FaCircle } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";

const SlidingWindow = () => {
  const SLIDES = [Slide1, Slide2, Slide3];
  const [slideIndex, setSlideIndex] = useState(0);

  function nextSlide() {
    setSlideIndex((idx) => {
      if (idx === SLIDES.length - 1) {
        return 0;
      }
      return idx + 1;
    });
  }

  function prevSlide() {
    setSlideIndex((idx) => {
      if (idx === 0) {
        return SLIDES.length - 1;
      }
      return idx - 1;
    });
  }

  return (
    <div className="w-full h-full relative">
      <button
        onClick={prevSlide}
        className="slider-btn absolute top-0 bottom-0 left-0 z-20 px-3 text-black "
      >
        <FaArrowLeft />
      </button>
      <div className="flex overflow-hidden rounded-lg">
        {SLIDES.map((slide) => {
          return (
            <img
              src={slide}
              className="h-[500px] w-full object-cover flex-shrink-0 flex-grow-0 transition-all ease-in-out duration-300"
              style={{ translate: `${-100 * slideIndex}%` }}
            />
          );
        })}
      </div>
      <button
        onClick={nextSlide}
        className="slider-btn absolute top-0 bottom-0 right-0 z-10 px-3  text-black  "
      >
        <FaArrowRight />
      </button>
      <div className="space-x-2 left-16 absolute bottom-4">
        {SLIDES.map((_, idx) => {
          return (
            <button onClick={() => setSlideIndex(idx)}>
              {idx === slideIndex ? <FaDotCircle /> : <FaCircle />}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SlidingWindow;
