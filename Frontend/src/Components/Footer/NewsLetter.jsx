import React from "react";
import { GoMail } from "react-icons/go";
import FooterCoupon from "./Footer-coupon.webp";

const NewsLetter = () => {
  return (
    <div className="bg-blue-700 flex">
      <div className="w-56 h-full"></div>
      <div className="w-1/2 py-16">
        <p className="text-white p-1">$20 discount for your first order</p>
        <p className="text-white text-2xl font-bold p-1">
          Join our newsletter and get...
        </p>
        <p className="text-slate-400 text-sm px-1 py-4">
          Join our email subscription now to get updates <br /> on promotions
          and coupons.
        </p>
        <form className="">
          <div className="relative w-3/4">
            <div className="absolute top-6 left-6 text-lg text-slate-400 ">
              <GoMail />
            </div>
            <input
              placeholder="Enter Your Mail..."
              className="w-full h-16 rounded-md pl-16"
            ></input>
            <div className="absolute right-2 top-2">
              <button
                type="submit"
                className=" bg-blue-700 px-4 py-3 font-semibold rounded-md text-white right-0 "
              >
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="w-1/2 flex p-0">
        <div className="pt-14">
          <img src={FooterCoupon} className="translate-y-1" />
        </div>
      </div>
      <div className="w-56 h-full"></div>
    </div>
  );
};

export default NewsLetter;
