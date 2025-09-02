import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function ClanAboutPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What We Do ?",
      answer: "We provide comprehensive digital solutions including web development, mobile applications, digital marketing strategies, SEO optimization, social media management, and brand development. Our team specializes in creating custom solutions tailored to your business needs."
    },
    {
      question: "Our Approach",
      answer: "We follow a data-driven approach combining creativity with strategic thinking. Our process includes thorough research, strategic planning, agile development, continuous testing, and ongoing optimization to ensure maximum ROI for our clients."
    },
    {
      question: "Why Choose Clan?",
      answer: "With years of experience and a proven track record, we deliver results that matter. Our team of experts stays updated with the latest technologies and trends to provide cutting-edge solutions that give you a competitive advantage."
    },
    {
      question: "Our Process",
      answer: "We start with understanding your business goals, then move to strategy development, design and development phases, rigorous testing, deployment, and ongoing support. Every step is transparent and collaborative."
    }
  ];

  return (
    <div className="min-h-screen bg-blue-700">
      {/* Main Section */}
      <div className=" relative overflow-hidden">
        

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
              <span className="text-green-400">ABOUT</span>
              <span className="text-white"> US</span>
            </h1>
            <div className="w-32 h-1 bg-white mb-8"></div>
            
            <p className="text-white text-xl md:text-2xl leading-relaxed font-light">
            {`  At Clan, we believe every business—whether a startup or an established brand—deserves 
              the right tools, strategies, and digital presence to thrive in today's competitive market. We 
              are not just a service provider; we are your growth partner, helping you connect with the 
              right audience, build trust, and achieve measurable results.`}
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className=" relative overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-blue-300 rounded-sm"></div>
            ))}
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-blue-600 border border-blue-500 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-blue-500 transition-colors duration-200"
                >
                  <h3 className="text-green-400 text-2xl md:text-3xl font-bold">
                    {faq.question}
                  </h3>
                  <div className="bg-green-400 rounded-full p-2 ml-4 flex-shrink-0">
                    {openFaq === index ? (
                      <Minus className="w-6 h-6 text-blue-800" />
                    ) : (
                      <Plus className="w-6 h-6 text-blue-800" />
                    )}
                  </div>
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-blue-400 pt-4">
                      <p className="text-white text-lg leading-relaxed">
                        {faq.answer}
                      </p>
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