import { Link } from "react-router-dom";

interface IProps {
  imageUrl: string;
  heading: string;
  paragraph: string;
  action?: string;
  px: number;
  icon: string;
  link?: string;
}

const MarinasImage = ({
  action,
  heading,
  imageUrl,
  paragraph,
  px,
  icon,
  link,
}: IProps) => {
  return (
    <div
      className="relative flex flex-col lg:flex-row items-center gap-10 lg:odd:flex-row-reverse mt-6 "
      style={{ top: px }}
    >
      <div className="relative shadow-lg shadow-black/40 shadowbounce">
        <img
          className="relative max-w-full max-h-full"
          src={imageUrl}
          alt="image"
          // style={{ top: px}}
          width={800}
        />
      </div>
      <div className="relative flex flex-col lg-flex-row space-y-2 sm:items-center sm:text-center">
        <img src={icon} alt="icon" width={30} height={30} />
        <h4 className="text-3xl">{heading}</h4>
        <p className="max-w-xl">{paragraph}</p>
        {link ? (
          <Link to={link} >
            <button className="border border-black rounded-sm px-6 py-2 capitalize w-full lg:w-fit  hover:bg-black hover:text-white transition">
              {action}
            </button>
          </Link>
        ) : (
          <button className="border border-black rounded-sm px-6 py-2 capitalize w-full lg:w-fit  hover:bg-black hover:text-white transition">
            {action}
          </button>
        )}
      </div>
    </div>
  );
};

export default MarinasImage;
