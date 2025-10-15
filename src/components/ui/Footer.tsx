"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1E293B] text-gray-300 py-12">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h3 className="text-white font-bold text-xl mb-4">Erreka</h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Providing seamless and secure automatic entrance solutions for
            businesses across the UAE.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-[#F59E0B] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[#F59E0B] transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-[#F59E0B] transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#F59E0B] transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Sliding Doors</li>
            <li>Swing Doors</li>
            <li>Revolving Doors</li>
            <li>Maintenance</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>+971 4 285 2806</li>
            <li>+971 50 223 9301</li>
            <li>
              <Link
                href="mailto:sales@errekadoors.com"
                className="hover:text-[#F59E0B] transition-colors"
              >
                sales@errekadoors.com
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>
            © {new Date().getFullYear()} Erreka Technical Services L.L.C. All
            rights reserved.
          </p>

          <div className="flex space-x-6">
            <Link
              href="/privacy-policy"
              className="hover:text-[#F59E0B] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-[#F59E0B] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
