import React from "react";
import TrendingProducts from "./TrendingProducts";

const HomeLeftPanel = () => {
  return (
    <div className=" w-1/4 ">
      <div className="p-4 ">
        <img className="object-cover rounded-lg" src="banner-box.png" />
      </div>
      <div className="p-4 ">
        <img className="object-cover rounded-lg" src="bacola-banner-04.png" />
      </div>
      <div className="p-4">
        <TrendingProducts />
      </div>
    </div>
  );
};

export default HomeLeftPanel;
