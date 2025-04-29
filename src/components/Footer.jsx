import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaHeadset } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-600 border-t border-gray-200 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">EstateEase</h2>
            <p className="mb-4">
              Helping you find your dream property since 2023.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-400">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-600">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-blue-600">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Enhanced Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaPhone className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Sales Inquiries</p>
                  <p>+91 4472-7899</p>
                  <p className="text-sm text-gray-500">Mon-Fri, 9am-5pm</p>
                </div>
              </li>
              <li className="flex items-start">
                <FaHeadset className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Customer Support</p>
                  <p>+91 456-7891</p>
                  <p className="text-sm text-gray-500">24/7 Support</p>
                </div>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <p>info@estateease.com</p>
                  <p>support@estateease.com</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Office Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Our Offices</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Headquarters</p>
                  <p>123 Property Ave, Suite 100</p>
                  <p>New York, NY 10001</p>
                </div>
              </li>
              <li className="flex items-start">
                <FaClock className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Business Hours</p>
                  <p>Monday-Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} EstateEase. All rights reserved.</p>
          <p className="mt-2">
            By accessing or using our platform, you agree to our 
            <Link to="/terms" className="text-blue-600 hover:underline ml-1">Terms of Use</Link> and 
            <Link to="/privacy" className="text-blue-600 hover:underline ml-1">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

