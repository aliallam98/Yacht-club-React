interface IProps {
  children: React.ReactNode;
  backgroundImage: string;
}

const Landing = ({ children, backgroundImage }: IProps) => {
  return (
    <section
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className={`h-screen bg-no-repeat bg-center bg-cover`}
    >
      <div className="absolute inset-0 bg-black/30" />
      {children}
    </section>
  );
};

export default Landing;
