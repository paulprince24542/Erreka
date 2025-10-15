"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Get In Touch
          </h2>
          <p className="text-gray-600 mt-3">
            Have a project in mind or need a consultation? Contact us today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Information Card */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 text-gray-700">
              <div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#F59E0B] mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p>+971 4 285 2806</p>
                    <p>+971 50 223 9301</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#F59E0B] mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p>sales@errekadoors.com</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#F59E0B] mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Website</p>
                    <p>www.errekadoors.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="bg-white rounded-xl shadow-sm p-8">
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
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#F59E0B] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#F59E0B] focus:outline-none"
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
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#F59E0B] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service of Interest
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white text-gray-700 focus:ring-2 focus:ring-[#F59E0B] focus:outline-none">
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
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#F59E0B] focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#F59E0B] hover:bg-[#d88604] text-white font-medium py-3 rounded-md transition-colors duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
