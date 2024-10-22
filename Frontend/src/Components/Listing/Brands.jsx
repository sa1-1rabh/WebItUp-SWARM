import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Brands = () => {
  return (
    <div className="mt-10">
      <p>BRANDS</p>
      <div className="pl-2 mt-4">
        <ul className="text-slate-400">
          <li className="flex justify-between">
            <FormControlLabel control={<Checkbox />} label="Frito Lay" />
            <p className=" text-sm text-black">(7)</p>
          </li>
          <li className="flex justify-between">
            <FormControlLabel control={<Checkbox />} label="Nespresso" />
            <p className=" text-sm text-black">(7)</p>
          </li>
          <li className="flex justify-between">
            <FormControlLabel control={<Checkbox />} label="Oreo" />
            <p className=" text-sm text-black">(7)</p>
          </li>
          <li className="flex justify-between">
            <FormControlLabel control={<Checkbox />} label="Quaker" />
            <p className=" text-sm text-black">(7)</p>
          </li>
          <li className="flex justify-between">
            <FormControlLabel control={<Checkbox />} label="Welch's" />
            <p className=" text-sm text-black">(7)</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Brands;
