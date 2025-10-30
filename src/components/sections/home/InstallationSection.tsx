"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function InstallationSection() {
  const installations = [
    {
      title: "Automatic Sliding Doors",
      image: "/assets/home/section-hero-1.png",
      description:
        "High-performance automatic sliding doors for malls, offices, and hospitals — ensuring silent operation, durability, and seamless access flow across UAE businesses.",
    },
    {
      title: "Automatic Swing Doors",
      image: "/assets/home/section-hero-2.png",
      description:
        "Elegant, energy-efficient swing door systems designed for accessibility and safety in offices, hospitals, and commercial entrances across Dubai and the UAE.",
    },
    {
      title: "Automatic Breakout Doors",
      image: "/assets/home/section-hero-3.png",
      description:
        "Smart breakout door solutions that combine daily convenience with emergency egress compliance — ideal for schools, hospitals, and retail spaces in the UAE.",
    },
    {
      title: "Automatic Telescopic Doors",
      image: "/assets/home/section-hero-4.png",
      description:
        "Space-saving telescopic automatic doors that maximize clear openings in compact entrances — perfect for retail stores, corridors, and logistics facilities.",
    },
    {
      title: "Automatic & Manual Revolving Doors",
      image: "/assets/home/section-hero-5.png",
      description:
        "Premium revolving door systems that reduce air infiltration, enhance energy efficiency, and add a sophisticated look to hotels, offices, and malls.",
    },
    {
      title: "Folding Doors & Movable Partitions",
      image: "/assets/home/section-hero-6.png",
      description:
        "Versatile folding doors and movable partitions offering flexible layouts, acoustic control, and modern design for offices and commercial interiors.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-white overflow-hidden" id="services">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Our Installation Expertise
        </motion.h2>

        <motion.p
          className="text-gray-600 mt-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We fix and install a wide variety of automatic entrance systems
          tailored to your needs.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {installations.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative bg-white rounded-xl shadow-md overflow-hidden group"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              {/* Image */}
              <div className="relative w-full h-56">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay appears on hover */}
                <motion.div
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4"
                  initial={false}
                >
                  <motion.p
                    className="text-white text-sm md:text-base leading-relaxed text-center"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              </div>

              {/* Title */}
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
