import React from "react";
import aboutImg from "../../assets/deli.png";

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            About Us
          </h2>
          <p className="mt-4 text-gray-600 text-lg md:text-xl">
            Delivering parcels across all 64 districts of Bangladesh with speed,
            reliability, and care.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src={aboutImg}
              alt="Parcel delivery"
              className="rounded-lg  w-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">Our Mission</h3>
            <p className="text-gray-600">
              Our mission is to make parcel delivery simple, fast, and reliable
              for everyone in Bangladesh. From urban hubs to remote districts,
              we ensure your packages reach safely and on time.
            </p>

            <h3 className="text-2xl font-semibold text-primary">
              Why Choose Us
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Nationwide coverage across all 64 districts</li>
              <li>Real-time tracking of your parcels</li>
              <li>Professional and trained delivery personnel</li>
              <li>Secure and timely delivery guaranteed</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
