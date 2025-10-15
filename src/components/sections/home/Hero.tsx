"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-start bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/entrance-bg.jpg')", // Replace with your actual image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-8 text-left text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Seamless & Secure Automatic <br /> Entrance Solutions
        </h1>

        <p className="mt-4 text-lg text-gray-200">
          We enhance the flow and convenience in your business by providing
          innovative and reliable automated entrance solutions for the front,
          back, and interior of any building.
        </p>

        <Link
          href="/quote"
          className="mt-6 inline-block bg-[#F59E0B] hover:bg-[#d88604] text-white font-medium px-6 py-3 rounded-md transition-colors duration-200"
        >
          Get a Free Quote
        </Link>
      </div>
    </section>
  );
}
