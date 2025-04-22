
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PowerBuild Construction</h3>
            <p className="text-gray-400">Building tomorrow's infrastructure today with innovation and excellence.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Solar Energy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Construction</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Electrical Power Plants</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fabrication</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Logistics</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>123 Construction Way</p>
              <p>Building City, BC 12345</p>
              <p className="mt-4">Phone: (123) 456-7890</p>
              <p>Email: info@powerbuild.com</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-gray-400 text-center">
          <p>&copy; {new Date().getFullYear()} PowerBuild Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
