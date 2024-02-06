import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../constants";
import Logo from "../Logo";
import useNavbarScroll from "../../hooks/useNavBar";

const Navbar = () => {
  const { pathname } = useLocation();
  const isScroll = useNavbarScroll();

  return (
    <header
      className={`${"p-4 fixed top-0 w-full z-50 text-black"} ${
        isScroll && " backdrop-blur-sm shadow-md "
      }`}
    >
      <nav className="container flex items-center justify-between">
        <Logo />
        <ul className="flex items-center gap-2">
          {navLinks.map((link, i) => {
            return (
              <Link
                key={i}
                className={`${
                  pathname === link.path && "text-blue-600"
                }  capitalize tracking-wide`}
                to={link.path}
              >
                {link.label}
              </Link>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
