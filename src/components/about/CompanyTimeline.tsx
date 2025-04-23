
import React, { useState } from "react";
import { Calendar as CalendarIcon, ArrowLeft, ArrowRight } from "lucide-react";

const timelineData = [
  {
    year: "2010",
    title: "Founded",
    description: "Company founded. Embarked on our mission for engineering excellence.",
  },
  {
    year: "2013",
    title: "First Major Project",
    description: "Successfully completed our first major transmission project.",
  },
  {
    year: "2017",
    title: "Expansion",
    description: "Expanded to include solar and substation sectors.",
  },
  {
    year: "2022",
    title: "Innovation Award",
    description: "Recognized for innovative, sustainable solutions in infrastructure.",
  },
];

const CompanyTimeline = () => {
  // Index of the first visible event (like a carousel)
  const [startIdx, setStartIdx] = useState(0);
  const visibleCount = 2; // Show at most 2 at once for mobile/horizontal scroll

  const handlePrev = () => {
    setStartIdx((idx) => (idx === 0 ? 0 : idx - 1));
  };

  const handleNext = () => {
    setStartIdx((idx) =>
      idx + visibleCount >= timelineData.length ? idx : idx + 1
    );
  };

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
      <div className="w-full flex justify-center mb-4 gap-6">
        <button
          className="rounded-full bg-gray-200 p-2 hover:bg-gray-300 transition-colors"
          onClick={handlePrev}
          disabled={startIdx === 0}
        >
          <ArrowLeft />
        </button>
        <button
          className="rounded-full bg-gray-200 p-2 hover:bg-gray-300 transition-colors"
          onClick={handleNext}
          disabled={startIdx + visibleCount >= timelineData.length}
        >
          <ArrowRight />
        </button>
      </div>
      <div className="flex gap-8 justify-center overflow-x-auto pb-4 scrollbar-thin" style={{ minHeight: 180 }}>
        {timelineData.slice(startIdx, startIdx + visibleCount).map((event, i) => (
          <div key={event.year} className="min-w-[240px] flex flex-col items-center bg-white rounded-xl shadow-md px-4 py-6 mx-2 border">
            <div className="flex flex-col items-center mb-2">
              <span className="text-xl font-bold text-blue-700 mb-1">{event.year}</span>
              <CalendarIcon className="h-8 w-8 text-blue-700 mb-1" />
              <span className="font-semibold">{event.title}</span>
            </div>
            <p className="text-gray-600 text-sm text-center">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyTimeline;
