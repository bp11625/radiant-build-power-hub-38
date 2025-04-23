
import React, { useState } from "react";
import { Calendar as CalendarIcon, ArrowLeft, ArrowRight } from "lucide-react";

const timelineData = [
  {
    year: "2002",
    title: "Company founded",
    description: "Ratan Constructions began with a vision to set new standards in engineering excellence.",
  },
  {
    year: "2006",
    title: "First Infrastructure Success",
    description: "Completed first landmark commercial infra project.",
  },
  {
    year: "2010",
    title: "Expansion",
    description: "Expanded into solar, substation, and telecom sectors—diversifying our expertise.",
  },
  {
    year: "2015",
    title: "100+ Projects",
    description: "Surpassed 100 projects, growing our skilled workforce and reputation.",
  },
  {
    year: "2019",
    title: "Award-Winning Safety Record",
    description: "Received regional awards for safety & sustainable practices.",
  },
  {
    year: "2024",
    title: "Innovation & Future",
    description: "Leveraging technology for smarter, greener, more resilient solutions.",
  }
];

const CompanyTimeline = () => {
  const [startIdx, setStartIdx] = useState(0);
  const visibleCount = 3;

  const handlePrev = () => setStartIdx(idx => Math.max(0, idx - 1));
  const handleNext = () => setStartIdx(idx => Math.min(timelineData.length - visibleCount, idx + 1));

  // Remove horizontal scroll by simply using flex without overflow-x
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-10 text-center">Our Journey</h2>
      <div className="flex items-center justify-center gap-2 mb-8">
        <button
          className="rounded-full bg-blue-100 p-3 hover:bg-blue-300 transition-colors shadow"
          onClick={handlePrev}
          disabled={startIdx === 0}
        >
          <ArrowLeft />
        </button>
        <div className="flex gap-6 px-6 py-2">
          {timelineData.slice(startIdx, startIdx + visibleCount).map((event, i) => (
            <div
              key={event.year}
              className="min-w-[270px] max-w-xs bg-white border-2 border-blue-100 shadow-lg rounded-xl flex flex-col items-center px-6 py-5 relative group transition hover:scale-105 hover:border-blue-500"
            >
              <span className="text-xl font-extrabold text-blue-700 mb-2">{event.year}</span>
              <CalendarIcon className="h-10 w-10 text-blue-700 mb-2" />
              <span className="font-bold mb-1 text-lg">{event.title}</span>
              <p className="text-gray-600 text-center">{event.description}</p>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 hidden group-hover:block transition"><span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">Learn More</span></div>
            </div>
          ))}
        </div>
        <button
          className="rounded-full bg-blue-100 p-3 hover:bg-blue-300 transition-colors shadow"
          onClick={handleNext}
          disabled={startIdx + visibleCount >= timelineData.length}
        >
          <ArrowRight />
        </button>
      </div>
      <div className="flex justify-center gap-1 mt-1">
        {timelineData.map((_, idx) => (
          <span
            key={idx}
            className={`inline-block w-2 h-2 rounded-full mx-0.5 ${idx >= startIdx && idx < startIdx + visibleCount ? 'bg-blue-600' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default CompanyTimeline;
