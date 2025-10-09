import React from "react";
import Banner from "../Banner/Banner";
import HowItWork from "../HowItWork/HowItWork";
import OurServices from "../OurServices/OurServices";
import SalesPartner from "../SalesPartner/SalesPartner";
import Merchant from "../Merchant/Merchant";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <HowItWork />
      <OurServices />
      <SalesPartner />
      <Merchant />
    </div>
  );
};

export default Home;
