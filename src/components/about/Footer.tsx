
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-[#1a3c6b] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-white">Ratan</span>{" "}
              <span className="text-red-500">Constructions</span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Building excellence since 1990. We are committed to delivering high-quality 
              construction projects that meet and exceed client expectations.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="https://facebook.com" className="hover:text-gray-300 transition-colors p-2 bg-blue-800/30 rounded-full">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="hover:text-gray-300 transition-colors p-2 bg-blue-800/30 rounded-full">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="hover:text-gray-300 transition-colors p-2 bg-blue-800/30 rounded-full">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="hover:text-gray-300 transition-colors p-2 bg-blue-800/30 rounded-full">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-red-500"></span>
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/clientele" className="hover:text-white transition-colors">Clientele</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-red-500"></span>
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Residential Construction</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Commercial Construction</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Industrial Construction</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Renovation & Remodeling</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Project Management</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative">
              Newsletter
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-red-500"></span>
            </h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter to receive updates on our latest projects and news.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <Input 
                type="email" 
                placeholder="Your Email"
                className="bg-white/10 border-0 text-white placeholder:text-gray-400"
              />
              <Button 
                type="submit" 
                className="w-full bg-red-500 hover:bg-red-600 text-white"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ratan Constructions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
