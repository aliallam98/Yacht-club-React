import { AccreditationsSection } from "../../constants";

const AccreditationSections = () => {
  return (
    <div className=" bg-neutral-200 py-10 text-center flex flex-col justify-center">
      <span className="block mx-auto w-20 bg-black h-[2px] mt-4"></span>
      <div className=" mb-12">
        <h2 className="text-3xl font-semibold text-center">Accreditations</h2>
        <span className="block mx-auto w-20 bg-black h-[2px] my-4"></span>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {AccreditationsSection.map((item, i) => (
          <div
            className="flex flex-col gap-2 items-center justify-center "
            key={i}
          >
            <img
              src={item.image}
              alt="Accreditation image"
              width={120}
              height={30}
            />
            <h3 className="text-xl">{item.heading}</h3>
            <p className="text-neutral-400 max-w-sm">{item.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccreditationSections;
