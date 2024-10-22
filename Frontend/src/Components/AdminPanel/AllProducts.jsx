import React, { useEffect, useState } from "react";
import ProductUploadModal from "./ProductUploadModal";
import { FaEdit } from "react-icons/fa";
import ProductUpdateModal from "./ProductUpdateModal";
import { useSelector } from "react-redux";

const AllProducts = () => {
  const [show, setShow] = useState(false);
  const closeProductModal = () => {
    setShow(false);
  };
  const [showUpdate, setshowUpdate] = useState(false);
  const [showUpdateData, setShowUpdateData] = useState(null);
  const closeUpdateModal = () => {
    setshowUpdate(false);
  };

  const allProducts = useSelector((store) => store.products.products);
  // console.log("allProducts->", allProducts.products);

  // const [allProducts, setAllProducts] = useState([]);
  // async function fetchAllProducts() {
  //   const response = await fetch(
  //     "http://localhost:8000/products/get-allProducts",
  //     {
  //       method: "GET",
  //       credentials: "include",
  //     }
  //   );
  //   const res = await response.json();
  //   setAllProducts(res.data);
  // }
  // useEffect(() => {
  //   fetchAllProducts();
  // }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between bg-white p-4 z-30 px-6 items-center sticky top-2 border-2 border-slate-500">
        <p className="text-xl font-bold">ALL PRODUCTS</p>
        <button
          className="border-2 border-red-400 rounded-full px-4 py-2 hover:text-white hover:bg-red-500 font-bold transition-all"
          onClick={() => setShow(true)}
        >
          Upload Products
        </button>
      </div>
      {show ? (
        <ProductUploadModal
          closeProductModal={closeProductModal}
          // fetchAllProducts={fetchAllProducts}
        />
      ) : null}

      {showUpdate ? (
        <ProductUpdateModal
          data={showUpdateData}
          closeProductModal={closeUpdateModal}
          // fetchAllProducts={fetchAllProducts}
        />
      ) : null}

      <div className="mt-4 grid grid-cols-5 gap-2">
        {allProducts.map((prod) => {
          return (
            <div className="p-4 border-2 border-black flex flex-col bg-purple-500 bg-opacity-15  relative space-y-1">
              <div className="flex justify-center items-center">
                <img src={prod.productImages[0]} width={100} height={100} />
              </div>
              <div className="flex items-center justify-center">
                <p className="text-lg">{prod.productName}</p>
              </div>
              <div className="flex justify-center ">
                <p className="text-slate-500 line-clamp-2">
                  {prod.productDescription}
                </p>
              </div>
              <div>
                <p>{prod.productCategory}</p>
              </div>
              <div className="flex justify-between items-center text-lg">
                <p className="text-red-500">{prod.productOriginalPrice}</p>
                <p className="text-green-700">{prod.productDiscountedPrice}</p>
              </div>

              <button
                className="absolute top-2 right-2 hover:scale-125 transition-all"
                onClick={() => {
                  setshowUpdate(true);
                  setShowUpdateData(prod);
                }}
              >
                <FaEdit />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllProducts;
