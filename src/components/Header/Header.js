import { Phone, Instagram, Linkedin, Twitter, ChevronDown } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 max-sm:px-3">
      {/* Top Bar */}
      <div className="border-b border-gray-100">
        <div className="max-w-[1391px] mx-auto">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center space-x-2 text-gray-700">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">123456789</span>
            </div>
            <div className="flex items-center space-x-3">
              <a href="#" className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Twitter className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="w-full">
        <div className="flex justify-between items-center h-20 max-w-[1391px] ml-auto mr-auto max-sm:h-16">
          {/* Logo */}
         <a href='/'> <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <div className="text-white font-bold text-xl">∞</div>
              </div>
              <span className="text-2xl font-bold text-gray-900">Logo Here</span>
            </div>
          </div>
          </a>

          {/* Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium">
              <span>Products</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium">
              <span>Solutions</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium">
              <span>Integrations</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium">
              <span>Resources</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium">
              <span>Company</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <button className="px-6 py-2.5 text-blue-600 font-semibold hover:text-blue-700 transition-colors max-sm:px-2 max-sm:text-sm">
              Login 
            </button>
           <a href='/contact'><button className="px-6 py-2.5 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors max-sm:px-2 max-sm:text-sm">
             Contact us 
            </button></a> 
          </div>
        </div>
      </div>
    </header>
  );
}