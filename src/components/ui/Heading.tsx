
import React from "react";

interface HeadingProps {
  title?: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  center,
  className = "",
  children,
}) => {
  const headingText = title || children;
  
  return (
    <div
      className={`
        ${center ? "text-center" : "text-start"}
        ${className}
      `}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
        <span className="relative pb-2">
          {headingText}
          <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500"></span>
        </span>
      </h2>
      {subtitle && <p className="text-gray-600 text-lg mt-2">{subtitle}</p>}
    </div>
  );
};

export default Heading;
