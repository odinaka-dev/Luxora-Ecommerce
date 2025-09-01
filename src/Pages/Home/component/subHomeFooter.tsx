import { ArrowRight } from "lucide-react";
import { Button } from "../../../Components/ui/button";

const SubHomeFooter = () => {
  return (
    <div className="hidden bg-pink-100 text-gray-800 items-center justify-center p-24">
      <div className="max-w-[70%] mx-auto text-center">
        <div className="">
          <h1 className="text-4xl capitalize line-clamp-2 font-semibold">
            Get information on our new and <br /> trendy release
          </h1>
          <p className="text-zinc-700 tracking-widest mt-2">
            Get updated information on our new{" "}
            <span className="text-pink-600">release</span>
          </p>
          <Button className="mt-5 bg-pink-600 text-white rounded-none border-none">
            Shop Now <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubHomeFooter;
