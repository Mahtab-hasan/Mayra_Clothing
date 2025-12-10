export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-12 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Quick Links */}
          <div className="animate-slideInUp">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#shop" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Shop
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="animate-slideInUp">
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors duration-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#shipping-returns" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="animate-slideInUp">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61572141774208" className="text-gray-400 hover:text-white transition-colors duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://wa.me/8801799659201" className="text-gray-400 hover:text-white transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://www.instagram.com/mahfujlhasan/" className="text-gray-400 hover:text-white transition-colors duration-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-slideInRight">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <i className="fas fa-map-marker-alt mr-2"></i>
                494/1 South goran khilgoan, Dhaka 1219
              </li>
              <li className="flex items-center text-gray-400">
                <i className="fab fa-whatsapp mr-2"></i>
                <a href="https://wa.me/8801799659201" className="hover:text-white transition-colors duration-300" target="_blank" rel="noopener noreferrer">+880 1799-659201</a>
              </li>
              {/* Add more contact info */}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center animate-slideInUp">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Mayra Origin. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {/* Payment method images */}
          </div>
        </div>
      </div>
    </footer>
  );
}