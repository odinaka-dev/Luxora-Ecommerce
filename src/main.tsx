import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// tansatck imports and tanstack dev tools
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// router imports
import { createBrowserRouter, RouterProvider } from "react-router";

// pages imports
import Layout from "./Components/containers/Layout";
import Home from "./Pages/Home/Homepage";
import Shop from "./Pages/shop/Shop";
import Error from "./Pages/Error/error";
import Signup from "./Pages/Auth/Signup";
import LoginPage from "./Pages/Auth/Login";
import SingleProduct from "./Pages/Product/SingleProduct";
import CheckoutPage from "./Pages/Checkout/checkout";
import ForgotPassword from "./Pages/Auth/ForgotPassword";

const queryClient = new QueryClient();

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/shop", element: <Shop /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <Signup /> },
      { path: "/singleProduct/:id", element: <SingleProduct /> },
      { path: "/checkout", element: <CheckoutPage /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={route} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
