import React from "react";
import {
  FaTruckPickup,
  FaMoneyBillWave,
  FaWarehouse,
  FaBuilding,
} from "react-icons/fa";
import SectionHeader from "../../../Component/SectionHeader/SectionHeader";

const HowItWork = () => {
  const delivery = [
    {
      id: 1,
      icon: <FaTruckPickup className="text-4xl text-primary" />,
      question: "Booking Pick & Drop",
      answer:
        "Schedule parcel pickups from your home or office and get them delivered without visiting our delivery center.",
    },
    {
      id: 2,
      icon: <FaMoneyBillWave className="text-4xl text-primary" />,
      question: "Cash On Delivery",
      answer:
        "Customers can pay upon delivery. Our riders collect the payment and deposit it safely to your account.",
    },
    {
      id: 3,
      icon: <FaWarehouse className="text-4xl text-primary" />,
      question: "Delivery Hub",
      answer:
        "Parcels are received, sorted, and dispatched from our centralized hubs for ultra-fast delivery.",
    },
    {
      id: 4,
      icon: <FaBuilding className="text-4xl text-primary" />,
      question: "SME & Corporate Service",
      answer:
        "Special service for businesses & corporate clients with bulk shipping, support, and flexible payments.",
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-2xl w-11/12 mx-auto py-14">
        <SectionHeader
          title="How it works"
          subtitle="A simple and efficient process that ensures reliable delivery every time."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {delivery.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-gray-900 font-bold text-xl text-center">
                {item.question}
              </h3>

              <p className="text-gray-600 text-center mt-2">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
