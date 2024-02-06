import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="p-5 border-t">
      <div className="container flex justify-between items-center">
        <Logo />
        <div className="flex items-center  text-muted-foreground">
          <button className="py-2 px-6">Privacy Policy</button>
          <button className="py-2 px-6">Terms & Conditions</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
