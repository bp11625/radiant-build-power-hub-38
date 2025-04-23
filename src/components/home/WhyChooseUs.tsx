
import { Settings, Truck, ShieldCheck, Microchip, Headphones, FileText } from "lucide-react";

const FEATURES = [
  {
    icon: "Settings",
    title: "Customize Product",
    desc: "We help each other, wherever we are. That makes perform easier."
  },
  {
    icon: "Truck",
    title: "On Time Delivery",
    desc: "As you might assume, joining this industry provides new opportunities."
  },
  {
    icon: "ShieldCheck",
    title: "Quality Assurance",
    desc: "You are able to easily utilize our interactive map to find the nearest office."
  },
  {
    icon: "Microchip",
    title: "New Technologies",
    desc: "If you are in logistics, assume to work with 3–D graphics."
  },
  {
    icon: "Headphones",
    title: "24/7 Support",
    desc: "Our specialists work day and night to solve all your cargo-related issues."
  },
  {
    icon: "FileText",
    title: "Manual Testing",
    desc: "Our document maintenance strategy is dependable."
  }
];

// Map of icon names to icon components
const ICONS_MAP = {
  "Settings": Settings,
  "Truck": Truck,
  "ShieldCheck": ShieldCheck,
  "Microchip": Microchip,
  "Headphones": Headphones,
  "FileText": FileText,
};

export default function WhyChooseUs() {
  return (
    <section
      className="relative py-20 bg-[#171f2c]"
      style={{
        backgroundImage:
          "url('/public/lovable-uploads/5b6133ec-5c88-45b6-83bc-0e6cb57bf052.png'), linear-gradient(to right,#171f2c,#222940 80%)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay"
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-2">Why <span className="text-blue-300">Choose Us?</span></h2>
        <p className="text-gray-300 mb-12 text-lg max-w-2xl leading-relaxed">
          Total Solution of Printed Circuit Boards with Consistent Quality, Appropriate Delivery &amp; Competitive cost
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-600 divide-y md:divide-y-0 md:divide-x divide-gray-600">
          {FEATURES.map((f, i) => {
            const IconComponent = ICONS_MAP[f.icon];
            return (
              <div key={i}
                className={`flex flex-col items-start gap-5 px-8 py-8 bg-black/10 transition hover:bg-black/20 max-md:border-b md:border-r border-gray-700`}
                style={{ minHeight: 230 }}
              >
                <div className="rounded-full bg-blue-900/40 p-3 mb-2">
                  <IconComponent size={38} className="text-blue-200" strokeWidth={2.5}/>
                </div>
                <h4 className="text-xl font-semibold text-white">{f.title}</h4>
                <p className="text-gray-400">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
