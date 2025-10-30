"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative h-[80vh] flex items-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/assets/home/hero-1.jpg')", // Replace with your actual image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6 lg:px-12 lg:mt-15">
          <motion.div
            className="max-w-2xl text-left text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Seamless, Secure & Built for Commercial-Grade Demand
              {/* Seamless & Secure Automatic <br /> Entrance Solutions */}
            </motion.h1>

            <motion.p
              className="mt-4 text-lg text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              viewport={{ once: true }}
            >
              At Erreka Technical Services, we specialise in the sale,
              installation and maintenance of commercial automatic
              doors—including sliding, swing, revolving & telescopic models—for
              businesses across the UAE. Experience upgraded access, enhanced
              safety and reduced operational effort in every entryway.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link
                href="/quote"
                className="mt-6 inline-block bg-[#F59E0B] hover:bg-[#d88604] text-white font-medium px-6 py-3 rounded-md transition-all duration-300"
              >
                Get a Free Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Light Animation */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-[#F59E0B]/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 20, -20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
