import { Heart, Menu, ShoppingBag, ShoppingCart } from "lucide-react";
import { HEADERCONTENTS } from "../../helpers/header.helpers";
import { Link } from "react-router";
import { Input } from "../ui/input";

const Header = () => {
  return (
    <header className="border-none fixed top-0 w-full bg-white shadow-sm z-1000">
      <div className="py-6 mx-auto flex justify-between items-center container">
        {/* the navigation for both logo and links */}
        <nav className="flex items-center space-x-6">
          <div className="logo">
            <Link to={"/"} className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">Luxora</span>
            </Link>
          </div>
          <ul className="flex gap-2 items-center space-x-6">
            {HEADERCONTENTS.map((items, index) => (
              <Link to={items.Link} key={index}>
                <li>{items.title}</li>
              </Link>
            ))}
          </ul>
        </nav>
        {/* the icons for the other aspects */}
        <div className="flex gap-8 items-center">
          <div className="">
            <Input
              type="search"
              placeholder="Search Products..."
              className="w-64 rounded-full py-5 px-4 cursor-pointer appearance-none"
            />
          </div>
          <div className="flex gap-4 items-center cursor-pointer">
            <ShoppingCart className="text-xs" />
            <Heart />
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
