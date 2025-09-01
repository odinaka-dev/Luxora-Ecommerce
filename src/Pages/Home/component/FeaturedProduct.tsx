import { SHOPBYBRANDS } from "../../../helpers/home.helpers";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../Components/ui/card";
import { Heart, Plus, Share2 } from "lucide-react";

const FeaturedProduct = () => {
  return (
    <section className="my-12">
      <h1 className="text-gray-800 text-2xl text-center">Featured Product</h1>
      {/* featured product */}
      <div
        className="grid grid-cols-4 items-center gap-4 cursor-pointer py-10
      "
      >
        {SHOPBYBRANDS.map((items, index) => (
          <Card
            className="border-none pt-0 rounded-t-none relative"
            key={index}
          >
            <CardTitle className="aspect-square  overflow-hidden">
              <img
                src={items.image}
                alt={items.name}
                className="w-full h-full object-cover bg-gray-50"
              />
              <div className="absolute top-0 pl-2 pt-4 flex flex-col text-pink-600 gap-6">
                <div className="bg-white rounded-full p-2 hover:bg-pink-600 hover:text-white duration-300">
                  <Share2 strokeWidth={2} size={18} className="" />
                </div>
                <div className="bg-white rounded-full p-2 hover:bg-pink-600 hover:text-white duration-300">
                  <Heart strokeWidth={2} size={18} className="" />
                </div>
                <div className="bg-white rounded-full p-2 hover:bg-pink-600 hover:text-white duration-300">
                  <Plus strokeWidth={2} size={18} className="" />
                </div>
              </div>
            </CardTitle>
            <CardHeader>
              <h4 className="line-clamp-1">{items.name}</h4>
              <CardDescription>
                <p className="text-pink-600 font-bold">{items.category}</p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-2 text-zinc-500">{items.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProduct;
