
import React from "react";
import MainNavbar from "@/components/layout/MainNavbar";
import Footer from "@/components/about/Footer";
import { Briefcase, Book } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SERVICES = [
  {
    icon: <Book />,
    title: "Transmission & Distribution Structures",
    desc: "Turnkey fabrication and delivery of transmission monopoles, towers, and substation structures.",
  },
  {
    icon: <Briefcase />,
    title: "Substation & Pipe Structures",
    desc: "Precision steel fabrication for substation, industrial, and pipe infrastructure.",
  },
  {
    icon: <Book />,
    title: "Solar Mounting & Renewable",
    desc: "Solar module mounting fabrication and smart renewable solutions.",
  },
  {
    icon: <Briefcase />,
    title: "Telecom & Infra Solutions",
    desc: "Custom rollout of telecom towers, infrastructure for robust network expansion.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <MainNavbar />
      <main className="container max-w-6xl mx-auto px-4 py-8 animate-fade-in">
        <h1 className="text-4xl font-bold text-primary mb-6 flex items-center gap-2">
          <Briefcase className="text-primary" /> Our Services
        </h1>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {SERVICES.map((service) => (
            <Card key={service.title} className="glass-morphism hover-scale transition-all">
              <CardHeader>
                <CardTitle className="flex gap-2 items-center text-2xl">{service.icon} {service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
