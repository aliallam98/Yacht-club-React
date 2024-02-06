import HeadingAndParagraph from "../HeadingAndParagraph";
import Image from "/images/marinas/Marina-Page-Environmental-LRL.jpg.webp";
import icon from "/icons/marinas/Environmental-Policy.svg";

const EnvironmentalPolicy = () => {
  return (
    <>
      <section className="py-10 container flex flex-col lg:flex-row items-center gap-2">
        <div className="flex flex-col max-w-sm items-center ">
          <img src={icon} width={30} height={30} alt="icon" />
          <HeadingAndParagraph
            heading="Environmental Policy"
            paragraph="Emaar Hospitality Group has launched a rigorous sustainability campaign, The Pearl Pledge, to conserve marine resources."
            headingSize="text-3xl"
            className="max-w-sm"
          />
          <button className="capitalize mt-4 border py-2 px-6">See More</button>
        </div>
        <img src={Image} width={700} alt="image" className="mx-auto" />
      </section>
    </>
  );
};

export default EnvironmentalPolicy;
