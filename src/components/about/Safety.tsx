
import { Card, CardContent } from "@/components/ui/card";
import { Shield, ShieldCheck, Calendar, Clock, Users } from "lucide-react";

const Safety = () => {
  const safetyPrograms = [
    {
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies to ensure workplace safety across all projects and operations.",
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
    },
    {
      title: "Daily Hazard Analysis & Recognition",
      description: "Proactive identification and assessment of potential hazards before starting work each day to prevent accidents.",
      icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Weekly Safety Toolbox Talk",
      description: "Regular team meetings focused on safety topics relevant to current projects, fostering a culture of awareness.",
      icon: <Users className="h-8 w-8 text-blue-600" />,
      image: "/lovable-uploads/eb3c17ee-a759-4377-ba92-19ff75a909a7.png"
    },
    {
      title: "Daily Stretch and Flex",
      description: "Mandatory stretching exercises at the beginning of each shift to reduce musculoskeletal injuries and promote worker health.",
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Continual Safety Training",
      description: "Ongoing education and certification programs ensuring all employees stay updated with the latest safety protocols and standards.",
      icon: <Calendar className="h-8 w-8 text-blue-600" />,
      image: "/lovable-uploads/eb3c17ee-a759-4377-ba92-19ff75a909a7.png"
    }
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Safety is Our Priority</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our commitment to safety is unwavering, with comprehensive programs designed to protect our most valuable asset – our people.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {safetyPrograms.map((program, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 relative">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4">
                    <h3 className="text-white text-xl font-semibold">{program.title}</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-5">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-2 bg-blue-50 rounded-full">
                    {program.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{program.title}</h3>
                    <p className="text-gray-600">{program.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-blue-600 text-white p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Safety Performance</h3>
              <p className="mb-4">Our dedication to safety has resulted in an industry-leading record:</p>
              <ul className="list-disc list-inside">
                <li>0 lost-time incidents in the past 24 months</li>
                <li>98% safety compliance score across all projects</li>
                <li>45,000+ hours of safety training completed annually</li>
              </ul>
            </div>
            <div className="mt-6 md:mt-0">
              <ShieldCheck className="h-24 w-24 text-white opacity-75" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Safety;
