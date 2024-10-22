import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { updateCartProductQuantity } from "../../store/cartSlice";
import { decrementSubTotal, incrementSubTotal } from "../../store/amount";

const CartItemCard = (props) => {
  const [itemQuantity, setItemQuantity] = useState(props.data.quantity);
  const [subTotal, setSubTotal] = useState(itemQuantity);
  // console.log("cardCart->", props);
  const unitPrice = props.data.unitPrice;

  const dispatch = useDispatch();
  const incrementQuantity = async () => {
    if (itemQuantity < 10) {
      // dispatch(updateCartProductQuantity(itemQuantity + 1));
      await fetch("http://localhost:8000/cart/update-cart-item", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: props.data.productId,
          quantity: itemQuantity + 1,
        }),
      });
      // dispatch(incrementSubTotal(props.data.unitPrice));
      setItemQuantity((item) => item + 1);
      props.renderBill();
    }
  };
  const decrementQuantity = async () => {
    if (itemQuantity > 1) {
      await fetch("http://localhost:8000/cart/update-cart-item", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: props.data.productId,
          quantity: itemQuantity - 1,
        }),
      });
      // dispatch(updateCartProductQuantity(itemQuantity - 1));
      // dispatch(decrementSubTotal(props.data.unitPrice));
      setItemQuantity((item) => item - 1);
      props.renderBill();
    }
  };

  async function handleDeleteCartProduct() {
    const response = await fetch(
      "http://localhost:8000/cart/delete-cart-item",
      {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: props.data.productId,
        }),
      }
    );
    // dispatch(decrementSubTotal(props.data.unitPrice * props.data.quantity));
    props.render();
    props.renderBill();
  }

  return (
    <div className="flex border px-8 py-4 items-center justify-between">
      <div className="border p-2">
        <img src={props.data.productImage} className=" w-24"></img>
      </div>
      <div className="w-96">
        <p className="font-bold text-lg">{props.data.productName}</p>
        <p className="text-slate-500 text-sm">
          Category : {props.data.productCategory}
        </p>
        <span>Stars (4.0)</span>
      </div>
      <div className="w-24 text-center">
        <p className="font-bold text-lg">${unitPrice.toFixed(2)}</p>
      </div>
      <div className="border border-green-400 flex items-center space-x-2">
        <p className="text-xl font-bold w-8 text-center">{itemQuantity}</p>
        <div className="space-y-1 ">
          <div className="flex">
            <button onClick={incrementQuantity}>
              <FaAngleUp color="blue" />
            </button>
          </div>
          <div className="flex">
            <button onClick={decrementQuantity}>
              <FaAngleDown color="blue" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-24 text-center">
        <p className="font-bold text-lg">
          ${(unitPrice * itemQuantity).toFixed(2)}
        </p>
      </div>
      <div>
        <button
          className="text-lg hover:scale-125 transition-all"
          onClick={() => handleDeleteCartProduct()}
        >
          <RiDeleteBinLine color="red" />
        </button>
      </div>
    </div>
  );
};

export default CartItemCard;
