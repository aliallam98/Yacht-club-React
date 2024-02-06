interface IProps {
    image: string;
    date: string;
    title: string;
    description: string;
    link: string;
  }
  
  const EventItem = ({
    image,
    title,
    description,
    date,
    link,
  }: IProps) => {
    return (
      <article className=" relative bg-white max-w-[380px] pb-10">
        <img
          src={image}
          alt="Destinations image"
          className="max-w-full object-cover"
        />
        <div className="p-2 px-4 space-y-1">
          <p className="text-neutral-400 text-sm">{date}</p>
          <p className="text-xl">{title}</p>
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
  
  export default EventItem;
  