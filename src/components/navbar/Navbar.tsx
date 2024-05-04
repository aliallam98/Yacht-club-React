import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../constants";
import Logo from "../Logo";
import useNavbarScroll from "../../hooks/useNavBar";
import { useState } from "react";

const Navbar = () => {
  const [isMenuShow, setIsMenuShow] = useState(true);
  const { pathname } = useLocation();
  const isScroll = useNavbarScroll();

  const menuCloseHandler = () => {
    setIsMenuShow(false);
  };
  const menuOpenHandler = () => {
    setIsMenuShow(true);
  };
  return (
    <header
      className={`${"p-4 fixed top-0 w-full z-50 text-black"} ${
        isScroll && " backdrop-blur-sm shadow-md "
      }`}
    >
      <nav className="container flex items-center justify-between">
        <Logo />
        <ul className="hidden lg:flex items-center gap-2  ">
          {navLinks.map((link, i) => {
            return (
              <Link
                key={i}
                className={`${
                  pathname === link.path && "text-sky-500"
                }  capitalize tracking-wide`}
                to={link.path}
              >
                {link.label}
              </Link>
            );
          })}
        </ul>
        <button onClick={menuOpenHandler} className="block lg:hidden ">
          <img
            src="/1024px-Hamburger_icon_white.svg.png"
            width={30}
            height={30}
            alt="burger-menu"
          />
        </button>
      </nav>
      {/* Mobile Menu */}
      {isMenuShow && (
        <ul className="absolute lg:hidden left-1/2 top-0 -translate-x-1/2 flex flex-col gap-y-4 py-16  items-center bg-white  w-full h-screen">
          {navLinks.map((link, i) => {
            return (
              <Link
                key={i}
                className={`${
                  pathname === link.path && "text-blue-600"
                }  capitalize tracking-wide`}
                to={link.path}
                onClick={menuCloseHandler}
              >
                {link.label}
              </Link>
            );
          })}
          <span
            className="absolute top-6 right-6 font-bold text-xl"
            onClick={menuCloseHandler}
          >
            X
          </span>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
