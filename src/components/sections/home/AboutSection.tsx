"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white overflow-hidden" id="about">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div
          className="flex-1 text-gray-700"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About Erreka <br className="hidden md:block" />
            Technical Services
          </motion.h2>

          <motion.p
            className="text-base leading-relaxed mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Founded in 2014 and based in Dubai, Erreka Technical Services
            L.L.C. serves the UAE’s commercial building sector with premium
            automatic entrance systems. Specialising in automatic sliding,
            swing, revolving and telescopic door installations, we combine local
            expertise, certified installers and maintenance support to deliver
            seamless access solutions. With a client-first approach and a
            portfolio spanning retail, hospitality, logistics and healthcare
            facilities, our mission is to build safe, efficient and dependable
            entrances that elevate visitor experience and operational
            performance.
          </motion.p>

          <motion.p
            className="text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Our mission is to do everything possible to create a secure future,
            one installation at a time. Our smart access and security solutions
            are designed to create infrastructures that are efficient,
            convenient, and give you a feeling of complete security and trust.
          </motion.p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="overflow-hidden rounded-xl shadow-lg"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <Image
              src="/assets/home/hero-2.png" // Replace with your image path
              alt="Erreka Technical Services"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
