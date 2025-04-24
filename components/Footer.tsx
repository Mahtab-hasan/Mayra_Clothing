export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-12 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="animate-slideInLeft">
            <h3 className="text-lg font-semibold mb-4">About Mayra Clothing</h3>
            <p className="text-gray-400">
              Premium DTF printed clothing in Bangladesh since 2018. We offer
              high-quality fashion at affordable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-slideInUp">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              {/* Add more links */}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-slideInRight">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <i className="fas fa-map-marker-alt mr-2"></i>
                123 Fashion Street, Dhaka, Bangladesh
              </li>
              {/* Add more contact info */}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center animate-slideInUp">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2023 Mayra Clothing. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {/* Payment method images */}
          </div>
        </div>
      </div>
    </footer>
  );
}