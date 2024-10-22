import React from "react";
import { Link } from "react-router-dom";

const HeaderBottomRight = () => {
  return (
    <div className="col-span-8 grid grid-cols-8 mr-2  ">
      <Link to="/home" className="flex items-center justify-center">
        <button className=" uppercase font-bold text-slate-500 hover:bg-slate-200 rounded-lg h-full w-full">
          Home
        </button>
      </Link>
      <div className="group relative z-50">
        <Link
          reloadDocument
          to="/home/listing/breads"
          className="flex items-center justify-center h-full w-full"
        >
          <button className="uppercase font-bold text-slate-500 hover:bg-slate-200 rounded-lg h-full w-full">
            Bread & Bakery
          </button>
          <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:top-12 absolute top-14 mt-4 transition-all ease-in-out bg-white z-20">
            <div className="border w-32 shadow-md">
              <Link to="/home/listing/breads">
                <button className="px-4 py-2 hover:bg-slate-200 w-full text-left text-slate-500 font-bold">
                  Bread
                </button>
              </Link>
              <Link to="/home/listing/breads">
                <button className="px-4 py-2 hover:bg-slate-200 w-full text-left text-slate-500 font-bold">
                  Bakery
                </button>
              </Link>
            </div>
          </div>
        </Link>
      </div>

      <div className="group relative z-50">
        <Link
          reloadDocument
          to="/home/listing/snacks"
          className="flex items-center justify-center h-full w-full"
        >
          <button className="uppercase font-bold text-slate-500 hover:bg-slate-200 rounded-lg h-full w-full">
            Snacks
          </button>
          <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:top-12 absolute top-14 mt-4 transition-all ease-in-out z-20 bg-white">
            <div className="border w-32 shadow-md">
              <Link to="/home/listing/snacks">
                <button className="px-4 py-2 hover:bg-slate-200 w-full text-left text-slate-500 font-bold">
                  Chips
                </button>
              </Link>
              <Link to="/home/listing/snacks">
                <button className="px-4 py-2 hover:bg-slate-200 w-full text-left text-slate-500 font-bold">
                  Pretzels
                </button>
              </Link>
              <Link reloadDocument to="/home/listing/snacks">
                <button className="px-4 py-2 hover:bg-slate-200 w-full text-left text-slate-500 font-bold">
                  Nachos
                </button>
              </Link>
              <Link reloadDocument to="/home/listing/snacks">
                <button className="px-4 py-2 hover:bg-slate-200 w-full text-left text-slate-500 font-bold">
                  Others
                </button>
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div className="group relative z-50">
        <Link
          reloadDocument
          to="/home/listing/fruitsandvegetables"
          className="flex items-center justify-center h-full w-full"
        >
          <button className="uppercase font-bold text-slate-500 hover:bg-slate-200 rounded-lg h-full w-full">
            Vegetables
          </button>
          <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:top-12 absolute top-14 mt-4 transition-all ease-in-out z-20 bg-white">
            <div className="border w-32 shadow-md">
              <Link reloadDocument to="/home/listing/fruitsandvegetables">
                <button className="px-4 py-2 hover:bg-slate-200 w-full text-left text-slate-500 font-bold">
                  Fruits
                </button>
              </Link>
              <Link reloadDocument to="/home/listing/fruitsandvegetables">
                <button className="px-4 py-2 hover:bg-slate-200 w-full text-left text-slate-500 font-bold">
                  Vegetables
                </button>
              </Link>
            </div>
          </div>
        </Link>
      </div>

      <div className="group relative z-50">
        <Link
          reloadDocument
          to="/home/listing/frozenfoods"
          className="flex items-center justify-center h-full w-full"
        >
          <button className="uppercase font-bold text-slate-500 hover:bg-slate-200 rounded-lg h-full w-full">
            Frozen Foods
          </button>
          <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:top-12 absolute top-14 mt-4 transition-all ease-in-out z-20 bg-white">
            <div className="border w-32 shadow-md">
              <Link reloadDocument to="/home/listing/frozenfoods">
                <button className="px-4 py-2 hover:bg-slate-200 w-full text-left text-slate-500 font-bold">
                  Pizza
                </button>
              </Link>
              <Link reloadDocument to="/home/listing/frozenfoods">
                <button className="px-4 py-2 hover:bg-slate-200 w-full text-left text-slate-500 font-bold">
                  Beef
                </button>
              </Link>
              <Link reloadDocument to="/home/listing/frozenfoods">
                <button className="px-4 py-2 hover:bg-slate-200 w-full text-left text-slate-500 font-bold">
                  Veggies
                </button>
              </Link>
              <Link reloadDocument to="/home/listing/frozenfoods">
                <button className="px-4 py-2 hover:bg-slate-200 w-full text-left text-slate-500 font-bold">
                  Others
                </button>
              </Link>
            </div>
          </div>
        </Link>
      </div>

      <div className="group relative z-50">
        <Link
          reloadDocument
          to="/home/listing/biscuits"
          className="flex items-center justify-center h-full w-full"
        >
          <button className="uppercase font-bold text-slate-500 hover:bg-slate-200 rounded-lg h-full w-full">
            Biscuits
          </button>
          <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:top-12 absolute top-14 mt-4 transition-all ease-in-out z-20 bg-white">
            <div className="border w-32 shadow-md">
              <Link reloadDocument to="/home/listing/biscuits">
                <button className="px-4 py-2 hover:bg-slate-200 w-full text-left text-slate-500 font-bold">
                  Biscuits
                </button>
              </Link>
              <Link reloadDocument to="/home/listing/biscuits">
                <button className="px-4 py-2 hover:bg-slate-200 w-full text-left text-slate-500 font-bold">
                  Crackers
                </button>
              </Link>
              <Link reloadDocument to="/home/listing/biscuits">
                <button className="px-4 py-2 hover:bg-slate-200 w-full text-left text-slate-500 font-bold">
                  Waffers
                </button>
              </Link>
              <Link reloadDocument to="/home/listing/biscuits">
                <button className="px-4 py-2 hover:bg-slate-200 w-full text-left text-slate-500 font-bold">
                  Others
                </button>
              </Link>
            </div>
          </div>
        </Link>
      </div>

      <div className="group relative z-50">
        <Link
          reloadDocument
          to="/home/listing/household"
          className="flex items-center justify-center h-full w-full"
        >
          <button className="uppercase font-bold text-slate-500 hover:bg-slate-200 rounded-lg h-full w-full">
            HouseHold
          </button>
          <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:top-10 absolute top-14 mt-4 transition-all ease-in-out z-20 bg-white">
            <div className="border w-32 shadow-md">
              <Link reloadDocument to="/home/listing/household">
                <button className="px-4 py-2 hover:bg-slate-200 w-full text-left text-slate-500 font-bold">
                  HouseHold
                </button>
              </Link>
              <Link reloadDocument to="/home/listing/household">
                <button className="px-4 py-2 hover:bg-slate-200 w-full text-left text-slate-500 font-bold">
                  Blend
                </button>
              </Link>
              <Link reloadDocument to="/home/listing/household">
                <button className="px-4 py-2 hover:bg-slate-200 w-full text-left text-slate-500 font-bold">
                  Others
                </button>
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeaderBottomRight;
