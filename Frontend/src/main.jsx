import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Listing from "./Components/Listing/Listing.jsx";
import ProductPage from "./Components/Products/ProductPage.jsx";
import CheckoutPage from "./Components/Checkout/CheckoutPage.jsx";
import SignUp from "./Components/Welcome/SignUp.jsx";
import LogIn from "./Components/Welcome/LogIn.jsx";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import AdminPanelPage from "./Components/AdminPanel/AdminPanelPage.jsx";
import AllUsers from "./Components/AdminPanel/AllUsers.jsx";
import AllProducts from "./Components/AdminPanel/AllProducts.jsx";
import ItemsGrid from "./Components/Listing/ItemsGrid.jsx";
import Welcome from "./Components/Welcome/Welcome.jsx";
import Contact from "./Components/Welcome/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/home/listing/household",
        element: <Listing category={"household"} />,
      },
      {
        path: "/home/listing/frozenfoods",
        element: <Listing category={"frozenfoods"} />,
      },
      {
        path: "/home/listing/biscuits",
        element: <Listing category={"biscuits"} />,
      },
      {
        path: "/home/listing/breads",
        element: <Listing category={"breads"} />,
      },
      {
        path: "/home/listing/snacks",
        element: <Listing category={"snacks"} />,
      },
      {
        path: "/home/listing/fruitsandvegetables",
        element: <Listing category={"fruitsandvegetables"} />,
      },
      {
        path: "/home/product/:id",
        element: <ProductPage />,
      },
      {
        path: "/home/cart",
        element: <CheckoutPage />,
      },
      {
        path: "/admin-panel",
        element: <AdminPanelPage />,
        children: [
          {
            path: "/admin-panel/all-users",
            element: <AllUsers />,
          },
          { path: "/admin-panel/all-products", element: <AllProducts /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
