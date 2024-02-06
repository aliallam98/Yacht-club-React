import { useState } from "react";
import LandEvents from "./LandEvents";
import SeaEvents from "./SeaEvents";

const RallyProgramme = () => {
  const [showLand, setShowLand] = useState(true);
  const [showSea, setShowSea] = useState(false);
  return (
    <section className="bg-neutral-200/50 py-10">
      <h2 className="text-center text-3xl">Rally Programme</h2>
      <span className="block mx-auto w-20 bg-black h-[1.5px] mt-4"></span>
      <div className="flex items-center justify-center gap-4 my-6">
        <button
          className={`${showLand && "border-b-2 border-black"}`}
          onClick={() => {
            setShowLand(true);
            setShowSea(false);
          }}
        >
          Land Rallies
        </button>
        <button
          className={`${showSea && "border-b-2 border-black"}`}
          onClick={() => {
            setShowLand(false);
            setShowSea(true);
          }}
        >
          Sea Rallies
        </button>
      </div>
      {showLand && <LandEvents />}
      {showSea && <SeaEvents />}
    </section>
  );
};

export default RallyProgramme;
