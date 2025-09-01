import React from "react";
import Header from "../../Components/containers/Header";
import { Input } from "../../Components/ui/input";
import { Button } from "../../Components/ui/button";
// import { useForm } from "react-hook-form";
import { MarketplaceImages } from "../../constants/image";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Login = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="min-h-screen max-h-[100vh] grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        <LoginForm />
        <div className="hidden md:flex justify-center items-center bg-pink-50 h-[100vh]">
          <img src={MarketplaceImages.LogsImage} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};

export function LoginForm() {
  // execute the form submission here

  return (
    <div className="px-8 xl:px-36 pt-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 pb-3">
        Start Buying, Login.
      </h1>
      <p className="text-zinc-800 text-center pb-3">
        Login to your Luxona account and enjoy amazing discounts.
      </p>
      <form method="POST">
        <div className="flex flex-col gap-8 items-center">
          <Input
            type="email"
            name="email"
            placeholder="email@gmail.com"
            className="py-6 border-[1px] shadow-none"
          />
          <Input
            type="Password"
            name="password"
            placeholder="Password123"
            className="py-6 border-[1px] shadow-none"
          />

          {/* <Link
            to={"/forgot-password"}
            className="text-zinc-400 font-normal text-right italic"
          >
            Forgot Password
          </Link> */}

          <Button className="w-full bg-purple-800 hover:bg-pink-950 duration-300 py-5 cursor-pointer">
            Login
          </Button>
          <Button className="w-full bg-white text-gray-800 border border-gray-200 hover:bg-white">
            <FcGoogle /> Login with Goggle
          </Button>
          <Button variant={"link"} className="">
            Don't have an acount,{" "}
            <Link
              to={"/signup"}
              className="font-bold text-gray-800 underline cursor-pointer"
            >
              {" "}
              Sign up
            </Link>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
