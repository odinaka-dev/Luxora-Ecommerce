import { MarketplaceImages } from "../../constants/image";
import { Button } from "../../Components/ui/button";
import { Link } from "react-router";

const error = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="">
        <h1 className="font-bold text-gray-800 text-center text-7xl">
          404 Error
        </h1>
        <img src={MarketplaceImages.ErrorImage} alt="" className="" />
        <div className="flex justify-center items-center">
          <Link to={"/"}>
            <Button className="text-white bg-gray-800 py-6 px-8">
              Go back home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default error;
