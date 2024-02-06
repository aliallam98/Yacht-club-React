import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";


const App = () => {
  return (
    <>
    <Navbar/>
    <Outlet />
    <Footer/>
    </>
  );
};

export default App;
