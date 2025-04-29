import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCommentDots } from "react-icons/fa";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="bg-slate-100 min-h-screen">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 sm:px-16 py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Contact EstateEase</h1>
          <p className="text-slate-600 text-sm sm:text-base">
            Have questions or ready to start your property journey? Our team is here to help you every step of the way.
          </p>
        </div>
      </div>

      {/* Main Contact Content */}
      <div className="max-w-6xl mx-auto px-6 sm:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">Get In Touch</h2>
            
            {/* Contact Methods */}
            <div className="space-y-6">
              {/* Phone Contact */}
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaPhone className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-800">Phone Support</h3>
                  <p className="text-slate-600 mt-1">+91 453-4567</p>
                  <p className="text-sm text-slate-500 mt-1">Monday-Friday: 9am-6pm EST</p>
                  <p className="text-sm text-slate-500">Saturday: 10am-4pm EST</p>
                </div>
              </div>

              {/* Email Contact */}
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-800">Email Us</h3>
                  <p className="text-slate-600 mt-1">info@estateease.com</p>
                  <p className="text-slate-600">support@estateease.com</p>
                  <p className="text-sm text-slate-500 mt-1">Typically respond within 24 hours</p>
                </div>
              </div>

              {/* Office Location */}
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-800">Visit Our Office</h3>
                  <p className="text-slate-600 mt-1">Property Avenue</p>
                  <p className="text-slate-600">Mumbai, NY 68001</p>
                  <p className="text-sm text-slate-500 mt-1">
                    <Link to="/appointment" className="text-blue-600 hover:underline">
                      Schedule an appointment before visiting
                    </Link>
                  </p>
                </div>
              </div>

             
              
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder=" +91 999999999"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="buying">Buying a Property</option>
                  <option value="support">Customer Support</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">Our Location</h2>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
            <div className="aspect-w-16 aspect-h-9 bg-slate-200 rounded-md overflow-hidden">
              {/* Embedded Google Map - Replace with your actual embed code */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6822.274956868251!2d72.91646767466655!3d19.132662750192278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f5aed92ded%3A0x25a907ccad4e122a!2sEstate%20Office!5e1!3m2!1sen!2sus!4v1743700005952!5m2!1sen!2sus" 
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="EstateEase Office Location"
              ></iframe>
            </div>
            <div className="mt-4 flex items-center">
              <FaClock className="text-blue-600 mr-2" />
              <span className="text-sm text-slate-600">Open today 9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

