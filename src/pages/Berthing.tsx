import HeadingAndParagraph from "../components/HeadingAndParagraph";
import Landing from "../components/Landing";
import LandingHeading from "../components/LandingHeading";
import berthingImageOne from "/images/berthing-1.jpg";
import EastMarina from "/icons/berthing/East-Marina.svg";
import ImageSlider from "../components/ImageSlider";
import { berthingLastSection } from "../constants";

const Berthing = () => {
  return (
    <>
      <Landing backgroundImage="https://www.dubaimarinayachtclub.com/wp-content/uploads/2020/05/Berthing-Hero.jpg">
        <LandingHeading heading="Berthing" subHeading="AN OCEAN OF BENEFITS" />
      </Landing>

      <section className="py-20">
        <div className="container">
          <HeadingAndParagraph
            heading="Berthing Benefits"
            headingSize="text-3xl"
            paragraph="Discover Dubai Marina Yacht Club; a prestigious 5 Gold Anchor
           award-winning marina with secure and sheltered berthing for over 550 yachts.
           As a member you will gain access to a range of exclusive benefits ensuring that your every need
          is met allowing you to truly discover Dubai's Ultimate Yachting Experience."
          />
          <div className="h-screen grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="flex flex-col gap-y-4">
              <h3 className="text-3xl font-semibold mb-10">
                Exclusive Benefits
              </h3>
              <HeadingAndParagraph
                className="text-start"
                headingSize="text-xl"
                heading="Berthing Benefits"
                paragraph="As a member you can benefit from 24/7 dock hand assistance, buggy shuttles and ice deliveries. Our Marine Relations team take care of your every need offering a uniquely personal service and our Membership Manager will ensure that you are kept up to date with the latest exclusive offers and locations to visit."
              />
              <HeadingAndParagraph
                className="text-start"
                headingSize="text-xl"
                heading="Membership Benefits"
                paragraph="Enjoy year round membership benefits such as Gym and Infinity Pool access at Address Dubai Marina, a range of complimentary valet and parking services, Gold Tier enrollment in the U by Emaar loyalty programme and access to the Dubai Marina Yacht Club Rally Programme."
              />
            </div>
            <img src={berthingImageOne} alt="React Logo" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="flex flex-col justify-center items-center">
          <img src={EastMarina} alt="icon" width={30} height={30} />
          <HeadingAndParagraph
            heading="Not Just a Marina"
            paragraph="Dubai Marina Yacht Club is not just a marina; it is a Yacht Club with an exclusive membership programme providing not only berthing to members but also an ocean of benefits and offers across Dubai. The Rally Programme, the only one of its kind in Dubai, opens a passage to exploring the stunning coastline of the UAE while connecting members together."
            className="text-center mb-6"
            headingSize="text-3xl"
          />
          <ImageSlider />
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-2">
          {berthingLastSection.map((item, i) => (
            <div
              className="flex items-center justify-center gap-10 mt-8"
              key={i}
            >
              <img src={item.icon} alt="icon" />
              <div>
                <h3 className="text-xl">{item.heading}</h3>
                <p className="max-w-[300px] text-sm text-neutral-400 ">
                  {item.paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Berthing;
