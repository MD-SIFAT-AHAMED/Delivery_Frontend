import React from "react";
import Banner from "../Banner/Banner";
import HowItWork from "../HowItWork/HowItWork";
import OurServices from "../OurServices/OurServices";
import SalesPartner from "../SalesPartner/SalesPartner";
import Merchant from "../Merchant/Merchant";
import CommentSwiper from "../CommentSwiper/CommentSwiper";
import FaqSection from "../FaqSection/FaqSection";
import useClickOutside from "../../../Hooks/useClickOutside";

const Home = () => {
  return (
    <div>
      <Banner />
      <HowItWork />
      <OurServices />
      <SalesPartner />
      <Merchant />
      <CommentSwiper />
      <FaqSection />
    </div>
  );
};

export default Home;
