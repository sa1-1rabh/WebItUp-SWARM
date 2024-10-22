import React, { useEffect, useState } from "react";
import ProductCategories from "./ProductCategories";
import FilterPrice from "./FilterPrice";
import Brands from "./Brands";
import ProductStatus from "./ProductStatus";
import { Link, Outlet } from "react-router-dom";
import listingBanner from "./listingBanner.png";

import ViewControls from "./ViewControls";
import ItemsGrid from "./ItemsGrid";
import { useSelector } from "react-redux";

const listing = (props) => {
  const [gridCols, setGridCols] = useState(4);

  const category = { cat: props.category };
  // const allProducts = useSelector((store) => store.products.products);

  const [categoryProducts, setCategoryProducts] = useState([]);

  async function fetchCategoryProduct() {
    const response = await fetch(
      "http://localhost:8000/products/get-category-products",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        credentials: "include",
        body: JSON.stringify(category),
      }
    );
    const products = await response.json();
    // console.log("products->", products.data);/
    setCategoryProducts(products.data);
  }
  useEffect(() => {
    fetchCategoryProduct();
  }, []);

  // console.log("categoryProduct->", categoryProducts);

  return (
    <div className="flex pt-10 mb-6">
      <div className="w-56 h-full"></div>
      <div className="w-1/4 h-full pr-16">
        <ProductCategories />
        <FilterPrice />
        <ProductStatus />
        <Brands />
        <Link to="/">
          <img
            className="mt-10"
            src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif"
          />
        </Link>
      </div>
      <div className="w-3/4 h-full">
        <div>
          <img src={listingBanner} className="rounded-md" />
        </div>
        <ViewControls setter={setGridCols} cols={gridCols} />
        {/* <Outlet cols={gridCols} /> */}
        <ItemsGrid cols={gridCols} products={categoryProducts} />
      </div>
      <div className="w-56 h-full"></div>
    </div>
  );
};

export default listing;
