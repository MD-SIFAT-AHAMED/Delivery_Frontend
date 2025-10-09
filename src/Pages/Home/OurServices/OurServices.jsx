import React from "react";
import serviceImg from "../../../assets/service.png";
import SectionHeader from "../../../Component/SectionHeader/SectionHeader";

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: "Express  & Standard Delivery",
      des: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      id: 2,
      title: "Cash on Home Delivery",
      des: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      id: 3,
      title: "Nationwide Delivery",
      des: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
      id: 4,
      title: "Corporate Service / Contract In Logistics",
      des: "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      id: 5,
      title: "Fulfillment Solution",
      des: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      id: 6,
      title: "Parcel Return",
      des: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];
  return (
    <div className="bg-[#03373D] max-w-screen-2xl w-11/12 mx-auto p-2 rounded-2xl py-10 my-10">
      <SectionHeader
        title={"Our Services"}
        subtitle={
          "Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time."
        }
        Hcolor="text-white"
        SHcolor="text-gray-300"
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4  p-3">
        {services.map((cart) => (
          <div
            key={cart.id}
            className="space-y-3 rounded-2xl hover:bg-primary hover:scale-101 duration-75 bg-white place-items-center text-center p-4"
          >
            <img src={serviceImg} className="" alt="" />
            <h3 className="text-lg md:text-xl font-bold">{cart.title}</h3>
            <p>{cart.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
