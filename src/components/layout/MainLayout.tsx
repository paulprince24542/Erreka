import React from "react";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {" "}
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
