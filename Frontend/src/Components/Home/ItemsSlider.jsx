import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

import Slider from "react-slick";
import { useSelector } from "react-redux";

const ItemsSlider = () => {
  const backup = {
    _id: "670fdf760758925f00a815e4",
    productName: "Shimmer Pastel Almond Blend",
    productDescription:
      "Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent",
    productOriginalPrice: 8.29,
    productDiscountedPrice: 7.71,
    productImages: [
      "http://res.cloudinary.com/dbvmq5rze/image/upload/v1729093493/j1hguxxdyphc8sjmrj5w.jpg",
    ],
    productBrands: "Frito Lay, Oreo, Welch's",
    productCategory: "snacks",
    __v: 0,
    partofcart: true,
    productQuantity: 0,
  };

  const [allProd, setAllProd] = useState([]);
  const getProducts = async () => {
    const response = await fetch(
      "http://localhost:8000/products/get-allProducts",
      {
        method: "GET",
        credentials: "include",
      }
    );
    const allProducts = await response.json();
    // console.log("allproducts->", allProducts.data);
    if (allProducts.success) {
      setAllProd(allProducts.data);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  // console.log("allProd->", allProd[0]);
  var settings = {
    // dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className=" p-4">
      <Slider {...settings} className="w-[906px] pr-[2px]">
        <ItemCard data={allProd[0] || backup} />
        <ItemCard data={allProd[5] || backup} />
        <ItemCard data={allProd[10] || backup} />
        <ItemCard data={allProd[15] || backup} />
        <ItemCard data={allProd[20] || backup} />
        <ItemCard data={allProd[25] || backup} />
      </Slider>
    </div>
  );
};

export default ItemsSlider;
