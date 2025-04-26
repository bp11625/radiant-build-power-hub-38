import React from "react";
import Footer from "@/components/about/Footer";
import MainNavbar from "@/components/layout/MainNavbar";
import Hero from "@/components/about/Hero";
import CompanyOverview from "@/components/about/CompanyOverview";
import CoreValues from "@/components/about/CoreValues";
import AreasOfExpertise from "@/components/about/AreasOfExpertise";
import CompanyTimeline from "@/components/about/CompanyTimeline";
import Safety from "@/components/about/Safety";
import Culture from "@/components/about/Culture";
import OurTechnology from "@/components/about/OurTechnology";
import QualityAnalysis from "@/components/about/QualityAnalysis";
import Heading from "@/components/ui/Heading";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <MainNavbar />
      <Hero />
      <main className="container max-w-5xl mx-auto px-4 py-8 animate-fade-in">
        <div className="mb-6">
          <Heading>About Us</Heading>
          <p className="mb-8 text-xl text-muted-foreground max-w-4xl leading-[1.7] text-center">
            We are industry leaders in high-quality engineering fabrication, offering robust solutions in transmission, substation, solar, telecom, and infrastructure sectors.
          </p>
        </div>
        <CompanyOverview />
        <section className="my-12">
          <CoreValues />
        </section>
        <section className="my-12">
          <AreasOfExpertise />
        </section>
        <OurTechnology />
        <QualityAnalysis />
        <section className="my-12">
          <Safety showPerformance={false} />
          <Culture />
        </section>
        <section className="my-12">
          <CompanyTimeline />
        </section>
      </main>
      <Footer />
    </div>
  );
}
