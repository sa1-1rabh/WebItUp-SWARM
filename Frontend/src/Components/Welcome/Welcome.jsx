import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(70vh)] bg-gradient-to-r from-teal-400/70 to-blue-800/70 ">
      <div className="border p-8 h-[400px] w-4/5 bg-gradient-to-br from-blue-200 via-blue-100 to-purple-300 shadow-xl rounded-3xl ">
        <p className="text-5xl font-bold ">Welcome to SWARM</p>
        <p className="text-2xl pt-6">
          Discover a seamless shopping experience with our cutting-edge
          e-commerce platform.
        </p>
        <p className="text-2xl pt-3 ">
          Designed to offer fast, secure, and user-friendly browsing, our
          platform provides a wide range of products with optimized performance.
          We ensure that your shopping journey is both convenient and protected.
        </p>
        <p className=" text-red-500 text-2xl pt-14  font-bold ">
          Join us as we revolutionize online shopping, blending technology and
          convenience to meet your every need!
        </p>
        <div className="flex justify-end items-center p-4 space-x-6 text-2xl">
          <Link to="http://localhost:5173/login">
            <button className="border bg-blue-700 text-white w-32 h-16 rounded-xl hover:bg-blue-500 transition-all hover:text-black">
              Login
            </button>
          </Link>
          <Link to="http://localhost:5173/signup">
            <button className="border bg-emerald-700 text-white w-32 h-16 rounded-xl hover:bg-emerald-500 transition-all hover:text-black">
              SignUp
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
