
import React from 'react';
import Hero from "../components/about/Hero";
import Services from "../components/about/Services";
import CompanyOverview from "../components/about/CompanyOverview";
import CoreValues from "../components/about/CoreValues";
import LeadershipTeam from "../components/about/LeadershipTeam";
import CompanyTimeline from "../components/about/CompanyTimeline";
import Culture from "../components/about/Culture";
import AreasOfExpertise from "../components/about/AreasOfExpertise";
import Safety from "../components/about/Safety";
import QualityAnalysis from "../components/about/QualityAnalysis";
import Footer from "../components/about/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <CompanyOverview />
      <CoreValues />
      <LeadershipTeam />
      <CompanyTimeline />
      <Culture />
      <AreasOfExpertise />
      <Safety />
      <QualityAnalysis />
      <Footer />
    </div>
  );
};

export default About;
