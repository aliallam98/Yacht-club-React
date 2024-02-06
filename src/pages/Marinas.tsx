import AccreditationSections from "../components/marinas/AccreditationSections";
import EnvironmentalPolicy from "../components/marinas/EnvironmentalPolicy";
import HeadingAndParagraph from "../components/HeadingAndParagraph";
import Landing from "../components/Landing";
import LandingHeading from "../components/LandingHeading";
import MarinasImageSection from "../components/marinas/MarinasImageSection";
import MustVisit from "../components/marinas/mustVisit/MustVisit";

const Marinas = () => {
  return (
    <>
      <Landing backgroundImage="https://www.dubaimarinayachtclub.com/wp-content/uploads/2020/05/Marina-Page-HERO.jpg">
        <LandingHeading
          heading="Marinas"
          subHeading="DUBAI'S ULTIMATE YACHTING EXPERIENCE"
        />
      </Landing>

      <section className="py-20">
        <HeadingAndParagraph
          heading="Welcome to Dubai Marina Yacht Club"
          paragraph="Discover Dubai Marina Yacht Club, nestled within the heart of new Dubai. A prestigious 5 Gold Anchor award-winning marina recognised for the quality of services and facilities, perfectly located for ease of access to sea and transportation links. By day, a boater's haven and by night a vibrant bustling nightlife waterfront."
          className="text-center"
          headingSize="text-3xl"
        />
        <MarinasImageSection />
        <AccreditationSections />
      </section>
      <EnvironmentalPolicy />
      <MustVisit />
    </>
  );
};

export default Marinas;
