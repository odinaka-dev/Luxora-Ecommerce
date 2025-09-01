import { ShoppingBasketIcon } from "lucide-react";
import { Button } from "../../Components/ui/button";
import React from "react";
import FeaturedProducts from "./component/FeaturedProduct";
import { MarketplaceImages } from "../../constants/image";
import { SUBANNERHELPERS } from "../../helpers/home.helpers";
import UniqueFeatures from "./component/UniqueFeatures";
import ShopMain from "./component/shopping";
import SubHomeFooter from "./component/subHomeFooter";
import CategoriesHome from "./component/CategoriesHome";
import Header from "../../Components/containers/Header";
import Footer from "../../Components/containers/Footer";

const home = () => {
  return (
    <React.Fragment>
      <Header />
      <HeroBanner />
      <SubBanner />
      <div className="max-w-[70%] mx-auto">
        <FeaturedProducts />
      </div>
      <UniqueFeatures />
      <ShopMain />
      <CategoriesHome />
      <SubHomeFooter />
      <Footer />
    </React.Fragment>
  );
};

// hero banner
const HeroBanner = () => {
  return (
    <div className="hero-banner bg-[#f2f0ff] min-h-[70vh] pt-48 relative">
      <div className="grid grid-cols-2 items-center max-w-[80%] mx-auto">
        <div className="">
          <img
            src={MarketplaceImages.Lamp}
            alt=""
            className="absolute top-10 left-[20%] z-[10] object-fit w-[300px]"
          />
          <h1 className="capitalize text-8xl bg-gradient-to-r from-gray-700 via-yellow-400 to-gray-950 bg-clip-text text-transparent mt-12">
            Discover your perfect style
          </h1>
          <p className="line-clamp-3 leading-6 mt-2 w-[80%] text-zinc-500">
            Curated Fashion Pieces that blend timeless elegance with
            contemporary trends. Express your unique personality with our
            premium collection.
          </p>
          <div className="banner_button mt-4">
            <Button className="w-32 bg-gray-800 text-white py-6 rounded-none">
              Shop Now
              <ShoppingBasketIcon />
            </Button>
          </div>
        </div>
        <div className="">
          <img
            src={MarketplaceImages.Homepagebanner}
            alt="Homepage Banner"
            className="w-[80%] object-fit"
          />
        </div>
      </div>
    </div>
  );
};

const SubBanner = () => {
  return (
    <section className="max-w-[80%] mx-auto py-8 text-zinc-600">
      <div className="grid grid-cols-4 items-center border border-zinc-300 rounded-sm p-6">
        {SUBANNERHELPERS.map((item, index) => (
          <div
            className={`${
              index < 3 ? "border-r border-zinc-100" : "border-none"
            } flex flex-row items-center justify-center`}
            key={index}
          >
            <div className="text-2xl flex items-center gap-4">
              <item.icon strokeWidth={1} size={60} fontVariant={""} />
              <div>
                <h5 className="text-lg font-semibold text-pink-600">
                  {item.banner}
                </h5>
                <p className="text-base">{item.subtext}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default home;
