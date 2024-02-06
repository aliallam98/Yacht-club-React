interface IProps {
  heading: string;
  subHeading: string;
}

const LandingHeading = ({ heading, subHeading }: IProps) => {
  return (
    <div className="container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white space-y-5">
      <h2 className="text-4xl md:text-5xl lg:text-7xl break-words">
        {heading}
      </h2>
      <h4 className="text-lg lg:text-2xl">{subHeading}</h4>
    </div>
  );
};

export default LandingHeading;
