import { Facebook, Instagram, Linkedin, MapPin, Mail } from 'lucide-react';

export default function Footerw() {
  return (
    <footer className="bg-[#111] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Clan Digital</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
               {` Clan Digital is India's fast-growing IT Service and Marketing agency, assisting 
                startups and small businesses worldwide in establishing their online 
                presence and driving measurable growth.`}
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-700 hover:bg-green-400 p-3 rounded-full transition-all duration-300 hover:scale-110 group">
                <Facebook className="w-5 h-5 text-white group-hover:text-gray-900" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-green-400 p-3 rounded-full transition-all duration-300 hover:scale-110 group">
                <Instagram className="w-5 h-5 text-white group-hover:text-gray-900" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-green-400 p-3 rounded-full transition-all duration-300 hover:scale-110 group">
                <Linkedin className="w-5 h-5 text-white group-hover:text-gray-900" />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white relative">
              Services
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-green-400"></div>
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm">Search Engine Optimisation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm">Website Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm">Email Marketing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm">Content Marketing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm">Social Media Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm">Social Media Advertising</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm">Pay Per Click Ads</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white relative">
              Company
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-green-400"></div>
            </h4>
            <ul className="space-y-3 mb-8">
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm">Case Studies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm">Contact Us</a></li>
            </ul>
            
            <h4 className="text-xl font-semibold mb-6 text-white relative">
              Learn
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-green-400"></div>
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm">Blogs</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white relative">
              Contact
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-green-400"></div>
            </h4>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <div className="bg-green-400 p-2 rounded-lg mt-1">
                  <MapPin className="w-4 h-4 text-gray-900" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    A-49 Engine House<br />
                    Mohan Industrial Estate<br />
                    Mathura Road<br />
                    New Delhi<br />
                    India
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-green-400 p-2 rounded-lg">
                  <Mail className="w-4 h-4 text-gray-900" />
                </div>
                <a href="mailto:info@clan.business" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm">
                  info@clan.business
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Clan Digital. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}