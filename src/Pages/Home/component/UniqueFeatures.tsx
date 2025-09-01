import { ArrowRight } from "lucide-react";
import { Button } from "../../../Components/ui/button";
import { MarketplaceImages } from "../../../constants/image";

const UniqueFeatures = () => {
  return (
    <div className="bg-[#F1F0FF] py-16">
      <div className="grid grid-cols-2 items-center max-w-[60%] mx-auto">
        <div className="">
          <img
            src={MarketplaceImages.SemiBanner}
            alt=""
            className="object-fit w-full"
          />
        </div>
        <div className="semi_text">
          <h1 className="capitalize text-4xl font-semibold">
            Unique, Trendy and latest Products for All
          </h1>
          <p className="text-zinc-500 text-base leading-7">
            Here are Luxona we posses the very best when it comes to amazing
            fashiob and next level store products, for your homes, wears, kids{" "}
            <br />
            and many more like groceries and the likes.
          </p>
          <div className="">
            <Button className="border-none rounded-none px-8 py-4 mt-4 bg-pink-600">
              Shop Now <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueFeatures;
