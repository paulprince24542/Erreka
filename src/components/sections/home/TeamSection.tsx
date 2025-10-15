"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our Team
        </motion.h2>

        {/* Team Image */}
        <motion.div
          className="max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20,
            duration: 0.9,
          }}
          whileHover={{
            scale: 1.03,
            rotateX: 2,
            rotateY: -2,
            boxShadow:
              "0 20px 30px rgba(0,0,0,0.15), 0 10px 20px rgba(245,158,11,0.1)",
          }}
          viewport={{ once: true }}
        >
          <Image
            src="/assets/home/team.png" // Replace with your actual image path
            alt="Erreka Technical Services Team"
            width={800}
            height={600}
            className="object-cover w-full h-auto transition-transform duration-500 ease-out"
            priority
          />
        </motion.div>

        {/* Optional subtitle fade-in */}
        <motion.p
          className="text-gray-600 mt-8 text-base max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our skilled and passionate professionals work together to deliver
          seamless automation and exceptional service across every project.
        </motion.p>
      </div>
    </section>
  );
}
