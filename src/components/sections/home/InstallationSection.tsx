"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function InstallationSection() {
  const installations = [
    {
      title: "Automatic Sliding Doors",
      image: "/assets/home/section-hero-1.png",
      description:
        "Seamless glass doors that ensure smooth entry and exit for high-traffic areas.",
    },
    {
      title: "Automatic Swing Doors",
      image: "/assets/home/section-hero-2.png",
      description:
        "Energy-efficient swing systems that combine style and accessibility.",
    },
    {
      title: "Automatic Breakout Doors",
      image: "/assets/home/section-hero-3.png",
      description:
        "Designed for safety and convenience in commercial and emergency exits.",
    },
    {
      title: "Automatic Telescopic Doors",
      image: "/assets/home/section-hero-4.png",
      description:
        "Compact door systems ideal for areas with limited side space.",
    },
    {
      title: "Automatic & Manual Revolving Doors",
      image: "/assets/home/section-hero-5.png",
      description:
        "Enhance energy efficiency and style with our revolving door solutions.",
    },
    {
      title: "Folding Doors & Movable Partitions",
      image: "/assets/home/section-hero-6.png",
      description:
        "Flexible and elegant partition systems for modern interiors and offices.",
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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* Section Title */}
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

        {/* Animated Grid */}
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
              // variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative bg-white rounded-xl shadow-md overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <motion.div
                className="relative w-full h-56"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
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
              </motion.div>

              {/* Title */}
              <motion.div
                className="p-5 text-left"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                  {item.title}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
