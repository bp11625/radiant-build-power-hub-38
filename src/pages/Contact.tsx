
import React from "react";
import MainNavbar from "@/components/layout/MainNavbar";
import Footer from "@/components/about/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <MainNavbar />
      <main className="container max-w-3xl mx-auto px-4 py-8 animate-fade-in">
        <h1 className="text-4xl font-bold text-primary mb-6 flex items-center gap-2">
          <Mail className="text-primary" /> Contact Us
        </h1>
        <section className="grid md:grid-cols-2 gap-10 mb-10">
          <Card className="glass-morphism">
            <CardHeader>
              <CardTitle>Company Info</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-2 mb-4">
                <MapPin size={20} className="mt-1" />
                <span>221B Power Avenue, Tech Industrial City, Country</span>
              </div>
              <div className="flex items-start gap-2 mb-2">
                <Phone size={20} className="mt-1" />
                <span>+1 234 567 8901</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={20} className="mt-1" />
                <span>info@radiantpowerhub.com</span>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-morphism">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                className="flex flex-col gap-4"
                onSubmit={e => {
                  e.preventDefault();
                  window.alert("Thank you! We'll get back to you soon.");
                }}
              >
                <Input placeholder="Your Name" required />
                <Input placeholder="Your Email" type="email" required />
                <Textarea placeholder="Your Message" required className="min-h-[100px]" />
                <Button type="submit" className="w-full">Send</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
