import Container from "../ui/container";

const steps = [
  {
    number: 1,
    title: "Create Your Account",
    description: "Sign up for a free trial in minutes to join Zapeera.",
  },
  {
    number: 2,
    title: "Configure Your Store",
    description: "Set up taxes, currency (PKR), and preferences through our intuitive dashboard.",
  },
  {
    number: 3,
    title: "Add Your Products",
    description: "Import inventory via CSV or add items manually; include images, prices, and categories.",
  },
  {
    number: 4,
    title: "Start Selling",
    description: "Open your store and process sales immediately. Zapeera syncs stock in real time across all devices and branches.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative overflow-hidden py-12 lg:py-16 bg-white">
      <Container size="xl" padding="none">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Section Heading */}
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="text-[48px] font-bold text-gray-900 mb-4 lg:mb-6 font-montserrat">
              Getting Started
            </h2>
          </div>

          {/* Steps Timeline */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-8 h-0.5 bg-gray-200" style={{ top: '2rem', left: 'calc(12.5% + 32px)', right: 'calc(12.5% + 32px)' }}></div>
            
            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative text-center"
                >
                  {/* Step Number Circle */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 ${
                    index === 0 
                      ? "bg-[#E9FAF9] border-2 border-[#1947C4]/30" 
                      : "bg-[#E9FAF9] border-2 border-[#1947C4]/30"
                  }`}>
                    <span className={`text-xl font-bold ${
                      index === 0 ? "text-black" : "text-black"
                    }`}>
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;