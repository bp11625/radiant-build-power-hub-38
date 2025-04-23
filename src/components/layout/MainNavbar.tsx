
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
    <nav className="w-full glass-morphism px-6 py-3 flex justify-between items-center rounded-xl mb-10 shadow-lg sticky top-0 z-30">
      <div className="flex items-center gap-3 font-extrabold text-xl text-primary">
        <img src="/favicon.ico" alt="Logo" className="w-7 h-7 mr-2" />
        Radiant Power Hub
      </div>
      <ul className="flex gap-6">
        {navLinks.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className={cn(
                "story-link px-2 py-1 rounded-lg flex items-center gap-1 font-medium transition",
                location.pathname === link.to
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:bg-primary/10"
              )}
            >
              {link.icon} {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
