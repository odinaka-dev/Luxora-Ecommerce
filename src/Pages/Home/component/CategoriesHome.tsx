import { ArrowRight } from "lucide-react";
import { Button } from "../../../Components/ui/button";
import { MarketplaceImages } from "../../../constants/image";

const CategoriesHome = () => {
  return (
    <section className="my-12">
      <div className="max-w-[70%] mx-auto">
        <h1 className="text-center text-2xl capitalize">All Our Categories</h1>
        <div className="flex items-center justify-center">
          <div className="w-1/2 text-center">
            <h1 className="text-4xl capitalize pt-6 text-pink-600 pb-3">
              Explore all our categories
            </h1>
            <p className="text-zinc-500 leading-8">
              Luxona goes above what you see here, we are open to all stores and
              we sell all, whethere you are a buyer or a seller we have just
              what you need. our category rangtes from fashion, lifestyle wears,
              home appliances and futiristic vendor markeplace integration
              systems. Explore more of our services and what we have install in
              our markeplace shop page.
            </p>
            <Button className="my-4 rounded-none bg-pink-500 py-3 px-8">
              Shop
              <ArrowRight />
            </Button>
          </div>
          <div>
            <img
              src={MarketplaceImages.CategoryImage}
              alt="categories"
              className="object-fit w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesHome;
