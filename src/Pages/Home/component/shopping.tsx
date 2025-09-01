import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../Components/ui/card";
import { TRENDINGPRODUCTS } from "../../../helpers/home.helpers";
import { MarketplaceImages } from "../../../constants/image";
import { Button } from "../../../Components/ui/button";

const HomePageShop = () => {
  return (
    <div className="max-w-[80%] mx-auto py-16">
      <h1 className="text-gray-800 text-2xl text-center">Trending Products</h1>
      <div
        className="grid grid-cols-4 items-center gap-4 cursor-pointer py-10
      "
      >
        {TRENDINGPRODUCTS.map((items, index) => (
          <Card
            className="border-none p-2 rounded-t-none relative text-center"
            key={index}
          >
            <CardTitle className="aspect-square  overflow-hidden w-[80%] flex flex-col items-center justify-center">
              <img
                src={items.image}
                alt={items.name}
                className="w-full h-full object-cover aspect-square"
              />
            </CardTitle>
            <CardHeader>
              <h4 className="line-clamp-1">{items.name}</h4>
              <CardDescription>
                <p className="text-pink-600 font-bold">{items.category}</p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-800 font-bold">${items.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="">
        <SubHomePageShop />
      </div>
    </div>
  );
};

const SubHomePageShop = () => {
  return (
    <section className="">
      <div className="grid grid-cols-2 items-start gap-10">
        <div className="bg-pink-100 flex flex-col items-start justify-between">
          <div className="px-8 pt-4">
            <h2 className="text-2xl">23% Off all our Products</h2>
            <Button variant={"link"} className="p-0 underline text-pink-600">
              Shop
            </Button>
          </div>
          <div className="aspect-video overflow-hidden">
            <img
              src={MarketplaceImages.chairOne}
              alt=""
              className="object-fit"
            />
          </div>
        </div>
        <div className="bg-purple-100 flex flex-col items-start justify-between0">
          <div className="px-8 pt-4">
            <h2 className="text-2xl">23% Off all our collections</h2>
            <Button variant={"link"} className="p-0 underline text-pink-600">
              collection
            </Button>
          </div>
          <div className="aspect-video overflow-hidden">
            <img
              src={MarketplaceImages.chairThree}
              alt=""
              className="object-fit"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageShop;
