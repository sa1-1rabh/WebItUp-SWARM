import React, { useState } from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { BsArrowsFullscreen } from "react-icons/bs";
import { FaMinus, FaPlus, FaRegHeart } from "react-icons/fa";
import ItemModal from "./ItemModal";
import { toast } from "react-toastify";

const ItemCard2 = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productQuantity, setProductQuantity] = useState(
    props?.data.productQuantity
  );

  const openModalWindow = () => {
    setIsModalOpen(true);
  };
  const closeModalWindow = () => {
    setIsModalOpen(false);
  };

  async function handleAddToCart() {
    const response = await fetch(
      "http://localhost:8000/cart/add-cart-product",
      {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productName: props.data.productName,
          productId: props.data._id,
          stars: 4,
          unitPrice: props.data.productDiscountedPrice,
          quantity: productQuantity + 1,
          productImage: props.data.productImages[0],
          productCategory: props.data.productCategory,
        }),
      }
    );
    const res = await response.json();
    if (res.success) {
      setProductQuantity(1);
      // dispatch(incrementSubTotal(10));
      toast.success(res.msg);
    }
  }

  const incrementQuantity = async () => {
    if (productQuantity < 10) {
      await fetch("http://localhost:8000/cart/update-cart-item", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: props.data._id,
          quantity: productQuantity + 1,
        }),
      });
      // console.log("increment");
      setProductQuantity((item) => item + 1);
    }
  };
  const decrementQuantity = async () => {
    if (productQuantity > 1) {
      await fetch("http://localhost:8000/cart/update-cart-item", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: props.data._id,
          quantity: productQuantity - 1,
        }),
      });
      // dispatch(updateCartProductQuantity(itemQuantity - 1));
      setProductQuantity((item) => item - 1);
    } else if (productQuantity == 1) {
      const response = await fetch(
        "http://localhost:8000/cart/delete-cart-item",
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ productId: props.data._id }),
        }
      );
      setProductQuantity(0);
    }
  };

  return (
    <div className="bg-white-200 p-2 border relative group hover:z-20 hover:h-[390px] hover:bg-white hover:border-green-300 hover:rounded-md hover:border hover:shadow-md hover:cursor-pointer transition-all">
      <button
        onClick={openModalWindow}
        className="absolute top-8 right-2  border rounded-full p-3 shadow-sm hover:bg-blue-700 hover:text-white invisible opacity-0 transition-all group-hover:opacity-100 group-hover:visible group-hover:right-4"
      >
        <BsArrowsFullscreen />
      </button>

      <button className="absolute top-20 right-2  border rounded-full p-3 shadow-sm hover:bg-red-600 hover:text-white invisible opacity-0 transition-all delay-75 group-hover:opacity-100 group-hover:visible group-hover:right-4">
        <FaRegHeart />
      </button>

      <div className="absolute top-2 left-2 bg-blue-500 border text-white font-bold px-3 py-1 text-sm rounded-md">
        24%
      </div>
      <div>
        <img src={props.data.productImages[0]} />
      </div>
      <div>
        <div className="p-1 font-bold hover:text-blue-500 cursor-pointer text-ellipsis overflow-hidden">
          <p>{props.data.productName}</p>
        </div>
        <div className="p-1 text-green-500 font-bold text-xs">
          <p>IN STOCK</p>
        </div>
        <div className="p-1 flex">
          <TiStarFullOutline color="orange" />
          <TiStarFullOutline color="orange" />
          <TiStarFullOutline color="orange" />
          <TiStarFullOutline color="orange" />
          <TiStarFullOutline color="orange" />
        </div>
        <div className="flex p-1 items-end gap-2 font-sans">
          <div className="text-slate-300 line-through font-bold">
            ${props.data.productOriginalPrice.toFixed(2)}
          </div>
          <div className="text-red-500 font-bold text-lg">
            ${props.data.productDiscountedPrice.toFixed(2)}
          </div>
        </div>
        <div className="px-1 mt-3 invisible group-hover:visible">
          {productQuantity == 0 ? (
            <div className="px-1">
              <button
                className=" border border-blue-500 rounded-xl w-full text-blue-500 font-bold py-1 text-sm hover:bg-blue-500 hover:text-white"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          ) : (
            <div className="px-1 flex justify-center border rounded-xl w-full border-green-500">
              <div className="flex items-center space-x-4 py-1 ">
                <button
                  className="flex w-8 h-8 justify-center items-center border rounded-full bg-slate-200 hover:bg-yellow-300"
                  onClick={decrementQuantity}
                >
                  <FaMinus className="text-xs" />
                </button>
                <p className="text-xl">{productQuantity}</p>
                <button
                  className="flex w-8 h-8 justify-center items-center border rounded-full bg-slate-200 hover:bg-yellow-300"
                  onClick={incrementQuantity}
                >
                  <FaPlus className="text-xs" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {isModalOpen ? (
        <ItemModal closeModal={closeModalWindow} data={props.data} />
      ) : null}
    </div>
  );
};

export default ItemCard2;
