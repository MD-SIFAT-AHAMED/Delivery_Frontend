import React from "react";
import Marquee from "react-fast-marquee";

import logo1 from "../../../assets/brands/amazon.png";
import logo2 from "../../../assets/brands/casio.png";
import logo3 from "../../../assets/brands/moonstar.png";
import logo4 from "../../../assets/brands/randstad.png";
import logo5 from "../../../assets/brands/start.png";
import logo6 from "../../../assets/brands/start-people 1.png";
import SectionHeader from "../../../Component/SectionHeader/SectionHeader";

const SalesPartner = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-screen-2xl w-11/12 mx-auto text-center">
        <SectionHeader
          title={"Our Sales Partners"}
          subtitle={
            "Trusted by top delivery and logistics companies across Bangladesh."
          }
        />

        <Marquee
          speed={40}
          gradient={false}
          pauseOnHover={true}
          direction="left"
        >
          {logos.map((logo, index) => (
            <div key={index} className="mx-10 flex items-center justify-center">
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="h-6 w-auto object-contain opacity-90 hover:opacity-100 transition-all"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default SalesPartner;
