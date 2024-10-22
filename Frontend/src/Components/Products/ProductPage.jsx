import React, { useState } from "react";
import ProductOverview from "./ProductOverview";
import ProductDetails from "./ProductDetails";
import RelatedProducts from "./RelatedProducts";

const ProductPage = () => {
  return (
    <div className="px-44 bg-slate-100 py-16">
      <ProductOverview />
      <ProductDetails />
      <RelatedProducts />
    </div>
  );
};

export default ProductPage;
