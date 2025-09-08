"use client"
import Hero2 from "@/components/Hero2/Hero2";
import OurProjects from "@/components/OurProjects/OurProjects";
import Static11 from "@/components/Static11/Static11";
import OurProjects2 from "@/components/OurProjects2/OurProjects2";
import BentoSet2 from "@/components/BentoSet2/BentoSet2";
import Footer2 from "@/components/Footer2/Footer2";
import Header3 from "@/components/Header3/Header3";

export default function Campaign() {


  const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start' 
    });
  }
};


  return (
    <>
      {/* <HeaderNew/> */}
      <Header3 />
      <Hero2 />

      <div className="w-full flex justify-center items-center flex-col ">
        <Static11 />

    <div className="bg-primarybg text-white p-8 md:p-12 lg:p-16 w-full">
      {/* View Our Services Section */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          View Our <span className="text-primary">Services</span>
        </h2>
        <p className="text-lg md:text-xl text-white mb-12 max-w-3xl mx-auto leading-relaxed">
          Explore our comprehensive range of services designed to help your business grow and succeed in the digital world.
        </p>
        
        {/* Service Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* Offline Services Button */}
        

          {/* Online Services Button */}
          <a >
            <button className="group relative bg-[#c9db00] text-[#222] font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl min-w-64 border-2 border-white"
            
            onClick={() => scrollToSection('online-services')}
>
              <div className="flex items-center justify-center space-x-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z"/>
                </svg>
              <span>Online Services</span>
            </div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
          </button>
          </a>
          <a href="/services">
            <button className="group relative bg-[#c9db00] text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl min-w-64">
            <div className="flex items-center justify-center space-x-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7V10C2 16 6 20.9 12 22C18 20.9 22 16 22 10V7L12 2Z"/>
              </svg>
              <span>Offline Services</span>
            </div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
          </button>
        </a>
        </div>

        {/* Additional call-to-action text */}
        <p className="text-white/80 mt-8 text-lg">
          Choose the service type that best fits your business needs
        </p>
      </div>
    </div>

        <OurProjects2 />
       {/*  <BentoSet2/> */}
      </div>

      <Footer2/>
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
    </>
  );
}
