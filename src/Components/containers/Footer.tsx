// import { Facebook, Github, Instagram, X } from "lucide-react";

import { Facebook, Github, Instagram, ShoppingBag, X } from "lucide-react";
import { Link } from "react-router";
import { FOOTERTWOCONTENTS } from "../../helpers/footer.helpers";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-8">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-[30%_80%] gap-10 py-8">
        <div className="">
          <div className="logo text-white">
            <Link to={"/"} className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold">Luxora</span>
            </Link>
          </div>
          <p className="line-clamp-4 mt-4 pb-6 font-medium">
            Curating exceptional fashion experiences <br /> with sustainable
            practices and timeless design.
          </p>
          <div className="flex gap-12 items-center pb-4">
            <Facebook />
            <Instagram />
            <X />
            <Github />
          </div>
        </div>
        <main className="footer_main grid sm:grid-cols-2 md:grid-cols-3 gap-8 items-center">
          {FOOTERTWOCONTENTS.map((contents, index) => (
            <div className="" key={index}>
              <h1 className="text-2xl font-semibold capitalize mb-2">
                {contents.title}
              </h1>
              <ul className="flex flex-col gap-2">
                {contents.links.map((link, linkIndex) => (
                  <Link to={link.linkUrl} key={linkIndex}>
                    <li className="font-medium">{link.linkName}</li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </main>
      </div>
      <div className="border-t-[0.1px] border-t-gray-500 flex flex-col sm:flex-row gap-8 sm:gap-24 sm:items-center pt-4">
        <p className="font-normal capitalize tracking-wider">
          copyright &copy; {new Date().getFullYear()} Luxona. All rights
          reserved.
        </p>
        <div className="flex flex-col sm:flex-row font-normal gap-8 cursor-pointer capitalize">
          <p>Privacy policy</p>
          <p>terms of services</p>
          <p>cookie policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
