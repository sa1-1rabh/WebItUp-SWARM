import FormControlLabel from "@mui/material/FormControlLabel";
import React from "react";
import Checkbox from "@mui/material/Checkbox";

const ProductStatus = () => {
  return (
    <div className="mt-10">
      <p>PRODUCT STATUS</p>
      <div className="pl-2 mt-4">
        <ul className="text-slate-400">
          <li>
            <FormControlLabel control={<Checkbox />} label="On Sale" />
          </li>
          <li>
            <FormControlLabel control={<Checkbox />} label="In Stock" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductStatus;
