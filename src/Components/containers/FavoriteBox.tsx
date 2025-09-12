import { Link } from "react-router";

import { ChevronLeft } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle, CardContent, } from "../../Components/ui/card"; // prettier-ignore
import { HOMEPLACEMARKETPLACE } from "../../helpers/home.helpers";
import { MarketplaceImages } from "../../constants/image";
import { Button } from "../ui/button";

const CartBox = ({ openModal, setOpenModal }: any) => {
  const handleClose = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="bg-white h-[100%] w-3/3 md:w-3/4  lg:w-1/4 flex flex-col justify-between items-start">
      <div className="cartdialogue_popup pt-24 p-4">
        <div className="flex gap-4 w-full py-4 border-b-[0.2px] border-b-zinc-300">
          <ChevronLeft onClick={handleClose} className="text-gray-800" />
          <h1 className="cursor-pointer text-xl text-pink-600 font-medium">
            Favorite Products
          </h1>
        </div>
        <div className="">
          {HOMEPLACEMARKETPLACE.slice(0, 4).map((items, index) => (
            <Card
              className="border-t-0 border-x-0 border-b-[0.2px] border-b-zinc-300 shadow-none rounded-none grid grid-cols-[25%_75%] items-center"
              key={index}
            >
              <CardHeader>
                <img src={MarketplaceImages.chairMain} alt="" />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-pink-600 line-clamp-2">
                  {items.name}
                </CardTitle>
                <CardDescription className="text-gray-800 font-bold">
                  ${Math.round(items.price)}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="w-full m-4 px-6">
        <Link to={"/checkout"}>
          <Button className="w-[100%] bg-pink-600 py-3 cursor-pointer">
            Proceed to checkout
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CartBox;
