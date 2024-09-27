import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import "aos/dist/aos.css";
import AOS from "aos";

const Root = () => {
  AOS.init();
  return (
    <div className="bg-base-300 font-Inter">
      <Navbar></Navbar>
      <div className="max-w-6xl min-h-screen mx-auto p-4 ">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
