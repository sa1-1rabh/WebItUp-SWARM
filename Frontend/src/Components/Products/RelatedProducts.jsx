import React from "react";

import Slider from "react-slick";
import ItemCard from "../Home/ItemCard";

const RelatedProducts = () => {
  var settings = {
    // dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className=" p-4 mt-10">
      <p className="text-2xl py-4">RELATED PRODUCTS</p>
      <Slider {...settings} className="rounded-lg">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </Slider>
    </div>
  );
};

export default RelatedProducts;
