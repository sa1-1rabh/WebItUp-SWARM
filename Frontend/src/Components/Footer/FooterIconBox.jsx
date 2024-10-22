import React from "react";
import { FaBoxOpen } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { TbRosetteDiscount } from "react-icons/tb";
import { MdOutlineAttachMoney } from "react-icons/md";

const FooterIconBox = () => {
  return (
    <div className="flex w-full bg-slate-100">
      <div className="w-56 h-full"></div>
      <div className="grid grid-cols-4 w-full p-4 border-b mb-10 items-center">
        <div className="pl-12 py-4 border-r flex items-center space-x-2">
          <FaBoxOpen className="text-lg" />
          <p>Everyday fresh products</p>
        </div>
        <div className="pl-10 py-4 border-r flex items-center space-x-2">
          <TbTruckDelivery className="text-lg" />

          <p>Free delivery for order over $70</p>
        </div>
        <div className="pl-20 py-4 border-r flex items-center space-x-2">
          <TbRosetteDiscount className="text-lg" />
          <p>Daily Mega Discounts</p>
        </div>
        <div className="pl-16 py-4 flex items-center space-x-2">
          <MdOutlineAttachMoney className="text-lg" />
          <p>Best price on the market</p>
        </div>
      </div>
      <div className="w-56 h-full"></div>
    </div>
  );
};

export default FooterIconBox;
