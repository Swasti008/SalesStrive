// components/Footer.jsx
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-sm md:text-lg text-white py-11">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="mb-4 font-bold uppercase">Features</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Track Sales
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Manage Rewards
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  User Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Performance Analytics
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold uppercase">Resources</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold uppercase">Company</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold uppercase">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.facebook.com"
                className="text-2xl hover:text-blue-500"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.twitter.com"
                className="text-2xl hover:text-blue-300"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com"
                className="text-2xl hover:text-blue-700"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.github.com"
                className="text-2xl hover:text-gray-400"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div className="text-7xl font-bold text-white opacity-5">
          SALES STRIVE
        </div>
      </div>
    </footer>
  );
};

export default Footer;
