
import { settings, truck, shieldCheck, microchip, headphones, fileText } from "lucide-react";

const FEATURES = [
  {
    icon: "settings",
    title: "Customize Product",
    desc: "We help each other, wherever we are. That makes perform easier."
  },
  {
    icon: "truck",
    title: "On Time Delivery",
    desc: "As you might assume, joining this industry provides new opportunities."
  },
  {
    icon: "shield-check",
    title: "Quality Assurance",
    desc: "You are able to easily utilize our interactive map to find the nearest office."
  },
  {
    icon: "microchip",
    title: "New Technologies",
    desc: "If you are in logistics, assume to work with 3–D graphics."
  },
  {
    icon: "headphones",
    title: "24/7 Support",
    desc: "Our specialists work day and night to solve all your cargo-related issues."
  },
  {
    icon: "file-text",
    title: "Manual Testing",
    desc: "Our document maintenance strategy is dependable."
  }
];

const ICONS = {
  "settings": require("lucide-react").settings,
  "truck": require("lucide-react").truck,
  "shield-check": require("lucide-react").shieldCheck,
  "microchip": require("lucide-react").microchip,
  "headphones": require("lucide-react").headphones,
  "file-text": require("lucide-react").fileText,
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
            const Icon = require("lucide-react")[f.icon.charAt(0).toUpperCase() + f.icon.slice(1).replace("-", "")];
            return (
              <div key={i}
                className={`flex flex-col items-start gap-5 px-8 py-8 bg-black/10 transition hover:bg-black/20 max-md:border-b md:border-r border-gray-700`}
                style={{ minHeight: 230 }}
              >
                <div className="rounded-full bg-blue-900/40 p-3 mb-2">
                  <Icon size={38} className="text-blue-200" strokeWidth={2.5}/>
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
