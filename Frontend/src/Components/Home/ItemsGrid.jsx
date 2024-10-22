import React, { useEffect, useState } from "react";
import ItemCard2 from "./ItemCard2";

const ItemsGrid = () => {
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

  return (
    <div className=" grid grid-cols-4 grid-rows-2 p-4 h-[730px]">
      <ItemCard2 data={allProd[1] || backup} />
      <ItemCard2 data={allProd[4] || backup} />
      <ItemCard2 data={allProd[8] || backup} />
      <ItemCard2 data={allProd[12] || backup} />
      <ItemCard2 data={allProd[16] || backup} />
      <ItemCard2 data={allProd[19] || backup} />
      <ItemCard2 data={allProd[24] || backup} />
      <ItemCard2 data={allProd[28] || backup} />
    </div>
  );
};

export default ItemsGrid;
