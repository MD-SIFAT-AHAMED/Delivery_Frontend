import React from "react";
import SectionHeader from "../../../Component/SectionHeader/SectionHeader";
import car from "../../../assets/bookingIcon.png";

const HowItWork = () => {
  const delivery = [
    {
      id: 1,
      question: "Booking Pick & Drop?",
      answer:
        "Booking Pick & Drop is a convenient service that allows customers to schedule parcel pickups from their location and have them delivered to the destination without visiting a delivery center.",
    },
    {
      id: 2,
      question: "Cash On Delivery work?",
      answer:
        "Cash On Delivery (COD) allows customers to pay for their parcels upon delivery. Our delivery agents collect the payment and deposit it securely to your account.",
    },
    {
      id: 3,
      question: "Delivery Hub?",
      answer:
        "A Delivery Hub is a centralized location where parcels are received, sorted, and dispatched for final delivery. It helps ensure faster and more organized shipping operations.",
    },
    {
      id: 4,
      question: "Booking SME & Corporate?",
      answer:
        "Booking SME & Corporate is a specialized service tailored for small businesses and corporate clients. It offers bulk shipping solutions, dedicated support, and flexible payment options.",
    },
  ];
  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-2xl w-11/12 mx-auto py-10">
        <SectionHeader
          title="How it works"
          subtitle="A seamless process designed to make every delivery efficient and reliable."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {delivery.map((cart) => (
            <div key={cart.id} className="bg-white space-y-2 rounded-2xl p-3">
              <img src={car} alt="" />
              <h3 className="text-gray-900 font-bold text-lg md:text-xl">{cart.question}</h3>
              <p>{cart.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
