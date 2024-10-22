import React from "react";
import SlidingWindow from "./SlidingWindow/SlidingWindow";

import HomeLeftPanel from "./HomeLeftPanel";
import HomeMainPanel from "./HomeMainPanel";

const Home = () => {
  return (
    <>
      <section className="flex">
        <div className=" w-56"></div>
        <div className="w-full flex">
          <div className="w-1/4 ">
            <div className="p-4 flex justify-center items-center py-10 ">
              <img
                className="object-cover rounded-lg"
                src="bacola-banner-04.png"
              />
            </div>
          </div>
          <div className="w-3/4  p-8">
            <SlidingWindow />
          </div>
        </div>
        <div className=" w-56"></div>
      </section>

      <section className="flex mt-2">
        <div className=" w-56 "></div>
        <section className="  w-full flex">
          <HomeLeftPanel />
          {/*  */}
          <HomeMainPanel />
          {/*  */}
        </section>
        <div className=" w-56 "></div>
      </section>
    </>
  );
};

export default Home;
