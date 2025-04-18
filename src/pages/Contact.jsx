import Header from "../components/Header";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-12 mt-12 py-14">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you! Reach out for inquiries, partnerships,
            or volunteer opportunities.
          </p>
        </section>

        <div className="grid md:grid-cols-2 mb-8 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-lg p-8 h-fit">
            <h2 className="text-2xl font-bold text-blue-700 mb-6">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Our Address</h3>
                  <p className="text-gray-600">
                    Execube Cowork, A-3, Block C<br />
                    Sector 4, Noida
                    <br />
                    Uttar Pradesh 201301
                    <br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaPhone className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">
                    Main:{" "}
                    <a href="tel:+911234567890" className="hover:text-blue-600">
                      +91 12345 67890
                    </a>
                    <br />
                    Donations:{" "}
                    <a href="tel:+919876543210" className="hover:text-blue-600">
                      +91 98765 43210
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">
                    General:{" "}
                    <a
                      href="mailto:info@betterblues.org"
                      className="hover:text-blue-600"
                    >
                      info@betterblues.org
                    </a>
                    <br />
                    Support:{" "}
                    <a
                      href="mailto:support@betterblues.org"
                      className="hover:text-blue-600"
                    >
                      support@betterblues.org
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaClock className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Office Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM IST
                    <br />
                    Saturday: 10:00 AM - 3:00 PM IST
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition"
                >
                  <FaFacebook className="text-xl" />
                </a>
                <a
                  href="#"
                  className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition"
                >
                  <FaTwitter className="text-xl" />
                </a>
                <a
                  href="#"
                  className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition"
                >
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject*
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message*
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition font-medium"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
