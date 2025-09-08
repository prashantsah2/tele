import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function ClanAboutPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

const faqs = [
  {
    question: "What Does Clan Digital Do?",
    answer: "Clan Digital is a full-service IT, marketing, and advertising agency. We offer website and mobile app development, digital branding, social media marketing, performance advertising, SEO, and strategic consulting. Our goal is to help businesses grow and stand out in the digital space."
  },
  {
    question: "What Is Your Marketing Approach?",
    answer: "Our marketing strategies are data-driven and creatively executed. We blend digital insights with powerful storytelling, ensuring every campaign not only looks great but delivers measurable results across platforms like Google Ads, Facebook, Instagram, LinkedIn, and more."
  },
  {
    question: "Why Partner with Clan Digital?",
    answer: "At Clan Digital, we combine technical expertise with marketing excellence. Whether you're a startup or an established brand, our team delivers customized, ROI-focused solutions that drive growth. We stay ahead of digital trends, ensuring your brand stays relevant and competitive."
  },
  {
    question: "How Do You Manage Projects?",
    answer: "We follow a transparent and collaborative workflow. From discovery and strategy to design, development, and campaign execution, we keep clients involved at every step. Post-launch, we provide analytics, optimization, and continuous support to maximize success."
  }
];

  return (
    <div className="min-h-screen  w-full flex flex-col justify-center items-center">
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        
        .faq-content-enter {
          max-height: 0;
          opacity: 0;
        }
        
        .faq-content-enter-active {
          max-height: 200px;
          opacity: 1;
          transition: max-height 0.5s ease-out, opacity 0.3s ease-out;
        }
        
        .faq-content-exit {
          max-height: 200px;
          opacity: 1;
        }
        
        .faq-content-exit-active {
          max-height: 0;
          opacity: 0;
          transition: max-height 0.5s ease-out, opacity 0.3s ease-out;
        }
      `}</style>
      {/* Main Section */}
      <div className=" relative overflow-hidden w-full max-w-[1391px] mt-[2rem]">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" className="w-full h-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
        
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bebas mb-8">
              <span className="text-primary">ABOUT</span>
              <span className="text-primary"> US</span>
            </h1>
            <div className="w-32 h-1 bg-white mb-8"></div>
            
            <p className="text-white text-xl md:text-2xl leading-relaxed font-light">
             {` At Clan, we believe every business—whether a startup or an established brand—deserves 
              the right tools, strategies, and digital presence to thrive in today's competitive market. We 
              are not just a service provider; we are your growth partner, helping you connect with the 
              right audience, build trust, and achieve measurable results.`}
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full max-w-[1371px] relative overflow-hidden">
        {/* Grid Pattern Background */}
       

        <div className="relative z-10 container mx-auto px-6 py-16 w-full">
          <div className="max-w-[1371px] mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[rgba(16,72,241,0.06)] border border-blue-500 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left transition-colors duration-200"
                >
                  <h3 className="text-green-400 text-2xl md:text-3xl font-bold">
                    {faq.question}
                  </h3>
                  <div className="bg-green-400 rounded-full p-2 ml-4 flex-shrink-0 transition-transform duration-300 ease-in-out transform hover:scale-110">
                    <div className={`transition-transform duration-500 ease-in-out ${openFaq === index ? 'rotate-180' : 'rotate-0'}`}>
                      {openFaq === index ? (
                        <Minus className="w-6 h-6 text-blue-800" />
                      ) : (
                        <Plus className="w-6 h-6 text-blue-800" />
                      )}
                    </div>
                  </div>
                </button>
                
                {openFaq === index && (
                  <div className="overflow-hidden transition-all duration-500 ease-in-out">
                    <div className="px-6 pb-6 animate-fade-in">
                      <div className="border-t border-blue-400 pt-4">
                        <p className="text-white text-lg leading-relaxed transform transition-all duration-500 ease-in-out translate-y-0 opacity-100">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}