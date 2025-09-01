import React, { useState } from "react";
import Header from "../../Components/containers/Header";
// import Footer from "../../Components/containers/Footer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardAction,
  CardDescription,
  CardFooter,
} from "../../Components/ui/card";
import { MarketplaceImages } from "../../constants/image";
import { Button } from "../../Components/ui/button";
import {
  CircleDollarSign,
  Minus,
  PackageCheck,
  Plus,
  Square,
  Truck,
} from "lucide-react";

const SingleProduct = () => {
  const [count, setCount] = useState(1);

  return (
    <React.Fragment>
      <Header />
      <SingleProductInformation count={count} setCount={setCount} />
      {/* <Footer /> */}
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
        <CardHeader className="w-full">
          {selectedImages ? (
            <img
              src={selectedImages}
              alt=""
              className="w-full h-[80%] object-contain"
            />
          ) : (
            <img src="" alt="no-image-found" />
          )}

          {/* thumbnails image */}
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
            <CardTitle className="border-b border-b-zinc-200 pb-6">
              <h1 className="text-3xl text-pink-600">
                LuxeComfort Ergonomic Lounge Chair
              </h1>
            </CardTitle>
            <p className="text-[16px] leading-8 tracking-wider py-4">
              Sink into elegance with the LuxeComfort Ergonomic Lounge Chair —
              designed for modern interiors, built for all-day comfort. With its
              contoured backrest, soft linen upholstery, and minimalist frame,
              this chair blends style and support effortlessly.
            </p>
            <div className="flex justify-between items-center">
              <h1 className="text-3xl py-4 font-semibold text-gray-800">
                $240
              </h1>
              <div className="flex gap-2">
                <Square size={24} color="red" fill="red" stroke="red" />
                <Square size={24} color="gold" fill="gold" stroke="gold" />
                <Square size={24} color="brown" fill="brown" stroke="brown" />
              </div>
            </div>
          </CardDescription>
          <CardFooter className="flex flex-col p-0 border-b border-b-zinc-300 pb-5">
            <CardAction className="grid grid-cols-2 w-full gap-4 sm:gap-8">
              <Button className="w-full rounded-none shadow-none bg-pink-600 py-6 text-white cursor-pointer">
                Add to cart
              </Button>
              <div className="bg-pink-50 text-gray-800 flex gap-12 items-center justify-between px-4">
                <Minus onClick={handleMinus} />
                <span>{count}</span>
                <Plus onClick={handleAdd} />
              </div>
            </CardAction>
          </CardFooter>
          <div className="shiping_details flex justify-between mt-4 text-zinc-500">
            <div className="flex flex-col-reverse sm:flex-row gap-2 items-center">
              <p>Free delivery</p>
              <Truck />
            </div>
            <div className="flex flex-col-reverse sm:flex-row gap-2 items-center">
              <p>Fast Payment</p>
              <CircleDollarSign />
            </div>
            <div className="flex flex-col-reverse sm:flex-row gap-2 items-center">
              <p>Proper Packaging</p>
              <PackageCheck />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function RelatedProducts() {}

export default SingleProduct;
