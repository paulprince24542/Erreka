"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MaintenanceSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="bg-white rounded-2xl shadow-sm p-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div className="flex-1 text-gray-700">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              Reliable & Proactive Maintenance
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              At Erreka Technical Services, we understand that even the best
              entrance systems need ongoing care. Our Full Maintenance Scheme
              covers automatic door systems for commercial properties across
              Dubai and the UAE, offering scheduled inspections, priority
              breakdown response (4-hour response time), a stocked parts
              warehouse and a fixed-cost invoicing model to assist with
              budgeting.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Our clients include retail chains, logistics warehouses and
              high-rise office towers with 24/7 operational demands. By
              entrusting us with your maintenance, you reduce unplanned
              downtime, extend system life and maintain compliance with safety
              certifications.
            </p>

            <Link
              href="/maintenance"
              className="inline-flex items-center bg-[#F59E0B] hover:bg-[#d88604] text-white font-medium px-6 py-3 rounded-md transition-colors duration-200"
            >
              Schedule Maintenance
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center">
            <div className="overflow-hidden rounded-xl shadow-md">
              <Image
                src="/assets/home/maintainence.png" // Replace with your image path
                alt="Maintenance Illustration"
                width={500}
                height={350}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
