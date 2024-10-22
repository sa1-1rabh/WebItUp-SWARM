import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import React, { useContext } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import userDetailContext from "../../context";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {
  const { getUserData } = useContext(userDetailContext);
  // console.log(getUserData);
  const navigate = useNavigate();
  async function onSubmit(data) {
    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response) {
        console.log("No Response from Server!");
      }
      const res = await response.json();

      if (res.err) {
        toast.error(res.msg);
        throw new Error("Invalid Username or Password!");
      } else {
        toast.success(res.msg);
        setTimeout(() => {
          window.location.href = "http://localhost:5173/home";
        }, 2000);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const formSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required().min(4),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  return (
    <div className="flex justify-center items-center min-h-[calc(70vh)] bg-gradient-to-r from-teal-400/70 to-blue-800/70">
      <div className="border p-8 m-h-[400px] bg-gradient-to-br from-blue-200 via-blue-100 to-purple-300 shadow-xl bg-transparent rounded-3xl">
        <div className="flex items-center justify-between pb-4 ">
          <div className="text-2xl font-bold">LOGIN</div>
          <div className="flex justify-end items-center space-x-4">
            <button className="border px-4 py-2 font-bold  border-emerald-500  bg-emerald-500 text-white">
              Login
            </button>
            <Link to="http://localhost:5173/signup">
              <button className="border px-4 py-2  font-bold  border-emerald-500 text-emerald-500  hover:bg-blue-200 transition-all">
                SignUp
              </button>
            </Link>
          </div>
        </div>
        <div className=" bg-slate-500 h-[1px]" />
        <div className="flex justify-between items-center h-[300px] w-full">
          <div className="flex justify-center items-center w-96 ">
            <form
              className="flex flex-col w-full space-y-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col space-y-2 w-full">
                <label className="text-slate-600">UserName : </label>
                <input
                  {...register("username")}
                  placeholder="username123"
                  className="border-b px-2 outline-none border-slate-500 w-full bg-transparent text-xl h-8 focus:border-b-green-400 focus:border-b-2"
                />

                <p className="text-red-700">{errors.username?.message}</p>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-slate-600">Password : </label>
                <input
                  {...register("password")}
                  placeholder="********"
                  type="password"
                  className="border-b px-2 outline-none border-slate-500 w-full bg-transparent text-xl h-8 focus:border-b-green-400 focus:border-b-2"
                />

                <p className="text-red-700">{errors.password?.message}</p>
              </div>

              <button
                type="submit"
                className=" bg-red-500 text-white hover:bg-red-600 py-2 border rounded-lg text-lg  font-bold"
              >
                Login
              </button>
            </form>
          </div>
        </div>
        <div className="pt-3 flex justify-end">
          <Link to="http://localhost:5173/signup">
            <button className="underline">Not a member yet?</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
