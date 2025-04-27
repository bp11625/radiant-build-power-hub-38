
import React from "react";
import MainNavbar from "@/components/layout/MainNavbar";
import Footer from "@/components/about/Footer";
import AboutUs from "@/components/home/AboutUs";
import CounterSection from "@/components/home/CounterSection";
import ProjectEnquiry from "@/components/home/ProjectEnquiry";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HomeHero from "@/components/home/HomeHero";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsSection from "@/components/home/ProjectsSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <MainNavbar showContact={true} />
      <main>
        <HomeHero />
        <AboutUs />
        <CounterSection />
        <ProjectEnquiry />
        <ServicesSection />
        <ProjectsSection />
        <ProjectEnquiry />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}
