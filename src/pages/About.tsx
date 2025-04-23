
import React from "react";
import CompanyOverview from "@/components/about/CompanyOverview";
import CoreValues from "@/components/about/CoreValues";
import LeadershipTeam from "@/components/about/LeadershipTeam";
import CompanyTimeline from "@/components/about/CompanyTimeline";
import Footer from "@/components/about/Footer";
import ExpertiseHover from "@/components/about/ExpertiseHover";
import MainNavbar from "@/components/layout/MainNavbar";
import Hero from "@/components/about/Hero";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <MainNavbar showContact={false} />
      <Hero />
      <main className="container max-w-5xl mx-auto px-4 py-8 animate-fade-in">
        <h1 className="text-4xl font-bold mb-2">
          <ExpertiseHover title="About Us" />
        </h1>
        <p className="mb-8 text-xl text-muted-foreground max-w-2xl">
          We are industry leaders in high-quality engineering fabrication, offering robust solutions in transmission, substation, solar, telecom, and infrastructure sectors.
        </p>
        <CompanyOverview />

        <section className="my-12">
          <CoreValues />
        </section>

        <section className="my-12">
          <LeadershipTeam />
        </section>

        <section className="my-12">
          <CompanyTimeline />
        </section>
      </main>
      <Footer />
    </div>
  );
}

