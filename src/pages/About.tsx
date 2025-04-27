
import React from 'react';
import MainNavbar from "../components/layout/MainNavbar";
import Hero from "../components/about/Hero";
import Services from "../components/about/Services";
import CompanyOverview from "../components/about/CompanyOverview";
import CoreValues from "../components/about/CoreValues";
import Culture from "../components/about/Culture";
import AreasOfExpertise from "../components/about/AreasOfExpertise";
import Safety from "../components/about/Safety";
import QualityAnalysis from "../components/about/QualityAnalysis";
import Footer from "../components/about/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <MainNavbar />
      <Hero />
      <Services />
      <CompanyOverview />
      <CoreValues />
      <Culture />
      <Safety />
      <QualityAnalysis />
      <Footer />
    </div>
  );
};

export default About;
