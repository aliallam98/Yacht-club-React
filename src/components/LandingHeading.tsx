interface IProps {
  heading: string;
  subHeading: string;
}

const LandingHeading = ({ heading, subHeading }: IProps) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white space-y-5">
      <h2 className="text-7xl font">{heading}</h2>
      <h4 className="text-2xl">{subHeading}</h4>
    </div>
  );
};

export default LandingHeading;
