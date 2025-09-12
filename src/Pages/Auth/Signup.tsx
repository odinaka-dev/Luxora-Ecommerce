import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

import Header from "../../Components/containers/Header";
import { Input } from "../../Components/ui/input";
import { Button } from "../../Components/ui/button";
import { MarketplaceImages } from "../../constants/image";
// import { useForm } from "react-hook-form";
import * as z from "zod";

const login = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="min-h-screen max-h-[100vh] grid grid-cols-2 items-center gap-6">
        <LoginForm />
        <div className="flex justify-center items-center bg-pink-50 h-[100vh]">
          <img src={MarketplaceImages.LogsImage} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};

export function LoginForm() {
  // execute the form submission here

  return (
    <div className="px-48">
      <h1 className="text-4xl font-bold text-center text-gray-800 pb-3">
        Start Buying, Login.
      </h1>
      <p className="text-zinc-800 text-center pb-3">
        Login to your Luxona account and enjoy amazing discounts.
      </p>
      <form method="POST">
        <div className="flex flex-col gap-6 items-center">
          <Input
            type="text"
            name="Firstname"
            placeholder="Enter your Firstname"
            className="py-6 border-[1px] shadow-none"
          />
          <Input
            type="text"
            name="Lastname"
            placeholder="Enter your Lastname"
            className="py-6 border-[1px] shadow-none"
          />
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="py-6 border-[1px] shadow-none"
          />
          <Input
            type="number"
            name="Phone Number"
            placeholder="Enter your Phone Number"
            className="py-6 border-[1px] shadow-none"
          />
          <Input
            type="Password"
            name="password"
            placeholder="Enter your Password"
            className="py-6 border-[1px] shadow-none"
          />

          <Button className="w-full bg-purple-800 hover:bg-pink-950 duration-300 py-5 cursor-pointer">
            Sign up
          </Button>
          <Button className="w-full bg-white text-gray-800 border border-gray-200 hover:bg-white">
            <FcGoogle /> Sign up with Goggle
          </Button>
          <Button variant={"link"} className="">
            Already have an acount,{" "}
            <Link
              to={"/login"}
              className="font-bold text-gray-800 underline cursor-pointer"
            >
              {" "}
              Login
            </Link>
          </Button>
        </div>
      </form>
    </div>
  );
}

export function DialogVerified() {
  return <section className=""></section>;
}

export default login;
