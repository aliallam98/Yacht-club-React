import { marinasFirstSection } from "../../constants";
import IsWideScreen from "../../hooks/is-wide-screen";
import MarinasImage from "./MarinasImage";

const MarinasImageSection = () => {
  const matches = IsWideScreen();

  return (
    <div className="container">
      {marinasFirstSection.map((item, i) => {
        const px = matches ? -65 * i : 0;
        return (
          <MarinasImage
            action={item.action}
            heading={item.heading}
            icon={item.icon}
            paragraph={item.paragraph}
            imageUrl={item.image}
            px={px}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default MarinasImageSection;
