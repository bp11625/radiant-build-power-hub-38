
import React from 'react';
import Navigation from '../components/about/Navigation';
import Hero from '../components/about/Hero';
import CompanyOverview from '../components/about/CompanyOverview';
import CoreValues from '../components/about/CoreValues';
import Services from '../components/about/Services';
import CompanyTimeline from '../components/about/CompanyTimeline';
import Safety from '../components/about/Safety';
import CallToAction from '../components/about/CallToAction';
import Footer from '../components/about/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <CompanyOverview />
      <CoreValues />
      <Services />
      <CompanyTimeline />
      <Safety />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default About;
