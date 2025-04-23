
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Info, Briefcase, Projector, Users, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Home", icon: <Home size={20} /> },
  { to: "/about", label: "About", icon: <Info size={20} /> },
  { to: "/services", label: "Services", icon: <Briefcase size={20} /> },
  { to: "/projects", label: "Projects", icon: <Projector size={20} /> },
  { to: "/clients", label: "Clients", icon: <Users size={20} /> },
  { to: "/contact", label: "Contact", icon: <Mail size={20} /> },
];

export default function MainNavbar() {
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
              className={cn(
                "font-medium flex items-center gap-1 transition-colors",
                location.pathname === link.to
                  ? "text-blue-800 border-b-2 border-blue-800"
                  : "text-gray-600 hover:text-blue-800"
              )}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
