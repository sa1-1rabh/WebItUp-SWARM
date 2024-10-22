import React from "react";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import googlePlay from "./google-play.webp";
import appStore from "./app-store.webp";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const FooterContacts = () => {
  return (
    <div className="flex mb-20">
      <div className="w-56 h-full"></div>
      <div className="w-1/2  p-10 border-b">
        <div className="flex items-center">
          <div className="p-4">
            <MdOutlinePermPhoneMsg className="text-xl text-slate-500 border rounded-full border-gray-400 p-2 box-content " />
          </div>
          <div>
            <p className="text-xl">8 800 555-55</p>
            <p className="text-sm text-gray-400">Working 8:00 - 22:00</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="w-1/2 py-10 border-b">
        <div className="flex items-center space-x-2 pt-2">
          <div className="flex flex-col items-end mr-3">
            <p>Download App on Mobile :</p>
            <p className="text-sm text-slate-400">
              15% discount on your first purchase
            </p>
          </div>
          <div className="flex space-x-2">
            <img src={googlePlay} />
            <img src={appStore} />
          </div>
          <div className="flex space-x-2 pl-3">
            <button className="border p-2 rounded-full">
              <FaFacebookF className="text-blue-900" />
            </button>
            <button className="border p-2 rounded-full">
              <FaTwitter className="text-blue-900" />
            </button>
            <button className="border p-2 rounded-full">
              <GrInstagram className="text-blue-900" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-56 h-full"></div>
    </div>
  );
};

export default FooterContacts;
