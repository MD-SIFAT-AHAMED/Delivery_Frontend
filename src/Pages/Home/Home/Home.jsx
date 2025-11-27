import React from "react";
import Banner from "../Banner/Banner";
import HowItWork from "../HowItWork/HowItWork";
import OurServices from "../OurServices/OurServices";
import SalesPartner from "../SalesPartner/SalesPartner";
import Merchant from "../Merchant/Merchant";
import CommentSwiper from "../CommentSwiper/CommentSwiper";
import FaqSection from "../FaqSection/FaqSection";
import useClickOutside from "../../../Hooks/useClickOutside";
import Services from "../../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <HowItWork />
      {/* <OurServices /> */}
      <SalesPartner />
      <Merchant />
      <CommentSwiper />
      <FaqSection />
    </div>
  );
};

export default Home;
