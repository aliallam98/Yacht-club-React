import HeadingAndParagraph from "../components/HeadingAndParagraph";
import Landing from "../components/Landing";
import LandingHeading from "../components/LandingHeading";
import RallyProgramme from "../components/rallies/RallyProgramme";

const Rallies = () => {
  return (
    <>
      <Landing backgroundImage="https://www.dubaimarinayachtclub.com/wp-content/uploads/2020/05/4-Rally-Page-HERO.jpg">
        <LandingHeading
          heading="Rally Programme"
          subHeading="EXPLORE WITH LIKE MINDED BOATERS"
        />
      </Landing>

      <section className="py-20">
        <HeadingAndParagraph
          heading="About the Rally Programme"
          paragraph="The next season of the Rally Programme is just around the corner and we have an incredible series of events for you to enjoy with fellow members and like-minded boaters. Join us for exclusive themed evenings on land and for day and weekend long adventure trips by boat exploring the UAE coastline."
          className="text-center"
          headingSize="text-3xl"
        />
      </section>
      <RallyProgramme />
    </>
  );
};

export default Rallies;
