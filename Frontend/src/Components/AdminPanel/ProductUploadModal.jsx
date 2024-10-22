import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import productCategory from "./productCategory";
import uploadImage from "./UploadImage";
import { IoCloudUploadSharp } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";

const ProductUploadModal = (props) => {
  const [productInfo, setProductInfo] = useState({
    productName: "",
    productOriginalPrice: 0,
    productDiscountedPrice: 0,
    productDescription: "",
    productCategory: "",
    productImages: [],
    productBrands: "",
  });

  const handleFormChanges = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setProductInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const [productImageName, setProductImageName] = useState("");
  const handleUploadProductImage = async (e) => {
    const file = e.target.files[0];
    setProductImageName(file.name);
    const uploadImageCloudinary = await uploadImage(file);
    const imageURL = uploadImageCloudinary.url;
    setProductInfo((prev) => {
      return { ...prev, productImages: [...prev.productImages, imageURL] };
    });
  };

  function handleDeleteImage(idx) {
    const newImages = [...productInfo.productImages];
    newImages.splice(idx, 1);

    setProductInfo({ ...productInfo, productImages: newImages });
  }

  async function handleOnSubmit(e) {
    e.preventDefault();
    // console.log("ProductInfo->", productInfo);
    const response = await fetch("http://localhost:8000/products/add-product", {
      method: "POST",
      credentials: "include",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(productInfo),
    });
    const res = await response.json();
    if (res.success) {
      toast.success(res.msg);
      // props.fetchAllProducts();
      window.location.reload();
      props.closeProductModal();
    } else {
      toast.error(res?.msg);
    }
  }

  return (
    <div>
      <Dialog
        open={true}
        onClose={() => props.closeProductModal()}
        className="modal relative overflow-scroll"
      >
        <div className="flex justify-between items-center">
          <p className="font-bold text-2xl">UPLOAD PRODUCT</p>
          <button
            className="bg-red-500 px-2 py-1 text-white border border-black "
            onClick={() => props.closeProductModal()}
          >
            X
          </button>
        </div>
        <hr className="my-4" />

        <form className="space-y-4" onSubmit={handleOnSubmit}>
          <div className="grid space-y-1">
            <label htmlFor="productname" className="">
              Product Name :
            </label>
            <input
              type="text"
              id="productname"
              name="productName"
              value={productInfo.productName}
              placeholder="Enter Product Name..."
              onChange={handleFormChanges}
              className="border border-black bg-slate-200 rounded-md px-3 py-2"
              required
            />
          </div>
          <div className="grid space-y-1">
            <label htmlFor="productdescription" className="">
              Product Description :
            </label>
            <input
              type="text"
              id="productdescription"
              name="productDescription"
              value={productInfo.productDescription}
              placeholder="Enter Product Description..."
              onChange={handleFormChanges}
              className="border border-black bg-slate-200 rounded-md px-3 py-2"
              required
            />
          </div>
          <div className="grid space-y-1">
            <label htmlFor="productbrands" className="">
              Product Brands :
            </label>
            <input
              type="text"
              id="productbrands"
              name="productBrands"
              value={productInfo.productBrands}
              placeholder="Enter Brand Name..."
              onChange={handleFormChanges}
              className="border border-black bg-slate-200 rounded-md px-3 py-2"
              required
            />
          </div>
          <div className="grid grid-cols-3 space-x-3">
            <div className="grid space-y-1">
              <label htmlFor="productoriginalprice" className="">
                Product Original Price :
              </label>
              <input
                type="number"
                id="productoriginalprice"
                name="productOriginalPrice"
                value={productInfo.productOriginalPrice}
                placeholder="Enter Original Price..."
                onChange={handleFormChanges}
                className="border border-black bg-slate-200 rounded-md px-3 py-2"
                required
              />
            </div>
            <div className="grid space-y-1">
              <label htmlFor="productdiscountedprice" className="">
                Product Discounted Price :
              </label>
              <input
                type="number"
                id="productdiscountedprice"
                name="productDiscountedPrice"
                value={productInfo.productDiscountedPrice}
                placeholder="Enter Discounted Price..."
                onChange={handleFormChanges}
                className="border border-black bg-slate-200 rounded-md px-3 py-2"
                required
              />
            </div>
            <div className="grid space-y-1">
              <label htmlFor="productcategory" className="">
                Product Category :
              </label>
              <select
                className="border border-black bg-slate-200 rounded-md px-3 py-2"
                value={productInfo.productCategory}
                name="productCategory"
                onChange={handleFormChanges}
                required
              >
                <option value={""}>Select Category</option>
                {productCategory.map((pc, idx) => {
                  return (
                    <option key={idx} value={pc.value}>
                      {pc.label}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="productimage">Product Images</label>
            <label htmlFor="productimageupload" className=" cursor-pointer">
              <div className="bg-slate-200 flex flex-col justify-center items-center py-4">
                <IoCloudUploadSharp className="text-5xl" />
                <p>Upload Image</p>
                <input
                  type="file"
                  id="productimageupload"
                  name="productImage"
                  className="hidden"
                  onChange={handleUploadProductImage}
                  required
                />
              </div>
            </label>
          </div>
          <div className="flex space-x-2">
            {productInfo?.productImages[0] ? (
              productInfo.productImages.map((imgurl, idx) => {
                return (
                  <div className="relative group">
                    <img src={imgurl} alt="imgurl" width={100} height={100} />
                    <button
                      className="absolute top-0 right-0 text-xl bg-white group-hover:block transition-all hidden"
                      onClick={() => handleDeleteImage(idx)}
                    >
                      <MdDeleteOutline color="red" />
                    </button>
                  </div>
                );
              })
            ) : (
              <p className="text-green-700">Upload Images To View</p>
            )}
          </div>

          <div className="flex justify-center">
            <button className="py-2 w-full border bg-red-600 rounded-md text-white hover:bg-red-500">
              Upload Product
            </button>
          </div>
        </form>
      </Dialog>
    </div>
  );
};

export default ProductUploadModal;
