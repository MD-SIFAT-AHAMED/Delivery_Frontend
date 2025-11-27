import {
  FaTruck,
  FaMapMarkedAlt,
  FaMoneyBillWave,
  FaBoxOpen,
  FaClipboardList,
  FaBell,
} from "react-icons/fa";
import SectionHeader from "../../Component/SectionHeader/SectionHeader";

const Services = () => {
  const services = [
    {
      icon: <FaTruck className="text-4xl text-primary" />,
      title: "Fast Parcel Delivery",
      desc: "District to district delivery with express and standard options.",
    },
    {
      icon: <FaMoneyBillWave className="text-4xl text-primary" />,
      title: "Cash On Delivery (COD)",
      desc: "Receive payment from customers upon delivery with instant settlements.",
    },
    {
      icon: <FaMapMarkedAlt className="text-4xl text-primary" />,
      title: "Live Tracking",
      desc: "Track parcels in real-time with accurate location and status updates.",
    },
    {
      icon: <FaBoxOpen className="text-4xl text-primary" />,
      title: "Secure Packaging",
      desc: "We offer safe, strong and water-resistant packaging solutions.",
    },
    {
      icon: <FaClipboardList className="text-4xl text-primary" />,
      title: "Doorstep Pickup",
      desc: "Schedule pickup from home or shop — fast and convenient.",
    },
    {
      icon: <FaBell className="text-4xl text-primary" />,
      title: "SMS Notifications",
      desc: "Get SMS notifications for pickup, delivery, and payment.",
    },
  ];

  return (
    <div className="bg-base-200">
      <section className="max-w-screen-2xl w-11/12 mx-auto py-10">
        <div className="text-center">
          <SectionHeader
            title={"Our Services"}
            subtitle={
              "Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time."
            }
          />

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition"
              >
                <div className="flex justify-center mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
