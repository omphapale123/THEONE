import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-black border-t border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="https://static.readdy.ai/image/3d57a04e89a19f07dff1eb2283051a78/e6ca406b546d401d19570da8f5f5f82c.png" 
                  alt="OffshoreBrücke Logo" 
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <span className="text-2xl font-bold text-primary font-pacifico">OffshoreBrücke</span>
            </div>
            <p className="text-textLight mb-6 max-w-md leading-relaxed">
              The digital bridge for EU-India SME expansion. Empowering European businesses 
              for seamless market expansion and offshoring with AI-powered solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-textLight hover:text-primary transition-colors duration-300 cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-textLight hover:text-primary transition-colors duration-300 cursor-pointer">
                  About Us
                </a>
              </li>
              <li>
                <a href="/technology" className="text-textLight hover:text-primary transition-colors duration-300 cursor-pointer">
                  Features
                </a>
              </li>
              <li>
                <a href="/gcc-benefits" className="text-textLight hover:text-primary transition-colors duration-300 cursor-pointer">
                  GCC Access in India
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-textLight">
                <i className="ri-mail-line mr-3 text-primary"></i>
                offshorebruecke@gmail.com
              </li>
              <li className="flex items-center text-textLight">
                <i className="ri-phone-line mr-3 text-primary"></i>
                +49 173 9712627
                +91 9699216625
              </li>
              <li className="flex items-center text-textLight">
                <i className="ri-map-pin-line mr-3 text-primary"></i>
                Munich, Germany
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="https://www.linkedin.com/company/offshorebr%C3%BCcke/" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
                <i className="ri-linkedin-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
                <i className="ri-twitter-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
                <i className="ri-mail-fill"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-textLight text-sm mb-4 md:mb-0">
              © 2025 OffshoreBrücke. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="/privacy-policy" className="text-textLight hover:text-primary text-sm transition-colors duration-300 cursor-pointer">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-textLight hover:text-primary text-sm transition-colors duration-300 cursor-pointer">
                Terms of Service
              </a>
              <a href="https://readdy.ai/?origin=logo" className="text-textLight hover:text-primary text-sm transition-colors duration-300 cursor-pointer">
                Website Builder
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
