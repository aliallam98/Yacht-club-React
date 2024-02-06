import { landEvents } from "../../constants";
import EventItem from "./EventItem";

const LandEvents = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {landEvents.map((item, i) => (
        <EventItem
          key={i}
          date={item.date}
          title={item.title}
          description={item.description}
          image={item.image}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default LandEvents;
