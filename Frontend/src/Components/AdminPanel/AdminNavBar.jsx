import React, { useEffect, useState } from "react";
import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import ProfileUpdateModal from "./ProfileUpdateModal";
import { useSelector } from "react-redux";

const AdminNavBar = () => {
  // const [adminDetails, setAdminDetails] = useState(null);
  const adminDetails = useSelector((store) => store.user.user);

  const [hoverOnProfilePic, setHoverOnProfilePic] = useState(false);
  const [showUpdateProfile, setShowUpdateProfile] = useState(false);

  const closeUpdateProfileModal = () => {
    setShowUpdateProfile(false);
  };

  // async function getUserDetails() {
  //   const response = await fetch("http://localhost:8000/user-details", {
  //     method: "GET",
  //     credentials: "include",
  //   });
  //   const user = await response.json();
  //   setAdminDetails((prev) => user.data);
  // }
  // useEffect(() => getUserDetails, []);

  return (
    <div className="p-2 space-y-2">
      <div className="border border-red-500 flex flex-col justify-center items-center p-4">
        <div
          className="border-2 relative border-black rounded-full group hover:bg-[rgba(0,0,0,0.35)] hover:border-green-400  hover:cursor-pointer transition-all"
          onMouseEnter={() => setHoverOnProfilePic(true)}
          onMouseLeave={() => setHoverOnProfilePic(false)}
          onClick={() => setShowUpdateProfile(true)}
        >
          {hoverOnProfilePic ? (
            <AiFillEdit className="absolute top-0 right-0  text-xl" />
          ) : null}

          {adminDetails?.userProfilePic ? (
            <img
              src={adminDetails.userProfilePic}
              width={150}
              height={150}
              className="rounded-full"
            />
          ) : (
            <GoPerson className="text-5xl hover:text-black hover:opacity-100" />
          )}
        </div>
        <div className="p-2">
          <p className="font-bold text-2xl">
            {adminDetails ? adminDetails.username : "Username"}
          </p>
        </div>
        <p className="text-slate-500 pb-2">
          {adminDetails ? adminDetails.email : "Email"}
        </p>
      </div>

      <div className="flex flex-col justify-center items-center bg-emerald-300  border border-red-500">
        <Link to="/admin-panel/all-users" className="w-full h-full">
          <button className="p-2 hover:bg-emerald-400 hover:text-white w-full h-full font-semibold transition-all">
            Users
          </button>
        </Link>
        <div className="bg-black h-[1px] w-full" />
        <Link to="/admin-panel/all-products" className="w-full h-full">
          <button className="p-2 hover:bg-emerald-400 hover:text-white w-full h-full font-semibold transiton-all">
            Products
          </button>
        </Link>
      </div>
      {showUpdateProfile ? (
        <ProfileUpdateModal
          closeModal={closeUpdateProfileModal}
          data={adminDetails}
        />
      ) : null}
    </div>
  );
};

export default AdminNavBar;
