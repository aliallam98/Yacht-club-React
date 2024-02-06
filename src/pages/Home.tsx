import HeadingAndParagraph from "../components/HeadingAndParagraph";
import LandingHeading from "../components/LandingHeading";
import MarinasImage from "../components/marinas/MarinasImage";
import { homePage } from "../constants";
import IsWideScreen from "../hooks/is-wide-screen";

const Home = () => {
  const matches = IsWideScreen();

  return (
    <>
      <section className="relative h-screen">
        <video
          className="object-cover w-full h-full"
          autoPlay
          muted
          loop
          src="/videos/Home - Dubai Marina Yacht Club.webm"
        />
        <div className="absolute inset-0 bg-black/30" />
        <LandingHeading
          heading="Yachting in Dubai"
          subHeading="DUBAI'S ULTIMATE YACHTING EXPERIENCE"
        />
      </section>
      <section className="container py-20 ">
        <HeadingAndParagraph
          heading="Welcome to Dubai Marina Yacht Club"
          paragraph="Discover Dubai Marina Yacht Club, nestled within the heart of new Dubai. A prestigious 5 Gold Anchor award-winning marina recognised for the quality of services and facilities, perfectly located for ease of access to sea and transportation links. By day, a boater's haven and by night a vibrant bustling nightlife waterfront."
          className="text-center mb-20"
          headingSize="text-3xl"
        />
        {homePage.map((item, i) => {
          const px = matches ? -65 * i : 0;
          return (
            <>
              <MarinasImage
                link={item.link}
                action={item.action}
                heading={item.heading}
                icon={item.icon}
                paragraph={item.paragraph}
                imageUrl={item.image}
                px={px}
                key={i}
              />
            </>
          );
        })}
      </section>
    </>
  );
};

export default Home;
