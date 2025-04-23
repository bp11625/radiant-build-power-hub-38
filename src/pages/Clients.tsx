
import React from "react";
import MainNavbar from "@/components/layout/MainNavbar";
import Footer from "@/components/about/Footer";
import { Users } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const CLIENTS = [
  {
    name: "GridIron Utilities",
    logo: "/placeholder.svg",
    desc: "Leading power distribution client served since 2019.",
  },
  {
    name: "SolarStream Innovations",
    logo: "/placeholder.svg",
    desc: "Solar infrastructure & engineering partnership.",
  },
  {
    name: "TeleLink Networks",
    logo: "/placeholder.svg",
    desc: "National telecom rollout partner.",
  },
];

export default function Clients() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <MainNavbar />
      <main className="container max-w-4xl mx-auto px-4 py-8 animate-fade-in">
        <h1 className="text-4xl font-bold text-primary mb-6 flex items-center gap-2">
          <Users className="text-primary" /> Our Clients
        </h1>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {CLIENTS.map((client) => (
            <Card key={client.name} className="glass-morphism hover-scale flex flex-row items-center gap-5 p-5">
              <img src={client.logo} alt={client.name} className="w-20 h-20 object-contain rounded-md border border-primary/30 bg-background" />
              <div>
                <CardTitle className="text-xl mb-1">{client.name}</CardTitle>
                <CardContent className="p-0 text-muted-foreground">{client.desc}</CardContent>
              </div>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
