import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import LocationSelector from "./LocationSelector/LocationSelector.jsx";
import { GoPerson } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileUpdateModal from "../AdminPanel/ProfileUpdateModal.jsx";

const HeaderTop = () => {
  const userCredentials = useSelector((store) => store.user.user);
  const amount = 0;

  const [showUserPanel, setshowUserPanel] = useState(false);
  const [showUpdateProfile, setShowUpdateProfile] = useState(false);

  const [cartQuantity, setCartQuantity] = useState(0);

  const handleUserLogout = async () => {
    await fetch("http://localhost:8000/logout", {
      method: "GET",
      credentials: "include",
    });
    window.location.reload();
  };

  const closeUpdateProfileModal = () => {
    setShowUpdateProfile(false);
  };

  return (
    <div>
      <nav className="flex gap-x-2 items-stretch justify-between px-10">
        <div className="p-2">
          <div className="text-6xl font-bold text-emerald-800 font-serif">
            SWARM
          </div>
        </div>
        {/* <div className="h-full " /> */}
        <div className="flex py-3 space-x-2 px-3 ">
          <div className="relative w-[600px]">
            <input
              placeholder="Search..."
              className="min-w-60 border rounded-lg px-4  bg-slate-200 text-slate-500 placeholder:text-slate-500 h-full w-full"
            />
            <button className="p-2 text-black font-bold text-xl hover:bg-white hover:text-black hover:scale-110  transition delay-50 ease-in rounded-full absolute right-2 top-3">
              <CiSearch />
            </button>
          </div>
          <LocationSelector />
        </div>

        <div className="flex space-x-6 items-center">
          <div className="relative flex flex-col">
            <div onClick={() => setshowUserPanel(!showUserPanel)}>
              <button className="border-2 p-2 px-4 pt-1 rounded-full text-2xl flex items-center space-x-2 hover:bg-slate-300 transition-all">
                {userCredentials?.userProfilePic ? (
                  <img
                    src={userCredentials.userProfilePic}
                    height={20}
                    width={50}
                  />
                ) : (
                  <GoPerson />
                )}
                {userCredentials ? <p>{userCredentials.username}</p> : null}
              </button>
            </div>

            {showUserPanel ? (
              <div className="shadow-xl border border-red-400 px-2 py-2 absolute z-[100] bg-white flex top-14  flex-col font-bold">
                {userCredentials?.username == "ss" ? (
                  <Link to="/admin-panel" className="">
                    <button
                      className="w-full text-nowrap hover:bg-slate-200 p-2  transition-all"
                      onClick={() => setshowUserPanel(false)}
                    >
                      Admin Panel
                    </button>
                  </Link>
                ) : null}
                {userCredentials ? (
                  <Link to="/login" className="">
                    <button
                      className="w-full text-nowrap hover:bg-slate-200 p-2  transition-all"
                      onClick={() => {
                        handleUserLogout();
                        setshowUserPanel(false);
                      }}
                    >
                      LOGOUT
                    </button>
                  </Link>
                ) : (
                  <Link to="/login" className="">
                    <button
                      className="text-nowrap hover:bg-slate-200 p-2 w-full  transition-all"
                      onClick={() => {
                        setshowUserPanel(false);
                      }}
                    >
                      LOGIN
                    </button>
                  </Link>
                )}

                {userCredentials ? (
                  <button
                    className="text-nowrap hover:bg-slate-200 p-2  transition-all"
                    onClick={() => setShowUpdateProfile(true)}
                  >
                    PROFILE
                  </button>
                ) : null}
                {showUpdateProfile ? (
                  <ProfileUpdateModal
                    closeModal={closeUpdateProfileModal}
                    data={userCredentials}
                  />
                ) : null}
              </div>
            ) : null}
          </div>

          <Link to="/contact">
            <div className="text-xl cursor-pointer">
              <button className="font-bold border-2 p-2 rounded-xl text-slate-600 hover:text-black hover:border-black">
                Contact
              </button>
            </div>
          </Link>
          <Link reloadDocument to="/home/cart">
            <button className="border p-2 rounded-full text-3xl bg-emerald-600 text-white hover:text-black hover:bg-red-600 transition-all">
              <IoCartOutline />
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default HeaderTop;
