import React from 'react';

const OfflineLead = () => {
  const services = [
    {
      title: "Offline Market Research & Insights",
      description: "We conduct in-depth ground research to identify market trends, customer needs, and business opportunities for your brand.",
      icon: "📊",
      gradient: "from-emerald-400 to-teal-500"
    },
    {
      title: "Lead Generation & Outreach",
      description: "Our 200+ on-ground team connects directly with retailers, wholesalers, and distributors to generate qualified offline leads for your business.",
      icon: "👥",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      title: "Business Expansion Support",
      description: "From identifying new markets to onboarding partners, we help you expand your reach and strengthen offline visibility.",
      icon: "🏢",
      gradient: "from-teal-400 to-cyan-500"
    },
    {
      title: "Distributor & Retail Network Building",
      description: "We establish strong relationships with local distributors and retailers, helping your brand penetrate new regions effectively.",
      icon: "🌐",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      title: "Field Surveys & Data Collection",
      description: "Our trained team collects reliable data directly from the market, giving you actionable insights for better decision-making.",
      icon: "📈",
      gradient: "from-blue-400 to-indigo-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0014e0] text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-repeat bg-center" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="w-4 h-4 bg-green-400 rounded-full mr-4 animate-pulse"></div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-green-200 to-emerald-300 bg-clip-text text-transparent">
              Offline Lead Generation Services
            </h1>
            <div className="w-4 h-4 bg-green-400 rounded-full ml-4 animate-pulse"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-green-300">
              Our Offline Lead Generation Services That Deliver
            </h2>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              With a pan-India ground team, we manage the full cycle of offline business development—from research and lead generation to building strong distribution networks. Whether you need to test new markets, expand into new regions, or strengthen your offline sales pipeline, our team ensures results you can measure and trust.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 h-full border border-white/20 relative overflow-hidden hover:scale-105 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className="mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg text-2xl`}>
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-green-300 group-hover:text-green-200 transition-colors">
                  {service.title}
                </h3>
                <p className="text-blue-100 leading-relaxed text-base md:text-lg">
                  {service.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full opacity-60 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95">
            Get Started Today
          </button>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-6 h-6 bg-green-400/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 right-20 w-4 h-4 bg-emerald-400/40 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-3 h-3 bg-blue-400/20 rounded-full animate-ping"></div>
      </div>
    </div>
  );
};

export default OfflineLead;