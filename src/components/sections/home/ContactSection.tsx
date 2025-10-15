"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Get In Touch
          </h2>
          <p className="text-gray-600 mt-3">
            Have a project in mind or need a consultation? Contact us today!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
        >
          {/* Contact Information Card */}
          <motion.div
            // variants={itemVariants}
            className="bg-white rounded-xl shadow-sm p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6 text-gray-700">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#F59E0B] mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p>+971 4 285 2806</p>
                    <p>+971 50 223 9301</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#F59E0B] mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p>sales@errekadoors.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#F59E0B] mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Website</p>
                    <p>www.errekadoors.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="mt-8 overflow-hidden rounded-lg shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d901.8627414622865!2d55.39916445391747!3d25.28904838490997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5dd1b951f257%3A0xa6ca8e93b3550b33!2sERREKA%20TECHNICAL%20SERVICES%20LLC!5e0!3m2!1sen!2sin!4v1760537513279!5m2!1sen!2sin"
                width="100%"
                height="450"
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            // variants={itemVariants}
            className="lg:col-span-2 bg-white rounded-xl shadow-sm p-8"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Send us a message
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 shadow-sm focus:ring-2 focus:ring-[#F59E0B] focus:border-[#F59E0B] transition-all duration-200 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 shadow-sm focus:ring-2 focus:ring-[#F59E0B] focus:border-[#F59E0B] transition-all duration-200 outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Your phone number"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 shadow-sm focus:ring-2 focus:ring-[#F59E0B] focus:border-[#F59E0B] transition-all duration-200 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service of Interest
                  </label>
                  <select className="w-full border border-gray-200 rounded-lg px-4 py-3 shadow-sm bg-white text-gray-700 focus:ring-2 focus:ring-[#F59E0B] focus:border-[#F59E0B] transition-all duration-200 outline-none">
                    <option>Select a service</option>
                    <option>Automatic Doors</option>
                    <option>Maintenance</option>
                    <option>Security Systems</option>
                    <option>Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 shadow-sm focus:ring-2 focus:ring-[#F59E0B] focus:border-[#F59E0B] transition-all duration-200 outline-none"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="w-full bg-[#F59E0B] hover:bg-[#d88604] text-white font-medium py-3 rounded-md transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
