
import React from "react";
import { Users } from "lucide-react";

const cultureValues = [
  {
    title: "Collaboration",
    desc: "We foster teamwork, open communication, and innovation at every level."
  },
  {
    title: "Diversity & Inclusion",
    desc: "We value diverse backgrounds and perspectives, creating a unified yet unique workplace."
  },
  {
    title: "Continuous Learning",
    desc: "We encourage upskilling, growth, and development for all team members."
  },
  {
    title: "Integrity",
    desc: "We champion honesty, fairness, and transparency in all relationships."
  },
  {
    title: "Community Impact",
    desc: "We give back to the community and take pride in positive social impact."
  }
];

export default function Culture() {
  return (
    <section className="py-16">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-3">Our Culture</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          At Ratan Constructions, our culture is built on passion, trust, and shared vision—ensuring that every project uplifts our people, partners, and community.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cultureValues.map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl p-8 shadow-md flex flex-col items-center hover:shadow-lg transition-shadow">
            <Users className="h-10 w-10 text-orange-500 mb-3" />
            <h3 className="font-bold text-xl mb-2">{item.title}</h3>
            <p className="text-gray-600 text-center">{item.desc}</p>
          </div>
        ))}
      </div>
      {/* Creative: CTA or quote */}
      <div className="mt-16 text-center italic text-blue-600 text-lg font-semibold">
        “Great things in business are never done by one person; they're done by a team of people.”
      </div>
    </section>
  );
}
