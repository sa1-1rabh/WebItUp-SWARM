import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  async function onSubmit(data) {
    try {
      const response = await fetch("http://localhost:8000/signup", {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const res = await response.json();

      if (res.err) {
        toast.error(res.msg);
        throw new Error("User Already Exists!");
      } else {
        toast.success(res.msg);
        setTimeout(() => {
          window.location.href = "http://localhost:5173/login";
        }, 2000);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const formSchema = yup.object().shape({
    username: yup.string().required("Required!"),
    email: yup.string().email("Enter valid email!").required("Required!"),
    password: yup
      .string()
      .min(4, "Password should be min 4 characters")
      .required("Required!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password Don't Match")
      .required("Required!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  return (
    <div className="flex justify-center items-center min-h-[calc(70vh)] bg-gradient-to-r from-fuchsia-500/70 to-pink-500/50">
      <div className="border p-8 min-h-[400px] bg-gradient-to-br from-blue-200 via-blue-100 to-purple-300 shadow-xl bg-transparent rounded-3xl">
        <div className="flex items-center justify-between pb-4 ">
          <div className="text-2xl font-bold">SIGNUP</div>
          <div className="flex justify-end items-center space-x-4">
            <Link to="http://localhost:5173/login">
              <button className="border px-4 py-2 font-bold  border-emerald-500  text-emerald-500 hover:bg-blue-200 transition-all">
                Login
              </button>
            </Link>
            <button className="border px-4 py-2  font-bold  border-emerald-500 bg-emerald-500 text-white">
              SignUp
            </button>
          </div>
        </div>
        <div className="bg-slate-500 h-[1px]    " />
        <div className="flex justify-between items-center h-[300px] w-full">
          <div className="flex justify-center items-center w-96">
            <form
              className="flex flex-col w-full space-y-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <label className="text-slate-600">UserName : </label>
                  <input
                    {...register("username")}
                    placeholder="username123  "
                    className="border-b px-2 outline-none border-slate-500 w-52 h-8 focus:border-b-green-400 bg-transparent focus:border-b-2"
                  />
                </div>
                <p className="text-red-700">{errors.username?.message}</p>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <label className="text-slate-600">Email : </label>
                  <input
                    {...register("email")}
                    placeholder="abc@gmail.com"
                    className="border-b  px-2 w-52 h-8 outline-none border-slate-500 focus:border-b-green-400 bg-transparent focus:border-b-2"
                  />
                </div>
                <p className="text-red-700">{errors.email?.message}</p>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <label className="text-slate-600">Password : </label>
                  <input
                    {...register("password")}
                    placeholder="********"
                    type="password"
                    className="border-b px-2 w-52 h-8 outline-none border-slate-500 focus:border-b-green-400 bg-transparent focus:border-b-2"
                  />
                </div>
                <p className="text-red-700">{errors.password?.message}</p>
              </div>
              <div className="flex flex-col pb-4">
                <div className="flex justify-between items-center">
                  <label className="text-slate-600">Confirm Password : </label>
                  <input
                    {...register("confirmPassword")}
                    placeholder="********"
                    type="password"
                    className="border-b px-2 w-52 h-8 outline-none border-slate-500 focus:border-b-green-400 bg-transparent focus:border-b-2"
                  />
                </div>
                <p className="text-red-700">
                  {errors.confirmPassword?.message}
                </p>
              </div>

              <button
                type="submit"
                className=" bg-red-500 text-white hover:bg-red-600 py-2 border rounded-lg text-lg  font-bold"
              >
                SignUp
              </button>
            </form>
          </div>
        </div>
        <div className="pt-3 flex justify-end">
          <Link to="http://localhost:5173/login">
            <button className=" underline">Already an user?</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
