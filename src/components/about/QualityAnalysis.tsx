
import React from "react";
import { ShieldCheck, FileText } from "lucide-react";

export default function QualityAnalysis() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Quality Analysis</h2>
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
          <div className="flex-1 flex flex-col items-center md:items-end">
            <img
              src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=500&q=80"
              className="rounded-xl w-72 shadow-lg"
              alt="Quality check"
            />
          </div>
          <div className="flex-1 flex flex-col gap-3 max-w-xl">
            <div className="flex items-center mb-3">
              <ShieldCheck className="text-blue-600 w-8 h-8 mr-3" />
              <h3 className="text-xl font-semibold">Stringent Standards</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Every structure undergoes multi-stage inspection with industry-leading precision measurement equipment.
            </p>
            <div className="flex items-center mb-3">
              <FileText className="text-blue-600 w-8 h-8 mr-3" />
              <h3 className="text-xl font-semibold">Comprehensive Documentation</h3>
            </div>
            <p className="text-gray-700">
              Detailed reports and certifications are delivered for all critical components—guaranteeing reliability and compliance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
