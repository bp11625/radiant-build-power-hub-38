
import React from "react";
import { useNavigate } from "react-router-dom";
import MainNavbar from "@/components/layout/MainNavbar";
import Footer from "@/components/about/Footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <MainNavbar />
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-9xl font-bold text-[#1a3c6b]">404</h1>
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Button 
            onClick={() => navigate("/")}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg"
          >
            Go Back Home
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
