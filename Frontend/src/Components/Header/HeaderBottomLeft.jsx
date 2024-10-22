import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChevronRight } from "react-icons/fa";

const HeaderBottomLeft = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);

  return (
    <div className="col-span-4 flex items-center justify-center relative">
      <button
        className=" bg-blue-500 hover:bg-blue-400 border rounded-3xl px-6 py-3 text-white font-bold flex items-center gap-2 group"
        onClick={() => {
          setCategoryOpen(!categoryOpen);
        }}
      >
        <GiHamburgerMenu /> ALL CATEGORIES{" "}
        <FaChevronRight
          className={
            categoryOpen
              ? "group-focus:rotate-90 transition-all ease-in-out"
              : ""
          }
        />
      </button>

      {categoryOpen ? (
        <div className="absolute border h-64 top-16 left-44 flex pt-3 z-10 bg-white">
          <div className=" w-64 ">
            <div className="pt-2 relative group">
              <Link to="/">
                <button className="text-left text-slate-500 w-full p-2 pl-4 pr-4 hover:text-blue-500 text-sm flex items-center justify-between ">
                  Fruits And Vegetables
                  <FaChevronRight />
                </button>
              </Link>

              <div className="absolute border h-64 w-64 pt-3 top-0 left-64 invisible group-hover:visible z-10 bg-white">
                <div>
                  <Link to="/">
                    <button className="text-left text-slate-500 w-full p-2 pl-6 pr-4 hover:text-blue-500 text-sm ">
                      Exotic Fruits And Vegetable
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to="/">
                    <button className="text-left text-slate-500 w-full p-2 pl-6 pr-12 hover:text-blue-500 text-sm ">
                      Fresh Fruits
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to="/">
                    <button className="text-left text-slate-500 w-full p-2 pl-6 pr-12 hover:text-blue-500 text-sm">
                      Cuts And Sprouts
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="pt-2 relative group">
              <Link to="/">
                <button className="text-left text-slate-500 w-full p-2 pl-4 pr-12 hover:text-blue-500 text-sm">
                  Meats & Seafood
                </button>
              </Link>
            </div>

            <div className="pt-2 relative group">
              <Link to="/">
                <button className="text-left text-slate-500 w-full p-2 pl-4 pr-4 hover:text-blue-500 text-sm flex items-center justify-between">
                  Beverages <FaChevronRight />
                </button>
              </Link>

              <div className="absolute border h-64 w-64 pt-3 top-0 left-64 invisible group-hover:visible z-10 bg-white">
                <div>
                  <Link to="/">
                    <button className="text-left text-slate-500 w-full p-2 pl-6 pr-12 hover:text-blue-500 text-sm ">
                      Coffee
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to="/">
                    <button className="text-left text-slate-500 w-full p-2 pl-6 pr-12 hover:text-blue-500 text-sm ">
                      Water
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to="/">
                    <button className="text-left text-slate-500 w-full p-2 pl-6 pr-12 hover:text-blue-500 text-sm">
                      Drink Boxes & Pouches
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default HeaderBottomLeft;
