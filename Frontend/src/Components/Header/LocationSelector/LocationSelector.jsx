import React, { useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import { FaSearchLocation } from "react-icons/fa";
import { useState } from "react";

const LocationSelector = () => {
  const [open, setOpen] = useState(false);
  const [originalCountryList, setOriginalCountryList] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [countryIndex, setCountryIndex] = useState(0);

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries")
      .then((response) => response.json())
      .then((result) => {
        setCountryList(result.data);
        setOriginalCountryList(result.data);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();
    const list = originalCountryList.filter((item) => {
      return item.country.toLowerCase().includes(keyword);
    });
    setCountryList(list);
  };

  return (
    <div>
      <button
        className="border bg-white h-14 w-36 flex flex-col rounded-lg hover:bg-gray-300 p-2"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span className="text-gray-500 text-left text-sm font-bold">
          Your Location
        </span>
        <span className="text-blue-700 text-left text-md font-bold">
          {countryList[countryIndex]?.country.length !== 0
            ? countryList[countryIndex]?.country.length > 11
              ? countryList[countryIndex]?.country.substr(0, 11) + "..."
              : countryList[countryIndex]?.country
            : "Select Country"}
        </span>
      </button>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(!open);
        }}
        className="modal relative"
      >
        <button
          className="border bg-red-500 absolute right-0 px-3 py-2 font-bold mt-[-50px]"
          onClick={() => {
            setOpen(!open);
          }}
        >
          X
        </button>

        <h4 className="text-3xl">Choose Your Delivery Location</h4>
        <p className="text-slate-500">
          Enter your address and we will specify your closest location
        </p>
        <div className="my-2 relative border border-gray-300 rounded-lg bg-gray-100 text-gray-500 ">
          <input
            onChange={filterList}
            placeholder="Search your area..."
            className=" bg-inherit h-10 w-full pl-4 "
          />
          <button className="align-center absolute right-4 top-1 hover:bg-slate-300 rounded-full transition duration-100 p-2 ">
            <FaSearchLocation />
          </button>
        </div>

        <div>
          <ul>
            {countryList.length !== 0 &&
              countryList.map((country, index) => {
                return (
                  <li key={index}>
                    <button
                      className={`${
                        countryIndex === index ? "bg-gray-300" : "not-active"
                      } border-b-2 rounded-md h-10 w-full text-left hover:bg-blue-200 px-4`}
                      onClick={() => {
                        setCountryIndex(index);
                        setOpen(false);
                      }}
                    >
                      {country.country}
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
      </Dialog>
    </div>
  );
};

export default LocationSelector;
