import { useState } from "react";
import { locations } from "../../../constants";
import Item from "./Item";

const MustVisit = () => {
  const [endInx, setEndInx] = useState(3);
  return (
    <section className="py-10">
      <div className=" mb-12">
        <h2 className="text-3xl font-semibold text-center">
          Must Visit Destinations
        </h2>
        <span className="block mx-auto w-20 bg-black h-[2px] my-4"></span>
      </div>

      <div className="bg-neutral-200/50 py-10">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {locations.slice(0, endInx).map((item, i) => (
            <Item
              key={i}
              latitude={item.latitude}
              longitude={item.longitude}
              name={item.name}
              description={item.description}
              image={item.image}
              link={item.link}
            />
          ))}
        </div>
        {locations.length >= endInx && (
          <button
            className="capitalize block  mx-auto mt-8 border border-black py-2 px-6"
            onClick={() => setEndInx((prev) => prev + 3)}
          >
            see more
          </button>
        )}
      </div>
    </section>
  );
};

export default MustVisit;
