import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const ProductCategories = () => {
  return (
    <div>
      <p>PRODUCT CATEGORIES</p>
      <div className="pl-2 overflow-y-scroll scrollbar scrollbar-thumb-green-200 mt-2 h-40">
        <ul className="text-slate-400">
          <li>
            <FormControlLabel control={<Checkbox />} label="Frozen" />
          </li>
          <li>
            <FormControlLabel control={<Checkbox />} label="Snacks" />
          </li>
          <li>
            <FormControlLabel control={<Checkbox />} label="Bakery" />
          </li>
          <li>
            <FormControlLabel control={<Checkbox />} label="Household" />
          </li>
          <li>
            <FormControlLabel control={<Checkbox />} label="Biscuits" />
          </li>
          <li>
            <FormControlLabel control={<Checkbox />} label="Frozen" />
          </li>
          <li>
            <FormControlLabel control={<Checkbox />} label="Snacks" />
          </li>
          <li>
            <FormControlLabel control={<Checkbox />} label="Bakery" />
          </li>
          <li>
            <FormControlLabel control={<Checkbox />} label="Household" />
          </li>
          <li>
            <FormControlLabel control={<Checkbox />} label="Biscuits" />
          </li>
          <li>
            <FormControlLabel control={<Checkbox />} label="Frozen" />
          </li>
          <li>
            <FormControlLabel control={<Checkbox />} label="Snacks" />
          </li>
          <li>
            <FormControlLabel control={<Checkbox />} label="Bakery" />
          </li>
          <li>
            <FormControlLabel control={<Checkbox />} label="Household" />
          </li>
          <li>
            <FormControlLabel control={<Checkbox />} label="Biscuits" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductCategories;
