import React, { useState } from "react";
import { ArrowRight, Blocks, Filter } from "lucide-react";
import { Heart, List, LoaderCircle, ShoppingCart } from "lucide-react"; // prettier-ignore
import { Link } from "react-router";
import Header from "../../Components/containers/Header";
import Footer from "../../Components/containers/Footer";
import { MarketplaceImages } from "../../constants/image";
import { Input } from "../../Components/ui/input";
import { Card, CardContent } from "../../Components/ui/card";
import { CardHeader, CardTitle } from "../../Components/ui/card"; // prettier-ignore
import { Button } from "../../Components/ui/button";
import CartDialogueBox from "../../Components/containers/FavoriteBox";
import { SidebarProvider } from "../../Components/ui/sidebar";
import { HOMEPLACEMARKETPLACE } from "../../helpers/home.helpers";

// bg styles for the background Image
const BackgroundStyles = {
  backgroundImage: `url(${MarketplaceImages.Marketplace})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backgroundBlendMode: "darken",
  width: "100%",
  height: "40vh",
};

const Shop = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenCartBox = () => {
    setOpenModal(!openModal);
  };

  return (
    <React.Fragment>
      <SidebarProvider>
        <div className="relative">
          <Header />
          <ShopPage handleOpenCartBox={handleOpenCartBox} />
          <Footer />
          {openModal && (
            <div className="fixed h-[100vh] min-h-screen overflow-x-hidden inset-0 bg-black/40 backdrop-blur-xs z-50 flex items-start justify-end">
              <CartDialogueBox
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            </div>
          )}
        </div>
      </SidebarProvider>
    </React.Fragment>
  );
};

export function ShopPage({ handleOpenCartBox }: any) {
  return (
    // shop page banner
    <div className="pt-16">
      <div
        className="shop-banner flex items-center pl-12"
        style={BackgroundStyles}
      >
        <div className="">
          <h1 className="text-white text-3xl">Luxona Market Place</h1>
        </div>
      </div>
      <div className="marketplace_data bg-zinc-50 pt-8">
        <MarketPlace handleOpenCartBox={handleOpenCartBox} />
      </div>
    </div>
  );
}

export function MarketPlace({ handleOpenCartBox }: any) {
  const [sortList, setSortList] = useState<boolean>(false);

  // set sort lists
  const handleSortList = () => {
    setSortList(true);
  };

  // set grid lists
  const handleGridList = () => {
    setSortList(false);
  };

  return (
    <section className="mx-auto max-w-[95%] sm:max-w-[95%] lg:max-w-[80%]">
      <div className="flex flex-row sm:flex-row sm:items-center justify-between mb-8">
        <h1 className="sm:text-2xl capitalize font-medium">
          Luxona Ecommerce store
        </h1>
        <div className="flex sm:space-x-6 items-center">
          <div className="flex gap-4 sm:gap-8 items-center">
            <Blocks
              size={20}
              strokeWidth={2}
              className="cursor-pointer hover:border-b hover:border-b-gray-800"
              onClick={handleGridList}
            />
            <List
              size={20}
              strokeWidth={2}
              className="cursor-pointer hover:border-b hover:border-b-gray-800"
              onClick={handleSortList}
            />
            <Filter
              size={20}
              strokeWidth={2}
              className="cursor-pointer hover:border-b hover:border-b-gray-800"
            />
          </div>
          <div className="search hidden sm:flex">
            <Input
              type="search"
              name="search"
              className="rounded-none"
              placeholder="search all products"
            />
          </div>
        </div>
      </div>
      {/* marketplace product */}
      {HOMEPLACEMARKETPLACE.length < 0 ? (
        <div className="py-48 flex justify-center items-center w-full">
          <div>
            <LoaderCircle size={60} strokeWidth={1} className="animate-spin" />
            <p>Loading..</p>
          </div>
        </div>
      ) : (
        <div>
          {sortList ? (
            <div className="grid gris-cols-1 md:grid-cols-2 gap-4">
              {HOMEPLACEMARKETPLACE.slice(0, 12).map((Items, index) => (
                <Card
                  className="grid grid-cols-1 md:grid-cols-2 items-start gap-4 border-none rounded-none mb-4 shadow-none"
                  key={index}
                >
                  <CardHeader>
                    <div className="w-[100%] h-[100%] bg-zinc-50">
                      <img
                        src={MarketplaceImages.chairMain}
                        alt="images_check"
                        className="w-[80%] object-fill"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col justify-between items-start h-[90%]">
                    <div>
                      <h1 className="text-xl text-pink-700 line-clamp-1">
                        {Items.name}
                      </h1>
                      <p className="text-zinc-700 line-clamp-2">
                        {Items.description}
                      </p>
                    </div>
                    <div className="mt-4 flex justify-between items-center w-full">
                      <h1 className="font-medium text-xl">
                        ${Math.round(Items.price)}
                      </h1>
                      <div className="flex gap-4 items-center">
                        <Link to={`/singleProduct/${Items.id}`}>
                          <ShoppingCart />
                        </Link>
                        <Heart
                          className="cursor-pointer"
                          onClick={handleOpenCartBox}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-8">
              {HOMEPLACEMARKETPLACE.slice(0, 12).map((items, index) => (
                <Card className="border-none rounded-none relative" key={index}>
                  <CardHeader>
                    <CardTitle>
                      <img src={MarketplaceImages.chairMain} alt="" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h1 className="text-lg text-pink-600 line-clamp-1">
                      {items.name}
                    </h1>
                    <p className="text-base text-zinc-600">
                      {items.description}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <h1 className="text-xl text-pink-600 font-semibold">
                        ${Math.round(Number(`${items.price}`))}
                      </h1>
                      <div className="flex gap-2 items-center">
                        <Link to={`/singleProduct/${items.id}`}>
                          <Button className="rounded-none bg-gray-800">
                            View Product <ArrowRight />{" "}
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <div className="absolute_contents absolute top-3 left-3 text-grey-800 flex flex-col gap-6">
                      {/* <Plus /> */}
                      <Heart
                        size={20}
                        className="cursor-pointer"
                        onClick={handleOpenCartBox}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export function FilterComponents() {
  return (
    <section className="">
      <div className="">Filter</div>
    </section>
  );
}

export default Shop;
