
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";


const Root = () => {
  return (
      <div>
        <div className="container mx-auto">
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
)};

export default Root;


