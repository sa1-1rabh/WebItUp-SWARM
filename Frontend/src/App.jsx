// import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";
import userDetailContext from "./context/index.js";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./store/userSlice.js";
import { ToastContainer } from "react-toastify";
import Cookie from "js-cookie";

import "react-toastify/dist/ReactToastify.css";
import { setProducts } from "./store/productSlice.js";
import { setCart } from "./store/cartSlice.js";
function App() {
  const dispatch = useDispatch();

  const getUserData = async () => {
    const response = await fetch("http://localhost:8000/user-details", {
      method: "GET",
      credentials: "include",
    });
    const userData = await response.json();

    if (userData.success) {
      dispatch(setUserDetails(userData.data));
    }
  };

  const getProducts = async () => {
    const response = await fetch(
      "http://localhost:8000/products/get-allProducts",
      {
        method: "GET",
        credentials: "include",
      }
    );
    const allProducts = await response.json();
    // console.log("allProducts->", allProducts);
    if (allProducts.success) {
      dispatch(setProducts(allProducts.data));
    }
  };

  async function fetchAllCartProducts() {
    const response = await fetch(
      "http://localhost:8000/cart/get-all-cart-products",
      { method: "GET", credentials: "include" }
    );
    const cartProducts = await response.json();
    if (cartProducts.success) {
      dispatch(setCart(cartProducts.data));
    }
  }

  function beforeStarting() {
    Cookie.remove("token");
  }

  const user = useEffect(() => {
    getUserData();
    getProducts();
    fetchAllCartProducts();
    // beforeStarting();
  }, []);

  return (
    <>
      <ToastContainer />
      <userDetailContext.Provider value={{ getUserData }}>
        <Header />

        <div className="">
          <Outlet />
        </div>
        <Footer />
      </userDetailContext.Provider>
    </>
  );
}

export default App;
