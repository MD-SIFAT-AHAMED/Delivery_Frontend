import React from "react";
import Banner from "../Banner/Banner";
import HowItWork from "../HowItWork/HowItWork";
import SalesPartner from "../SalesPartner/SalesPartner";
import Merchant from "../Merchant/Merchant";
import CommentSwiper from "../CommentSwiper/CommentSwiper";
import FaqSection from "../FaqSection/FaqSection";
import useClickOutside from "../../../Hooks/useClickOutside";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <SalesPartner />
      <Merchant />
      <HowItWork />
      <CommentSwiper />
      <FaqSection />
    </div>
  );
};

export default Home;
