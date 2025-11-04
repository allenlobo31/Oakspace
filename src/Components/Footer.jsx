import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#f5e6c5] via-[#ecd9b2] to-[#dec8a0] text-[#2c2c2c] text-left pl-3">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#1a1a1a]">OakSpace</h3>
            <p className="text-[#3b3b3b] leading-relaxed">
              Your trusted partner for premium furniture. We bring comfort,
              style, and quality to your home with our carefully curated
              collection.
            </p>
            <div className="flex items-start space-x-4">
              <a
                href="#"
                className="text-[#4b4b4b] hover:text-[#1a1a1a] transition-colors duration-300"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="text-[#4b4b4b] hover:text-[#1a1a1a] transition-colors duration-300"
              >
                <TwitterIcon />
              </a>
              <a
                href="#"
                className="text-[#4b4b4b] hover:text-[#1a1a1a] transition-colors duration-300"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                className="text-[#4b4b4b] hover:text-[#1a1a1a] transition-colors duration-300"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-[#1a1a1a] md:text-lg">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-[#3b3b3b] hover:text-[#000000] transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-[#3b3b3b] hover:text-[#000000] transition-colors duration-300"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="text-[#3b3b3b] hover:text-[#000000] transition-colors duration-300"
                >
                  Cart
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#3b3b3b] hover:text-[#000000] transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#3b3b3b] hover:text-[#000000] transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-[#1a1a1a] md:text-lg">
              Categories
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products"
                  className="text-[#3b3b3b] hover:text-[#000000] transition-colors duration-300"
                >
                  Living Room
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-[#3b3b3b] hover:text-[#000000] transition-colors duration-300"
                >
                  Bedroom
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-[#3b3b3b] hover:text-[#000000] transition-colors duration-300"
                >
                  Dining Room
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-[#3b3b3b] hover:text-[#000000] transition-colors duration-300"
                >
                  Office
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-[#3b3b3b] hover:text-[#000000] transition-colors duration-300"
                >
                  Outdoor
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-[#1a1a1a] md:text-lg">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <LocationOnIcon className="text-[#4b4b4b]" />
                <span className="text-[#3b3b3b]">
                  123 Furniture Street, Design City, DC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="text-[#4b4b4b]" />
                <span className="text-[#3b3b3b]">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <EmailIcon className="text-[#4b4b4b]" />
                <span className="text-[#3b3b3b]">info@oakspace.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#bda87c] mt-8 pt-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="text-[#4b4b4b] text-sm">
            © 2024 OakSpace. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-[#4b4b4b] hover:text-[#1a1a1a] text-sm transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[#4b4b4b] hover:text-[#1a1a1a] text-sm transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-[#4b4b4b] hover:text-[#1a1a1a] text-sm transition-colors duration-300"
            >
              Return Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
