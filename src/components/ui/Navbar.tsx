"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold text-black">
          Erreka
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <li>
            <Link
              href="/about"
              className="hover:text-black transition-colors duration-200"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="hover:text-black transition-colors duration-200"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-black transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/quote"
            className="bg-[#F59E0B] text-white font-medium px-5 py-2 rounded-md hover:bg-[#d88604] transition-colors duration-200"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-black transition-colors duration-200"
        >
          <motion.div
            key={isOpen ? "close" : "menu"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.div>
        </motion.button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white shadow-lg border-t border-gray-100"
          >
            <ul className="flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium">
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  href="/about"
                  className="block hover:text-[#F59E0B] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  href="/services"
                  className="block hover:text-[#F59E0B] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  href="/contact"
                  className="block hover:text-[#F59E0B] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  href="/quote"
                  className="block bg-[#F59E0B] text-white text-center px-5 py-2 rounded-md hover:bg-[#d88604] transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Get a Free Quote
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
