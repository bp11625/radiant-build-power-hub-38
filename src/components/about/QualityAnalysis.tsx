
import React from "react";

export default function QualityAnalysis() {
  return (
    <div className="py-16 container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img
            src="/public/lovable-uploads/6d21e0ac-3d27-47ba-9046-ccde539ce977.png"
            className="rounded-xl w-full h-80 object-cover shadow-lg"
            alt="Quality Analysis"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-6">Quality Analysis</h2>
          <p className="text-lg text-gray-700 mb-6">
            Every structure undergoes multi-stage inspection with industry-leading precision measurement equipment.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Detailed reports and certifications are delivered for all critical components—guaranteeing reliability and compliance.
          </p>
          <ul className="list-disc ml-5 text-gray-700">
            <li>Stringent multi-point quality checks</li>
            <li>Advanced equipment and traceable results</li>
            <li>Transparency in documentation and process</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
