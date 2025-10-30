"use client";

import { motion } from "framer-motion";
import { Clock, Award, Shield, ThumbsUp } from "lucide-react";

export default function FeaturesSection() {
  // const features = [
  //   {
  //     icon: <Clock className="w-8 h-8 text-[#F59E0B]" />,
  //     title: "Years of Experience",
  //     description:
  //       "Benefit from our extensive experience and the deep knowledge needed to ensure your automatic doors are installed perfectly and are safe for all visitors.",
  //   },
  //   {
  //     icon: <Award className="w-8 h-8 text-[#F59E0B]" />,
  //     title: "Quality & Durability",
  //     description:
  //       "We use tough, sturdy, and durable materials such as aluminium, steel, and fibreglass to compliment your business's unique style.",
  //   },
  //   {
  //     icon: <ThumbsUp className="w-8 h-8 text-[#F59E0B]" />,
  //     title: "Unmatched Convenience",
  //     description:
  //       "Our automatic doors eliminate the effort of opening heavy manual doors and come with options for access via remote control or security code.",
  //   },
  //   {
  //     icon: <Shield className="w-8 h-8 text-[#F59E0B]" />,
  //     title: "Safety First",
  //     description:
  //       "All our doors are manufactured and installed according to the highest standards for quality and safety, ensuring a safe, convenient environment for everyone.",
  //   },
  // ];

  const features = [
    {
      icon: <Clock className="w-8 h-8 text-[#F59E0B]" />,
      title: "Extensive Experience",
      description:
        "With over 15 years of specialising in automatic entrance systems across the UAE, we bring deep technical knowledge, project-scale know-how and a full project lifecycle approach.",
    },
    {
      icon: <Award className="w-8 h-8 text-[#F59E0B]" />,
      title: "Quality & Durability",
      description:
        "We select premium aluminium and stainless-steel frames (6005-T6 / SS 304), partnered with market-leading automation drives (dormakaba, GEZE) to ensure long-life performance in high-traffic environments.",
    },
    {
      icon: <ThumbsUp className="w-8 h-8 text-[#F59E0B]" />,
      title: "Seamless Convenience",
      description:
        "From sensor-activated sliding doors to code-enabled swing systems and remote-controlled access, our solutions minimise manual effort and optimise entry/exit flows for employees, visitors and goods.",
    },
    {
      icon: <Shield className="w-8 h-8 text-[#F59E0B]" />,
      title: "Safety & Compliance First",
      description:
        "Every installation conforms to global standards (EN 16005, UL 325) and includes emergency breakout/safe-fail mechanisms, giving you peace of mind for both regulatory and operational safety.",
    },
  ];

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // delay between cards
      },
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
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Your Trusted Partner for Entrance Automation
        </motion.h2>

        {/* Features Grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              // variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow:
                  "0 12px 25px rgba(245, 158, 11, 0.15), 0 6px 10px rgba(0, 0, 0, 0.05)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-white rounded-xl shadow-md p-8 text-left flex flex-col gap-4 cursor-default"
            >
              {/* Icon with hover pulse */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {feature.icon}
              </motion.div>

              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
