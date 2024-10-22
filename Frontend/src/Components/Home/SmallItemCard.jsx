import React from "react";

const SmallItemCard = (props) => {
  return (
    <div className="flex items-center">
      <div>
        <img
          src={props.data.productImages[0]}
          width={10}
          height={10}
          className="w-32"
        />
      </div>
      <div>
        <p className="text-sm line-clamp-2">{props.data.productName}</p>
        <div className="flex p-1 items-end gap-2 font-sans">
          <div className="text-slate-300 line-through font-bold">
            ${props.data.productOriginalPrice.toFixed(2)}
          </div>
          <div className="text-red-500 font-bold text-lg">
            ${props.data.productDiscountedPrice.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallItemCard;
