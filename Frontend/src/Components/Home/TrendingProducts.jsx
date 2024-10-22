import React, { useEffect, useState } from "react";
import SmallItemCard from "./SmallItemCard";

const TrendingProducts = () => {
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
    <div>
      <div>
        <p className="font-bold p-4 pl-0">TRENDING PRODUCTS</p>
      </div>
      <div className="border space-y-2 py-4">
        <SmallItemCard data={allProd[2] || backup} />
        <SmallItemCard data={allProd[6] || backup} />
        <SmallItemCard data={allProd[13] || backup} />
        <SmallItemCard data={allProd[18] || backup} />
        <SmallItemCard data={allProd[22] || backup} />
      </div>
    </div>
  );
};

export default TrendingProducts;
