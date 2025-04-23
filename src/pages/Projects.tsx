
import React from "react";
import MainNavbar from "@/components/layout/MainNavbar";
import Footer from "@/components/about/Footer";
import { Projector } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const PROJECTS = [
  {
    name: "UltraGrid Solar Park",
    desc: "Fabricated and delivered 75MW solar mounting structures in record time.",
    period: "2024",
  },
  {
    name: "RiverSpan Transmission",
    desc: "Engineered bespoke monopoles for river crossing transmission line.",
    period: "2023",
  },
  {
    name: "Metro Industrial Substation",
    desc: "Supplied critical infrastructure steel for a metropolitan substation.",
    period: "2022",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <MainNavbar />
      <main className="container max-w-5xl mx-auto px-4 py-8 animate-fade-in">
        <h1 className="text-4xl font-bold text-primary mb-6 flex items-center gap-2">
          <Projector className="text-primary" /> Projects
        </h1>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {PROJECTS.map((p) => (
            <Card key={p.name} className="glass-morphism hover-scale transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">{p.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-1">{p.desc}</p>
                <span className="text-accent-foreground">Year: {p.period}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
