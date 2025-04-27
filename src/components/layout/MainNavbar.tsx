
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

type MainNavbarProps = {
  showContact?: boolean;
};

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/clients", label: "Clients" },
];

export default function MainNavbar({ showContact = true }: MainNavbarProps) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-sm py-4 w-full sticky top-0 z-30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-blue-600">Ratan</span>{" "}
            <span className="text-orange-500">Constructions</span>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-medium transition-colors ${
                  location.pathname === link.to
                    ? "text-blue-800 border-b-2 border-blue-800"
                    : "text-gray-600 hover:text-blue-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {showContact && (
              <Link
                to="/contact"
                className={`font-medium transition-colors ${
                  location.pathname === "/contact"
                    ? "text-blue-800 border-b-2 border-blue-800"
                    : "text-gray-600 hover:text-blue-800"
                }`}
              >
                Contact
              </Link>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden mt-4 space-y-4`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block font-medium transition-colors ${
                location.pathname === link.to
                  ? "text-blue-800 border-b-2 border-blue-800"
                  : "text-gray-600 hover:text-blue-800"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {showContact && (
            <Link
              to="/contact"
              className={`block font-medium transition-colors ${
                location.pathname === "/contact"
                  ? "text-blue-800 border-b-2 border-blue-800"
                  : "text-gray-600 hover:text-blue-800"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
