import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import uploadImage from "./UploadImage";
import { IoCloudUploadSharp } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";

const ProfileUpdateModal = (props) => {
  const [userInfo, setUserInfo] = useState(props.data);

  const handleFormChanges = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setUserInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleUploadUserPic = async (e) => {
    const file = e.target.files[0];
    const uploadImageCloudinary = await uploadImage(file);
    const imageURL = uploadImageCloudinary.url;
    setUserInfo((prev) => {
      return { ...prev, userProfilePic: imageURL };
    });
  };

  async function handleOnSubmit(e) {
    e.preventDefault();
    // console.log("UserInfo->", userInfo);
    const response = await fetch("http://localhost:8000/update-user-details", {
      method: "POST",
      credentials: "include",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userInfo),
    });
    const res = await response.json();
    if (res.success) {
      toast.success(res.msg);
      // props.fetchAllProducts();
      props.closeModal();
    } else {
      toast.error(res?.msg);
    }
  }

  return (
    <div>
      <Dialog
        open={true}
        onClose={() => {
          props.closeModal();
        }}
        className="modal relative overflow-scroll"
      >
        <div className="flex justify-between items-center">
          <p className="font-bold text-2xl">UPDATE PROFILE</p>
          <button
            className="bg-red-500 px-2 py-1 text-white border border-black "
            onClick={() => {
              props.closeModal();
            }}
          >
            X
          </button>
        </div>
        <hr className="my-4" />

        <form className="space-y-4" onSubmit={handleOnSubmit}>
          <div className="grid space-y-1">
            <label htmlFor="username" className="">
              USERNAME :
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={userInfo.username}
              placeholder="Enter User Name..."
              onChange={handleFormChanges}
              className="border border-black bg-slate-200 rounded-md px-3 py-2"
              required
            />
          </div>
          <div className="grid space-y-1">
            <label htmlFor="useremail" className="">
              User Email :
            </label>
            <input
              type="text"
              id="useremail"
              name="email"
              value={userInfo.email}
              placeholder="Enter User Email..."
              onChange={handleFormChanges}
              className="border border-black bg-slate-200 rounded-md px-3 py-2"
              required
            />
          </div>

          <div>
            <label htmlFor="userimage">Profile Pic</label>
            <label htmlFor="userimageupload" className=" cursor-pointer">
              <div className="bg-slate-200 flex flex-col justify-center items-center py-4">
                <IoCloudUploadSharp className="text-5xl" />
                <p>Upload Profile Pic</p>
                <input
                  type="file"
                  id="userimageupload"
                  name="userProfilePic"
                  className="hidden"
                  onChange={handleUploadUserPic}
                />
              </div>
            </label>
          </div>
          <div className="flex space-x-2">
            {userInfo?.userProfilePic ? (
              <div className="relative group">
                <img
                  src={userInfo.userProfilePic}
                  alt="imgurl"
                  width={100}
                  height={100}
                />
              </div>
            ) : (
              <p className="text-green-700">Upload Images To View</p>
            )}
          </div>

          <div className="flex justify-center">
            <button className="py-2 w-full border bg-red-600 rounded-md text-white hover:bg-red-500">
              Update Profile
            </button>
          </div>
        </form>
      </Dialog>
    </div>
  );
};

export default ProfileUpdateModal;
