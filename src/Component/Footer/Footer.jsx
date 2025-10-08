import React from "react";
import { NavLink } from "react-router";
import ProFastLogo from "../../Pages/Shared/ProFastLogo/ProFastLogo";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-screen-2xl w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + About */}
        <div>
          <div className="mb-3">
            <ProFastLogo />
          </div>
          <p className="text-sm leading-6">
            ProFast is Bangladesh’s most reliable and lightning-fast delivery
            service. We pick up, deliver, and make your day easier — anytime,
            anywhere.
          </p>
          <div className="flex gap-3 mt-4 text-gray-400">
            <a href="#" className="hover:text-primary duration-300">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="hover:text-primary duration-300">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="hover:text-primary duration-300">
              <FaLinkedinIn size={18} />
            </a>
            <a href="#" className="hover:text-primary duration-300">
              <FaXTwitter size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 inline-block pb-1">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/Services" className="hover:text-primary duration-300">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/coverage" className="hover:text-primary duration-300">
                Coverage
              </NavLink>
            </li>
            <li>
              <NavLink to="/sendparcel" className="hover:text-primary duration-300">
                Send A Parcel
              </NavLink>
            </li>
            <li>
              <NavLink to="/Pricing" className="hover:text-primary duration-300">
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink to="/beARider" className="hover:text-primary duration-300">
                Be a Rider
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 inline-block pb-1">
            Company
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/AboutUs" className="hover:text-primary duration-300">
                About Us
              </NavLink>
            </li>
            <li>
              <a href="#" className="hover:text-primary duration-300">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary duration-300">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary duration-300">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary duration-300">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 inline-block pb-1">
            Contact
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <IoLocationSharp size={18} className="text-primary" />
              <span>Dhaka, Bangladesh</span>
            </li>
            <li className="flex items-center gap-2">
              <MdPhone size={18} className="text-primary" />
              <span>+880 1700-000000</span>
            </li>
            <li className="flex items-center gap-2">
              <MdEmail size={18} className="text-primary" />
              <span>support@profast.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-800 text-center pt-4 text-sm text-gray-500">
        © {new Date().getFullYear()} ProFast Delivery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
