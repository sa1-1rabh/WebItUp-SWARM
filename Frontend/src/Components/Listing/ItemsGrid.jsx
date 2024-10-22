import React, { useEffect, useState } from "react";
import ItemCard from "../Home/ItemCard";

const ItemsGrid = (props) => {
  return (
    <div className="pt-6">
      <div
        className={
          "border rounded-md grid overflow-hidden " + `grid-cols-${props.cols}`
        }
      >
        {props?.products ? (
          props.products.map((prod, idx) => {
            return <ItemCard key={idx} data={prod} />;
          })
        ) : (
          <p>No Items Found!</p>
        )}
      </div>
    </div>
  );
};

export default ItemsGrid;
