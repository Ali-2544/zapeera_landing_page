'use client'

import Image from "next/image";
import { Check } from "lucide-react";
import Container from "../ui/container";

const AboutSection = () => {
  return (
    <section className=" bg-white">
      <Container size="xl" padding="none">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Image */}
            <div className="relative w-full h-[400px] lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden   ">
              <Image
                src="/images/dashboard.png"
                alt="About Zapeera"
                fill
                className="object-contain shadow-2xl "
                sizes="(max-width: 1024px) , "
                priority
              />
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 font-montserrat">
                  About Zapeera
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                Zapeera is a powerful business management platform built to help businesses of all sizes succeed. We combine POS software, inventory management, staff control, and analytics in one user-friendly cloud system.
                </p>
              </div>

              {/* Key Points */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1947C4]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#1947C4]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Automated Management</h3>
                    <p className="text-sm text-gray-600">Zapeera handles the heavy lifting of inventory calculations, sales, purchases, and accounting, freeing you from manual tasks</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1947C4]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#1947C4]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Scalable & Affordable</h3>
                    <p className="text-sm text-gray-600">From a single store to dozens of outlets, our platform scales as your business grows.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1947C4]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#1947C4]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Trusted by Many</h3>
                    <p className="text-sm text-gray-600">500+ Pakistani businesses use Zapeera to streamline operations and focus on growth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;

