"use client";

import { motion } from "framer-motion";

export default function TrackRecordSection() {
  const projects = [
    "VIVA SUPERMARKET (Multiple Locations)",
    "CROWN SCHOOL, AJMAN",
    "DHL BUILDING, RAS AL KHAIMAH",
    "ASWAAQ SUPERMARKET, DAFZA",
    "DANUBE CASA MILANO, ABU DHABI",
    "DUBAI CUSTOMS, JAFZA",
    "EMAAR SQUARE BUILDING",
    "LATIFA HOSPITAL, AL JADAF",
    "NAKHEEL LIMITLESS OFFICE, PALM JUMEIRAH",
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Our Proven Track Record
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Trusted by Leading Commercial Brands Across the UAE
        </motion.p>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              // variants={cardVariants}
              whileHover={{
                y: -5,
                scale: 1.02,
                boxShadow:
                  "0 10px 20px rgba(245,158,11,0.15), 0 4px 10px rgba(0,0,0,0.05)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-white rounded-lg shadow-sm border border-gray-100 text-left px-6 py-5 font-medium text-gray-800 flex items-center gap-3 cursor-default"
            >
              <motion.div
                layoutId={`bar-${index}`}
                className="w-1 h-10 bg-[#F59E0B] rounded-full"
                whileHover={{
                  height: 40,
                  backgroundColor: "#d97706",
                  transition: { duration: 0.3 },
                }}
              ></motion.div>
              <span>{project}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
