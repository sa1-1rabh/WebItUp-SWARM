import React from "react";

import HeaderTop from "./HeaderTop.jsx";
import HeaderBottomLeft from "./HeaderBottomLeft.jsx";
import HeaderBottomRight from "./HeaderBottomRight.jsx";

const Header = () => {
  return (
    <div className="bg-slate-50 shadow-md">
      <HeaderTop />
      <div className="grid grid-cols-12 mt-6 border-b-2 pb-3">
        <HeaderBottomLeft />
        <HeaderBottomRight />
      </div>
    </div>
  );
};

export default Header;
