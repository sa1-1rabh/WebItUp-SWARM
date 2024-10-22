import React from "react";
import AdminNavBar from "./AdminNavBar";
import { Outlet } from "react-router-dom";

const AdminPanelPage = () => {
  return (
    <div className="h-[calc(100vh-200px)] w-full flex">
      <div className="w-1/5 h-full bg-slate-200 ">
        <AdminNavBar />
      </div>
      <div className="w-4/5 h-full p-4 overflow-hidden overflow-y-scroll pb-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPanelPage;
