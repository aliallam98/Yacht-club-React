interface IProps {
  image: string;
  latitude: string;
  longitude: string;
  name: string;
  description: string;
  link: string;
}

const Item = ({
  image,
  name,
  description,
  latitude,
  longitude,
  link,
}: IProps) => {
  return (
    <article className=" relative bg-white max-w-[370px] pb-10 mx-auto">
      <img
        src={image}
        alt="Destinations image"
        className="max-w-full object-cover"
      />
      <div className="p-2 px-4 space-y-1">
        <p className="text-neutral-400 text-sm">
          <span>{latitude}</span> - {longitude}
        </p>
        <p className="text-xl">{name}</p>
        <p className="text-neutral-400 text-sm max-w-sm ">
          {description.split(" ").slice(0, 10).join(" ")}
        </p>

        <button className="absolute bottom-2 left-0 capitalize py-2 px-4 text-sm -tracking-wide">
          {link}
        </button>
      </div>
    </article>
  );
};

export default Item;
