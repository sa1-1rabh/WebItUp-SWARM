import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <div className="flex flex-col p-4 border-2 w-[500px] text-4xl shadow-lg">
        <div className="flex justify-between">
          <p>NAME : </p>
          <p className="font-bold text-red-600">SAURABH SINGH</p>
        </div>
        <div className="flex justify-between">
          <p>BRANCH : </p>
          <p className="font-bold text-red-600">CSE 1</p>
        </div>
        <div className="flex justify-between">
          <p>ROLL NO : </p>
          <p className="font-bold text-red-600">25161</p>
        </div>
        <div className="flex justify-between">
          <p>PHONE : </p>
          <p className="font-bold text-red-600">9315111832</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
