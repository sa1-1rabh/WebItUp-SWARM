import React from "react";
import BestSellers from "./BestSellers";
import NewProducts from "./NewProducts";

const HomeMainPanel = () => {
  return (
    <div className=" w-3/4">
      <BestSellers />
      <NewProducts />
      <div className="flex p-4 pt-0 gap-6 px-8 ">
        <div>
          <img src="banner-05.png" className="rounded-md" />
        </div>
        <div>
          <img src="banner-06.png" className="rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default HomeMainPanel;
