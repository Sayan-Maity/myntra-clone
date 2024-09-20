import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const NavbarItems = ["men", "women", "kids", "home & living", "beauty", "studio"];
  const NavbarOtherItems = ["profile", "wishlist", "bag"];
  return (
    <div className="overflow-hidden flex flex-nowrap justify-between items-center w-full text-[#333] p-4 gap-4 shadow-md">
      <div className="flex justify-start items-center w-fit gap-4">
        <img src={logo} className="h-[3rem] w-[3rem]" />
        <div className="flex gap-4 flex-nowrap">
          {NavbarItems.map((item) => (
            <Link
              to="/"
              key={item}
              className="mr-4 text-nowrap"
            >{item}</Link>
          ))}
        </div>
      </div>

      <div className="flex justify-end items-center w-fit gap-4">
        <div className="hidden md:block bg-[#f5f5f6] mr-4">
          <input type="text" className="text-xs px-4 py-3 rounded-sm bg-[#f5f5f6] outline-[transparent] border-none" placeholder="Search for products, brands and more..." />
        </div>
        <div className="flex gap-4 flex-nowrap">
          {NavbarOtherItems.map((item) => (
            <Link
              to="/"
              key={item}
              className="mr-4 text-nowrap"
            >{item}</Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;