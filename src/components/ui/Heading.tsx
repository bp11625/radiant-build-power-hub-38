
import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

const Heading = ({ children, className = "" }: HeadingProps) => (
  <div className="mb-8">
    <h2 className={`text-4xl font-bold text-center text-[#1a3c6b] ${className}`}>
      {children}
      <div className="w-24 h-1 bg-red-500 mx-auto mt-4" />
    </h2>
  </div>
);

export default Heading;
