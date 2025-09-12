import React, { useState } from "react";
import { CircleDollarSign, Heart, Minus, PackageCheck, Plus, Truck, } from "lucide-react"; // prettier-ignore

import { Button } from "../../Components/ui/button"; // prettier-ignore
import { Card, CardContent, CardHeader, CardTitle, CardAction, CardDescription, CardFooter, } from "../../Components/ui/card"; // prettier-ignore
import Header from "../../Components/containers/Header";
import { MarketplaceImages } from "../../constants/image";
// import { HOMEPLACEMARKETPLACE } from "../../helpers/home.helpers";
// import { Link } from "react-router";

const SingleProduct = () => {
  const [count, setCount] = useState(1);

  return (
    <React.Fragment>
      <Header />
      <SingleProductInformation count={count} setCount={setCount} />
      <RelatedProducts />
    </React.Fragment>
  );
};

export function SingleProductInformation({ count, setCount }: any) {
  // handle Image change
  const [selectedImages, setSelectedImages] = useState<string | null>(
    MarketplaceImages.chairMain
  );
  function handleAdd() {
    setCount(count + 1);
  }
  function handleMinus() {
    if (count <= 1) {
      setCount(count);
    } else {
      setCount(count - 1);
    }
  }

  const ImageChange = [
    MarketplaceImages.chairMain,
    MarketplaceImages.chairSix,
    MarketplaceImages.chairEleven,
    MarketplaceImages.chairNine,
  ];

  return (
    <div className="pt-28 max-w-[98%] md:max-w-[90%] lg:max-w-[80%] mx-auto mb-12">
      <Card className="border-none shadow-none rounded-none grid md:grid-cols-2 items-start gap-8">
        <CardHeader className="">
          {selectedImages ? (
            <div className="bg-zinc-50 rounded-xl flex items-center justify-center">
              <img
                src={selectedImages}
                alt=""
                className="w-100 h-100 object-contain"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
          ) : (
            <img src="" alt="no-image-found" />
          )}
          <div className="grid grid-cols-4 items-center">
            {ImageChange.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className={`w-[50%] object-fill cursor-pointer ${
                  selectedImages === img
                    ? "border-2 border-zinc-600 rounded-md"
                    : ""
                }`}
                onClick={() => setSelectedImages(img)}
              />
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <CardTitle className="pb-6">
              <h1 className="text-3xl text-black border-b border-b-zinc-100 pb-4">
                LuxeComfort Ergonomic Lounge Chair
              </h1>
            </CardTitle>
            <div className="py-4 pt-0">
              <h2 className="font-medium text-[20px] capitalize text-black">
                Description
              </h2>
              <p className="text-[14px] leading-7 tracking-wider text-balance">
                Sink into elegance with the LuxeComfort Ergonomic Lounge Chair —
                designed for modern interiors, built for all-day comfort. With
                its contoured backrest, soft linen upholstery, and minimalist
                frame, this chair blends style and support effortlessly.
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="text-3xl py-4 font-semibold text-gray-800">
                $240
              </h1>
              <div className="flex gap-2 cursor-pointer">
                <Heart size={24} color="black" stroke="black" />
              </div>
            </div>
          </CardDescription>
          <CardFooter className="flex flex-col p-0 border-b border-b-zinc-300 pb-5">
            <CardAction className="grid grid-cols-2 w-full gap-4 sm:gap-0">
              <Button className="w-full rounded-full shadow-none bg-pink-600 py-6 text-white cursor-pointer">
                Add to cart
              </Button>
              <Button className="bg-pink-50 hover:bg-pink-50 text-gray-800 flex gap-12 items-center justify-between px-4 py-6 rounded-full">
                <span onClick={handleMinus} className="cursor-pointer">
                  <Minus className="cursor-pointer" />
                </span>
                <span>{count}</span>
                <span onClick={handleAdd} className="cursor-pointer">
                  <Plus className="cursor-pointer" />
                </span>
              </Button>
            </CardAction>
          </CardFooter>
          <div className="shiping_details flex justify-between mt-4 text-zinc-700">
            <div className="flex flex-col-reverse sm:flex-row gap-2 items-center">
              <p>Free delivery</p>
              <p className="text-black bg-zinc-100 rounded-full p-2">
                <Truck />
              </p>
            </div>
            <div className="flex flex-col-reverse sm:flex-row gap-2 items-center">
              <p>Fast Payment</p>
              <p className="text-black bg-zinc-100 rounded-full p-2">
                <CircleDollarSign />
              </p>
            </div>
            <div className="flex flex-col-reverse sm:flex-row gap-2 items-center">
              <p>Proper Packaging</p>
              <p className="text-black bg-zinc-100 rounded-full p-2">
                <PackageCheck />
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function Reviews() {
  return <section className=""></section>;
}

export function RelatedProducts() {
  return (
    <section className="max-w-[80%] mx-auto border-t border-zinc-300 pt-8">
      <h1 className="text-3xl font-bold text-black capitalize">
        Related Products
      </h1>
      {/* related products styles goes here */}
    </section>
  );
}

export default SingleProduct;
