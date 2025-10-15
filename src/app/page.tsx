import AboutSection from "@/components/sections/home/AboutSection";
import ContactSection from "@/components/sections/home/ContactSection";
import FeaturesSection from "@/components/sections/home/FeaturesSection";
import Hero from "@/components/sections/home/Hero";
import InstallationSection from "@/components/sections/home/InstallationSection";
import MaintenanceSection from "@/components/sections/home/MaintainenceSection";
import PartnersSection from "@/components/sections/home/PartnersSection";
import TeamSection from "@/components/sections/home/TeamSection";
import TrackRecordSection from "@/components/sections/home/TrackRecordSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <InstallationSection />
      <MaintenanceSection />
      <PartnersSection />
      <TrackRecordSection />
      <TeamSection />
      <ContactSection />
    </>
  );
}
