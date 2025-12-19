import { ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="relative  overflow-hidden py-12 lg:py-16 bg-white">
      {/* Background gradient */}
      <div className="absolute " />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-montserrat">
            Ready to Simplify Your Business?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join over 500 Pakistani businesses already growing smarter with Zapeera's cloud-based POS and inventory management software. Start your 14-day free trial today and see the difference Zapeera makes (no credit card needed)!
          </p>

          <div className="flex items-center justify-center">
            <Button size="lg" className="bg-gradient-to-r from-[#29CDCF] to-[#1947C4] hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full font-semibold group" asChild>
              <Link href="/contact-us">
                Start Your Free Trial Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
