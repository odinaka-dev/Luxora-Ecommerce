import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // prettier-ignore
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router"; // prettier-ignore

import Layout from "./Components/containers/Layout";
import Error from "./Pages/Error/error";
import Home from "./Pages/Home/Homepage";
import Shop from "./Pages/shop/Shop";
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
