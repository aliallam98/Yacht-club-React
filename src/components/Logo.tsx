import { Link } from "react-router-dom";
import LogoImage from "/images/Dubai-Marina-logo-white.svg";
import LogoImageBlue from "/images/Dubai-Marine-Header.svg";
import useNavbarScroll from "../hooks/useNavBar";


const Logo = () => {
  const isScroll = useNavbarScroll();

  return (
    <Link to={"/"}>
      <img
      className="text-white"
      src={isScroll ? LogoImageBlue :LogoImage} alt="logo" width={140} height={60} />
    </Link>
  );
};

export default Logo;
