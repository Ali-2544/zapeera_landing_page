'use client'

import Image from "next/image";
import Container from "../ui/container";

const FeaturesOverview = () => {
  
  const features = [
    {
      title: "Product & Category Management",
      description: "Organize products by category, brand, or type for faster billing and better inventory control.",
      image: "/images/inventory.jpeg",
    },
    {
      title: "Supplier & Manufacturer Management",
      description: "Maintain supplier records, purchase history, and pricing to streamline procurement.",
      image: "/images/multibranch.jpeg",
    },
    {
      title: "Purchase Order Automation",
      description: "Generate and track purchase orders automatically based on stock levels and demand.",
      image: "/feature/Branch Menagement.webp",
    },
    {
      title: "Batch & Expiry Tracking",
      description: "Monitor batch numbers and expiry dates to reduce losses and ensure compliance.",
      image: "/images/inventory.jpeg",
    },
    {
      title: "Customer Management (CRM)",
      description: "Store customer details, track purchase history, and manage returns and refunds easily.",
      image: "/images/staff.jpeg",
    },
    {
      title: "Smart Billing & Invoicing",
      description: "Create accurate invoices instantly with taxes, discounts, and multiple payment options.",
      image: "/images/smart_invoice.jpeg",
    },
    {
      title: "Role-Based Access Control",
      description: "Control system access by assigning permissions based on staff roles and responsibilities.",
      image: "/images/staff.jpeg",
    },
    {
      title: "Business Insights Dashboard",
      description: "View real-time sales, inventory, and performance metrics from a single dashboard.",
      image: "/images/Retail POS.jpeg",
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-[#F9FEFE] gradient-to-br from-[#26D2C6]/10 via-white to-[#1C22AA]/10">
      <Container size="xl" padding="none">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Header */}
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="text-[48px] font-bold text-gray-900 mb-4 lg:mb-6 font-montserrat">
              Powerful Features That Simplify Business Management
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to manage inventory, billing, suppliers, staff, and reporting — all built into one cloud-based POS and business management platform.
            </p>
          </div>

          {/* Features Grid - 3 Columns Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-4 hover:border-[#1947C4]/50 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturesOverview;
