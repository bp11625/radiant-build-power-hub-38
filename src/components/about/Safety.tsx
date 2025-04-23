
import { Card, CardContent } from "@/components/ui/card";
import { Shield, ShieldCheck, Calendar, Clock, Users } from "lucide-react";

const safetyPrograms = [
  {
    title: "Risk Management",
    description: "Comprehensive risk assessment and mitigation strategies to ensure workplace safety across all projects and operations.",
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
  },
  {
    title: "Daily Hazard Analysis & Recognition",
    description: "Proactive identification and assessment of potential hazards before starting work each day to prevent accidents.",
    icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Weekly Safety Toolbox Talk",
    description: "Regular team meetings focused on safety topics relevant to current projects, fostering a culture of awareness.",
    icon: <Users className="h-8 w-8 text-blue-600" />,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Daily Stretch and Flex",
    description: "Mandatory stretching exercises at the beginning of each shift to reduce musculoskeletal injuries and promote worker health.",
    icon: <Clock className="h-8 w-8 text-blue-600" />,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Continual Safety Training",
    description: "Ongoing education and certification programs ensuring all employees stay updated with the latest safety protocols and standards.",
    icon: <Calendar className="h-8 w-8 text-blue-600" />,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

const Safety = ({ showPerformance = true }: { showPerformance?: boolean }) => (
  <div className="py-16 bg-gray-100">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Safety is Our Priority</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Our commitment to safety is unwavering, with comprehensive programs designed to protect our most valuable asset – our people.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {safetyPrograms.map((program, idx) => (
          <Card key={idx} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-44 relative">
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
              <div className="flex items-start mb-2">
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
      {/* Removed Safety Performance section as requested */}
    </div>
  </div>
);

export default Safety;
