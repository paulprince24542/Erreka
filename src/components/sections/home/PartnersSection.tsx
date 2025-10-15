"use client";

export default function PartnersSection() {
  const partners = [
    "dormakaba",
    "GEZE",
    "GILGEN DOOR SYSTEMS",
    "TORMAX",
    "ASSA ABLOY",
    "STANLEY",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Partnering with Industry Leaders
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We use only the most trusted and innovative brands in the industry to
          guarantee performance and reliability.
        </p>

        {/* Partner Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 text-center text-gray-800 font-medium hover:shadow-md transition-all duration-200"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
