import React, { useState } from "react";
import {
  TfiLayoutGrid2Alt,
  TfiLayoutGrid3Alt,
  TfiLayoutGrid4Alt,
} from "react-icons/tfi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAngleDown } from "react-icons/fa";
// import { handleGridColChange } from "./Listing.jsx";

const ViewControls = (props) => {
  const [sortDropdown, setSortDropdown] = useState(false);
  const [numberDropdown, setNumberDropdown] = useState(false);

  const [sortBy, setSortBy] = useState("Sort by Latest");
  const [productNum, setProductNum] = useState(12);

  function handleSortByChange(e) {
    setSortBy(e.target.innerText);
    setSortDropdown(false);
  }
  function handleproductNumChange(e) {
    setProductNum(e.target.innerText);
    setNumberDropdown(false);
  }

  return (
    <div className="bg-slate-100 flex justify-between p-5 px-8 mt-6   rounded-md">
      <div className=" flex  text-lg items-center space-x-2 ">
        <button
          onClick={() => props.setter(1)}
          className={props.cols == 1 ? " text-black" : " text-slate-300"}
        >
          <GiHamburgerMenu className="w-6 h-6 " />
        </button>
        <button
          onClick={() => props.setter(2)}
          className={props.cols == 2 ? " text-black" : " text-slate-300"}
        >
          <TfiLayoutGrid2Alt className="w-5 h-5" />
        </button>
        <button
          onClick={() => props.setter(3)}
          className={props.cols == 3 ? " text-black" : " text-slate-300"}
        >
          <TfiLayoutGrid3Alt className="w-5 h-5" />
        </button>
        <button
          onClick={() => props.setter(4)}
          className={props.cols == 4 ? " text-black" : " text-slate-300"}
        >
          <TfiLayoutGrid4Alt className="w-6 h-6" />
        </button>
      </div>
      <div className="flex space-x-2">
        <div className="mr-4 rounded-sm bg-slate-100 relative">
          <button
            onClick={() => setSortDropdown(!sortDropdown)}
            className="flex items-center space-x-2"
          >
            <p>{sortBy}</p>
            <FaAngleDown />
          </button>
          {sortDropdown ? (
            <ul className="absolute bg-white top-10 left-[-40px] py-7 w-56 shadow-md rounded-sm text-sm space-y-2 z-20">
              <li>
                <button
                  className="w-full text-left px-7 text-slate-700 hover:text-blue-400"
                  onClick={handleSortByChange}
                >
                  Sort by Popularity
                </button>
              </li>
              <li>
                <button
                  className="w-full text-left px-7 text-slate-700 hover:text-blue-400"
                  onClick={handleSortByChange}
                >
                  Sort by Latest
                </button>
              </li>
              <li>
                <button
                  className="w-full text-left px-7 text-slate-700 hover:text-blue-400"
                  onClick={handleSortByChange}
                >
                  Sort by Average Rating
                </button>
              </li>
            </ul>
          ) : null}
        </div>
        <div className="flex border-l pl-8 space-x-2 relative">
          <p>Show</p>
          <button
            onClick={() => setNumberDropdown(!numberDropdown)}
            className="flex items-center space-x-2"
          >
            <p>{productNum}</p>
            <FaAngleDown />
          </button>
          {numberDropdown ? (
            <ul className="absolute bg-white top-10 left-4 py-7 w-18 shadow-md rounded-sm text-sm space-y-2 z-20">
              <li>
                <button
                  className="w-full text-left px-7 text-slate-700 hover:text-blue-400"
                  onClick={handleproductNumChange}
                >
                  6
                </button>
              </li>
              <li>
                <button
                  className="w-full text-left px-7 text-slate-700 hover:text-blue-400"
                  onClick={handleproductNumChange}
                >
                  12
                </button>
              </li>
              <li>
                <button
                  className="w-full text-left px-7 text-slate-700 hover:text-blue-400"
                  onClick={handleproductNumChange}
                >
                  18
                </button>
              </li>
              <li>
                <button
                  className="w-full text-left px-7 text-slate-700 hover:text-blue-400"
                  onClick={handleproductNumChange}
                >
                  24
                </button>
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ViewControls;
