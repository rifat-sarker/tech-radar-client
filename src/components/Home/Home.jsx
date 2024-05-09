

import Banner from "./Banner";
import HotDeals from "./HotDeals/HotDeals";

import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import OfferPage from "./OfferPage/OfferPage";
import AllBrand from "../Brands/AllBrand/AllBrand";
import MobileApp from "./MobileApp";
import Contact from "./Contact/Contact";


const Home = () => {
  
  return (
    <div>
      <Banner></Banner>
      <AllBrand/>
      <FeaturedProducts/>
      <OfferPage/>
      <HotDeals/>
      <MobileApp/>
      <Contact/>
    </div>
  );
};

export default Home;
