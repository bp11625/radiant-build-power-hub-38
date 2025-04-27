
import React from "react";
import { Link, useLocation } from "react-router-dom";

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

  return (
    <nav className="bg-white shadow-sm py-4 w-full sticky top-0 z-30">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-blue-600">Ratan</span>{" "}
          <span className="text-orange-500">Constructions</span>
        </div>
        <div className="flex space-x-6">
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
    </nav>
  );
}
